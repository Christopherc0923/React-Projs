import React, { useState } from 'react';


function ProductQuantityList(props) {
  const [products, setProducts] = useState(props.products);
  const [quantities, setQuantities] = useState(props.quantities);

  function handleChange(index, value, step = 1) {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value) + step;
    setQuantities(newQuantities);
  }

  function handleAddProduct() {
    setProducts([...products, "New Product"]);
    setQuantities([...quantities, 0]);
  }

  function handleDeleteProduct(index) {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);

    const newQuantities = [...quantities];
    newQuantities.splice(index, 1);
    setQuantities(newQuantities);
  }

  return (
    <div className="product-quantity-list">
      {products.map((product, index) => (
        <div key={index} className="product-quantity-list-item">
          <button className="delete" onClick={() => handleDeleteProduct(index)}>X</button>
          <label htmlFor={`quantity-${index}`}>{product}</label>
          <input
            type="number"
            id={`quantity-${index}`}
            value={quantities[index]}
            onChange={(event) => handleChange(index, event.target.value)}
          />
        </div>
      ))}
      <button className="add" onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default ProductQuantityList;