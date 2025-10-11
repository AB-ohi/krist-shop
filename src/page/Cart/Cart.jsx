import React, { useEffect, useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from "lucide-react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
 const navigate = useNavigate();
 
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.total_price, 0);
  };

  const updateQuantity = (index, change) => {
    const updatedItems = [...cartItems];
    const newQuantity = Math.max(1, updatedItems[index].quantity + change);
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].total_price =
      updatedItems[index].main_price * newQuantity;
    setCartItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("আপনার কার্টে কোন পণ্য নেই!");
      return;
    }
    
    // Total price localStorage এ save করুন
    localStorage.setItem("totalAmount", getTotalPrice());
    
    // Payment page এ redirect করুন
    navigate("/payment");
  };


  return (
    <div className="cart-container">
      <div className="cart-max-width">
        {/* Header */}

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="cart-header">
              <div className="cart-header-content">
                <div className="cart-icon-wrapper">
                  <ShoppingCart className="cart-icon-white" size={24} />
                </div>
                <h1 className="cart-title">Your Shopping Cart</h1>
              </div>
              <p className="cart-subtitle">Review your items before checkout</p>
            </div>
            <div className="empty-cart-icon">
              <ShoppingCart className="empty-cart-icon-gray" size={40} />
            </div>
            <h3 className="empty-cart-title">Your cart is empty</h3>
            <p className="empty-cart-text">Add some items to get started!</p>
          </div>
        ) : (
          <div className="cart-items-container">
          <div>
              <div className="cart-header">
              <div className="cart-header-content">
                <div className="cart-icon-wrapper">
                  <ShoppingCart className="cart-icon-white" size={24} />
                </div>
                <h1 className="cart-title">Your Shopping Cart</h1>
              </div>
              <p className="cart-subtitle">Review your items before checkout</p>
            </div>
            {/* Cart Items */}
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-content">
                    {/* Product Image */}
                    <div className="product-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.product_name}
                        className="product-image"
                      />
                      {item.discount > 0 && (
                        <div className="discount-badge">-{item.discount}%</div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="product-details">
                      <h3 className="product-name">{item.product_name}</h3>
                      <div className="product-price-wrapper">
                        <span className="product-price">
                          {item.main_price}৳
                        </span>
                        {item.discount > 0 && (
                          <span className="product-original-price">
                            {Math.round(
                              item.main_price / (1 - item.discount / 100)
                            )}
                            ৳
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="quantity-btn"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="quantity-btn"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="item-actions">
                      <div className="item-total-price">
                        {item.total_price}৳
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="remove-btn"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Order Summary */}
            <div className="order-summary">
              <div className="order-summary-header">
                <h3 className="order-summary-title">
                  <CreditCard size={24} />
                  Order Summary
                </h3>
              </div>
              <div className="order-summary-content">
                <div className="summary-row">
                  <span className="summary-label">Subtotal:</span>
                  <span className="summary-value">{getTotalPrice()}৳</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Shipping:</span>
                  <span className="summary-value summary-free">Free</span>
                </div>
                <div className="summary-divider">
                  <div className="grand-total-row">
                    <span className="grand-total-label">Grand Total:</span>
                    <span className="grand-total-value">
                      {getTotalPrice()}৳
                    </span>
                  </div>
                </div>

                {/* Buy Now Button */}
                <button onClick={handleBuyNow} className="buy-now-btn">
                  <CreditCard size={20} />
                  Buy Now - {getTotalPrice()}৳
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
