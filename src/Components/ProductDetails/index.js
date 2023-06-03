
// import React, { useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { PrimaryContext } from '../../Components/PrimaryContext';
// import './index.css';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { products, setCartItems } = useContext(PrimaryContext);
//   const product = products.find((p) => p.id === parseInt(id));
//   const navigate = useNavigate();

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = () => {
//     setCartItems((prevCart) => [...prevCart, product]);
//     navigate('/cart', { state: { totalPrice: product.price } });
//   };

//   return (
//     <div className="product-details">
//       <h1 className="product-details-title">Product Details</h1>
//       <h2>
//         <span className="product-name">Product Name:</span>{' '}
//         <span className="product-title">{product.title}.</span>
//       </h2>
//       <h3>
//         <span className="product-description-label">Product Description:</span>{' '}
//         <span className="product-description">{product.description}</span>.
//       </h3>
//       <h4>
//         <span className="product-price-label">Price: </span>
//         <span className="product-price-value">${product.price}</span>
//       </h4>
//       <h4>
//         <span className="product-category-label">Category: </span>
//         <span className="product-category-value">{product.category}</span>
//       </h4>
//       <h4>
//         <span className="product-rating-label">Rating: </span>
//         <span className="product-rating-value">{product.rating.rate}</span>
//       </h4>
//       <div className="add-to-cart">
//         <button onClick={handleAddToCart}>Add to Cart</button>
//       </div>
//       <img src={product.image} alt={product.title} className="product-image" />
//     </div>
//   );
// };

// export default ProductDetails;
////////////////////////

import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PrimaryContext } from '../../Components/PrimaryContext';
import './index.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, setCartItems } = useContext(PrimaryContext);
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setCartItems((prevCart) => [...prevCart, product]);
    navigate('/cart', { state: { totalPrice: product.price } });
  };

//   return (
//     <div className="product-details">
//       <h1 className="product-details-title">Product Details</h1>
//       <div className="product-info">
//         <div className="product-info-item">
//           <span className="product-info-label">Product Name:</span>{' '}
//           <span className="product-info-value">{product.title}</span>
//         </div>
//         <div className="product-info-item">
//           <span className="product-info-label">Price:</span>{' '}
//           <span className="product-info-value">${product.price}</span>
//         </div>
//         <div className="product-info-item">
//           <span className="product-info-label">Category:</span>{' '}
//           <span className="product-info-value">{product.category}</span>
//         </div>
//         <div className="product-info-item">
//           <span className="product-info-label">Rating:</span>{' '}
//           <span className="product-info-value">{product.rating.rate}</span>
//         </div>
//         <div className="product-info-item">
//           <button className="add-to-cart-button" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       <br />
//       <div className="product-description">
//         <span className="product-info-label">Product Description:</span>
       
//         <span className="product-info-value">{product.description}</span>
//       </div>
//       <div className="product-image-container">
//         <img src={product.image} alt={product.title} className="product-image" />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

return (
  <div className="product-details">
    <h1 className="product-details-title">Product Details</h1>
    <div className="product-info">
      <div className="product-info-item">
        <span className="product-info-label">Product Name:</span>{' '}
        <span className="product-info-value">{product.title}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <span className="product-info-label">Price:</span>{' '}
        <span className="product-info-value">${product.price}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <span className="product-info-label">Category:</span>{' '}
        <span className="product-info-value">{product.category}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <span className="product-info-label">Rating:</span>{' '}
        <span className="product-info-value">{product.rating.rate}</span>
      </div>
      <span className="separator">|</span> {/* Separator */}
      <div className="product-info-item">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
    <br />
      <div className="product-description">
        <span className="product-info-label">Product Description:</span>
       
        <span className="product-info-value">{product.description}</span>
      </div>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
    </div>
  );
};

export default ProductDetails;
