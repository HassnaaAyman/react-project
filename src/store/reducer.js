import * as actionTypes from "./action";
import ProductImg from "../assets/img/products/product-grey-1.jpg";


const intiateState = {
  products: [
    { id: 1, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: true, priceAfter: 100 },
    { id: 2, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: false },
    { id: 3, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: true, priceAfter: 100 },
    { id: 4, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: false, priceAfter: 100 },
    { id: 5, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: false },
    { id: 6, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: true },
    { id: 7, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: false },
    { id: 8, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: true, priceAfter: 100 },
    { id: 9, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: true },
    { id: 10, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: false, priceAfter: 100 },
    { id: 11, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: true },
    { id: 12, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: false },
    { id: 13, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: true, priceAfter: 100 },
    { id: 14, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: false },
    { id: 15, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, priceAfter: 100, onSale: true },
    { id: 16, name: "photo camera", ProductImg: ProductImg, priceBefore: 399, onSale: false, priceAfter: 100 },
  ],
  productDetails: {}

};

const reducer = (state = intiateState, action) => {
  switch (action.type) {
    case actionTypes.ADDPRODUCT:
      let newProduct = action.productData;
      let newProducts = [...state.products];
      newProducts.push(newProduct);
      console.log(newProduct)
      return {
        ...state,
        products: newProducts
      }

    case actionTypes.DELETEPRODUCT:
      let deletedProduct = [...state.products]
      let productId = deletedProduct.findIndex(product => product.id !== action.productData.id);
      deletedProduct.splice(productId, 1)
      console.log(deletedProduct)
      return {
        ...state,
        products: deletedProduct
      }

    case actionTypes.SHOWPRODUCTDETAILS:
      let detailProductCopy = { ...state.productDetails };
      let index = state.products.findIndex(p => p.id == action.id);
      detailProductCopy = state.products[index];

      return {
        ...state,
        productDetails: detailProductCopy
      }

    default:
      return { ...state };
  }
};
export default reducer;
