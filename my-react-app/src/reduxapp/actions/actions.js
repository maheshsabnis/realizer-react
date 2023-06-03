export const addProduct=(product)=>{
   product.ProductName = product.ProductName.toUpperCase();
   
   return {
    type: 'ADD_PRODUCT',
    product // payload
   };
};