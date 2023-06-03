import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryContext } from '../PrimaryContext';
import './index.css';


const ProductListing = () => {
  const { products, filteredProducts, setFilteredProducts } = useContext(PrimaryContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="product-buttons">
        <button onClick={() => handleCategoryClick('all')}>All Products</button>
        <button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button>
        <button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button>
        <button onClick={() => handleCategoryClick('jewelery')}>Jewelry</button>
        <button onClick={() => handleCategoryClick('electronics')}>Electronics</button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h3>
              <Link to={`/products/${product.id}`} onClick={() => handleProductClick(product)}>
                {product.title}
              </Link>
            </h3>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="product_image" />
            </Link>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="selected-product">
          <h3>{selectedProduct.title}</h3>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="selected-product-image"
          />
        </div>
      )} 
    </div>
  );
};

export default ProductListing;