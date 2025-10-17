import React, { useEffect, useState } from "react";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
 const [searchParams] = useSearchParams();
 console.log(searchParams)
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const tran_id = searchParams.get("tran_id");

  useEffect(() => {
    localStorage.removeItem("cart");
    localStorage.removeItem("totalAmount");
    if (tran_id) {
      fetch(`http://localhost:5000/api/payment/status/${tran_id}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setPaymentInfo(data.payment);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching payment:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [tran_id]);

  if (loading) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="spinner-large"></div>
          <p>Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon-wrapper">
          <CheckCircle size={80} className="success-icon" />
        </div>
        
        <h1 className="success-title">পেমেন্ট সফল হয়েছে!</h1>
        <p className="success-message">
          আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। শীঘ্রই আপনার পণ্য ডেলিভারি করা হবে।
        </p>

        {paymentInfo ? (
          <div className="payment-details">
            <h3 className="details-title">Payment Details</h3>
            <div className="detail-row">
              <span className="detail-label">Transaction ID:</span>
              <span className="detail-value">{paymentInfo.tran_id}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Amount Paid:</span>
              <span className="detail-value success-amount">{paymentInfo.total_amount}৳</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Customer Name:</span>
              <span className="detail-value">{paymentInfo.customer_name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{paymentInfo.customer_email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{paymentInfo.customer_phone}</span>
            </div>
            {paymentInfo.payment_method && (
              <div className="detail-row">
                <span className="detail-label">Payment Method:</span>
                <span className="detail-value">{paymentInfo.payment_method}</span>
              </div>
            )}
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span className="detail-value status-success">✓ Successful</span>
            </div>
          </div>
        ) : (
          <div className="payment-details">
            <h3 className="details-title">Payment Details</h3>
            <div className="detail-row">
              <span className="detail-label">Transaction ID:</span>
              <span className="detail-value">{tran_id || "N/A"}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Status:</span>
              <span className="detail-value status-success">✓ Payment Successful</span>
            </div>
            <p className="info-text">আপনার পেমেন্ট সফল হয়েছে। বিস্তারিত তথ্য শীঘ্রই আপনার ইমেইলে পাঠানো হবে।</p>
          </div>
        )}

        <div className="success-actions">
          <button 
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            <Home size={20} />
            Go to Home
          </button>
          <button 
            className="btn-secondary"
            onClick={() => navigate("/profile/order")}
          >
            <ShoppingBag size={20} />
            View Orders
          </button>
        </div>

        <p className="thank-you-text">
          আমাদের সাথে কেনাকাটা করার জন্য ধন্যবাদ! 🎉
        </p>
      </div>
    </div>
  );
};
export default PaymentSuccess
