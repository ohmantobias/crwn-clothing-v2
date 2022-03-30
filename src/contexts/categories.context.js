// import { useState, createContext, useEffect } from "react";

// import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
//   setProducts: () => null,
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   const value = { categoriesMap };

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const getCategoryMap = await getCategoriesAndDocument();
//       setCategoriesMap(getCategoryMap);
//     };
//     getCategoriesMap();
//   }, []);

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
