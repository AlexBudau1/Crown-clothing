import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';
import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils';
import {setCategories} from '../../store/categories/category.action';
import {useDispatch} from 'react-redux';

const Shop = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        const getCategoiesMap = async()=>{
            const categoriesArray = await getCategoriesAndDocument();
            dispatch(setCategories(categoriesArray));
        }

        getCategoiesMap();
    }, [dispatch]);


    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;