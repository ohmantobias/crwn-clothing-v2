import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../button/button.component";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const curUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: curUser ? curUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    }
    if (paymentResult.paymentIntent.status === "succeeded") {
      alert("payment succesful");
    }
  };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType="inverted">
          Pay now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
