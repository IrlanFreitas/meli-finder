import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    products: [],
    breadCrumb: [],
    product: {},
    term: "",
    type: "",
};

export const termProduct = createAction('TERM_PRODUCTS');
export const typeProduct = createAction('TYPE_PRODUCTS');
export const listProducts = createAction('LIST_PRODUCTS');
export const detailProduct = createAction('DETAIL_PRODUCTS');
export const breadCrumbProduct = createAction('BREADCRUMB_PRODUCTS');

export default createReducer(INITIAL_STATE, {
    [listProducts.type]: (state, action) => {
        return { ...state, action: action.payload }
    },
    [termProduct.type]: (state, action) => {
        return { ...state, action: action.payload }
    },
    [typeProduct.type]: (state, action) => {
        return { ...state, action: action.payload }
    },
    [detailProduct.type]: (state, action) => {
        return { ...state, action: action.payload }
    },
    [breadCrumbProduct.type]: (state, action) => {
        return { ...state, action: action.payload }
    }
});