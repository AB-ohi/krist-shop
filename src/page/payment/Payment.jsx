import React, { useState, useEffect } from "react";
import { CreditCard, ShoppingBag, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const amount = localStorage.getItem("totalAmount") || 0;
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    
    setTotalAmount(parseFloat(amount));
    setCartItems(items);

    if (items.length === 0) {
      alert("আপনার কার্টে কোন পণ্য নেই!");
      navigate("/cart");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSSLCommerz = async (e) => {
    e.preventDefault();
    
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert("সকল তথ্য পূরণ করুন!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/payment/init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          total_amount: totalAmount,
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone,
          customer_address: customerInfo.address,
          product_name: cartItems.map(item => item.product_name).join(", "),
          product_category: "General",
          cart_items: cartItems,
        }),
      });

      const data = await response.json();

      if (data.success && data.GatewayPageURL) {
        window.location.href = data.GatewayPageURL;
      } else {
        alert("পেমেন্ট শুরু করতে সমস্যা হয়েছে!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("পেমেন্ট প্রক্রিয়া ব্যর্থ হয়েছে!");
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {/* Header */}
        <div className="payment-header">
          <div className="payment-header-icon">
            <ShoppingBag size={32} />
          </div>
          <h1 className="payment-title">Complete Your Order</h1>
          <p className="payment-subtitle">Secure payment with SSLCommerz</p>
        </div>

        {/* Order Summary Card */}
        <div className="order-summary-card">
          <h3 className="order-summary-card-title">
            <ShoppingBag size={20} />
            Order Summary
          </h3>
          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.image} alt={item.product_name} className="order-item-image" />
                <div className="order-item-details">
                  <p className="order-item-name">{item.product_name}</p>
                  <p className="order-item-quantity">Qty: {item.quantity}</p>
                </div>
                <p className="order-item-price">{item.total_price}৳</p>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total Amount:</span>
            <span className="order-total-amount">{totalAmount}৳</span>
          </div>
        </div>
        <form onSubmit={handleSSLCommerz} className="payment-form">
          <div className="form-section">
            <h3 className="form-section-title">Customer Information</h3>
            
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                placeholder="example@email.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="01XXXXXXXXX"
                className="form-input"
                maxLength="11"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Delivery Address *</label>
              <textarea
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                placeholder="Enter your complete delivery address"
                className="form-textarea"
                rows="3"
                required
              ></textarea>
            </div>
          </div>

          {/* Payment Gateway Info */}
          <div className="info-box-ssl">
            <CheckCircle size={20} />
            <div>
              <p className="info-title">SSLCommerz Payment Gateway</p>
              <p className="info-text">
                You can use all major payment methods including Visa, MasterCard, bKash, Nagad, and Rocket.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="payment-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Processing...
              </>
            ) : (
              <>
                <CreditCard size={20} />
                Proceed to Payment - {totalAmount}৳
              </>
            )}
          </button>

          <button 
            type="button" 
            className="back-to-cart-btn"
            onClick={() => navigate("/cart")}
          >
            Back to Cart
          </button>
        </form>

        {/* Security Info */}
        <div className="security-info">
          <p>🔒 Your payment is 100% secure and encrypted by SSLCommerz</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;