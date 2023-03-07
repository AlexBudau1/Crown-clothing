import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=>{
        const getCategoiesMap = async()=>{
            const categoryMap = await getCategoriesAndDocument();
            setCategoriesMap(categoryMap);
        }

        getCategoiesMap();
    }, []);

    const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )

}