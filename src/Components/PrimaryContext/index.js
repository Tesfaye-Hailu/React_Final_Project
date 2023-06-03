
// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const PrimaryContext = createContext();

// const PrimaryProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//     console.log('Added to cart:', product);
//   };

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach((item) => {
//       totalPrice += item.price;
//     });
//     return totalPrice.toFixed(2);
//   };

//   const finalizePayment = () => {
//     console.log('Payment finalized in cash');
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const contextValue = {
//     products,
//     addToCart,
//     cartItems,
//     setCartItems,
//     calculateTotalPrice,
//     finalizePayment,
//     clearCart,
//   };

//   return (
//     <PrimaryContext.Provider value={contextValue}>
//       {children}
//     </PrimaryContext.Provider>
//   );
// };

// export { PrimaryContext, PrimaryProvider };


//////////////


// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const PrimaryContext = createContext();

// const PrimaryProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [cartItems, setCartItems] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]); // Add filteredProducts state and setter

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCategoryClick = (category) => {
//     console.log('Selected category:', category);
//     console.log('All products:', products);
//     const filtered = products.filter((product) => product.category === category);
//     console.log('Filtered products:', filtered);
//     setFilteredProducts(filtered);
//   };

//   const addToCart = (product) => {
//         setCartItems([...cartItems, product]);
        
//       };
    
//       const calculateTotalPrice = () => {
//         let totalPrice = 0;
//         cartItems.forEach((item) => {
//           totalPrice += item.price;
//         });
//         return totalPrice.toFixed(2);
//       };
    
//       const finalizePayment = () => {
        
//       };
    
//       const clearCart = () => {
//         setCartItems([]);
//       };
    
//       if (isLoading) {
//         return <div>Loading...</div>;
//       }
    
//       const contextValue = {
//         products,
//         addToCart,
//         cartItems,
//         setCartItems,
//         calculateTotalPrice,
//         finalizePayment,
//         clearCart,
//         filteredProducts,
//         setFilteredProducts,
//       };
    
//       return (
//         <PrimaryContext.Provider value={contextValue}>
//           {children}
//         </PrimaryContext.Provider>
//       );
//     };
    
//     export { PrimaryContext, PrimaryProvider };
    
//////////////////


import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PrimaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Add filteredProducts state and setter

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    console.log('Selected category:', category);
    console.log('All products:', products);
    const filtered = products.filter((product) => product.category === category);
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems([...cartItems, product]);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice.toFixed(2);
  };

  const finalizePayment = () => {
    console.log('Payment finalized');
  };

  const clearCart = () => {
    console.log('Clearing cart');
    setCartItems([]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const contextValue = {
    products,
    addToCart,
    cartItems,
    setCartItems,
    calculateTotalPrice,
    finalizePayment,
    clearCart,
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <PrimaryContext.Provider value={contextValue}>
      {children}
    </PrimaryContext.Provider>
  );
};

export { PrimaryContext, PrimaryProvider };
