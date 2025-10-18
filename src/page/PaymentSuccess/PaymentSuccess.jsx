import React, { useEffect, useState } from "react";
import { CheckCircle, ShoppingBag, Home, Download } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState(null);
  console.log(paymentInfo)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const tran_id = searchParams.get("tran_id");

  useEffect(() => {
    localStorage.removeItem("cart");
    localStorage.removeItem("totalAmount");

    if (tran_id) {
      fetch(`http://localhost:5000/api/payment/status/${tran_id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setPaymentInfo(data.payment);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching payment:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [tran_id]);

const generatePDF = (paymentInfo) => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Payment Receipt", 105, 20, { align: "center" });

  doc.setDrawColor(100);
  doc.line(20, 25, 190, 25);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Customer Information", 20, 40);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${paymentInfo.customer_name}`, 20, 50);
  doc.text(`Email: ${paymentInfo.customer_email}`, 20, 58);
  doc.text(`Phone: ${paymentInfo.customer_phone}`, 20, 66);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Payment Details", 20, 82);

  const tableData = [
    ["Transaction ID", paymentInfo.tran_id],
    ["Amount Paid", `${paymentInfo.total_amount}৳`],
    ["Payment Method", paymentInfo.payment_method || "N/A"],
    ["Status", "✓ Successful"],
  ];

  autoTable(doc, {
    startY: 88,
    head: [["Field", "Value"]],
    body: tableData,
    theme: "striped",
    styles: { fontSize: 11, cellPadding: 5 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255, fontStyle: "bold" },
  });

  const finalY = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(12);
  doc.setTextColor(80);
  doc.text("Thank you for your purchase! 🎉", 105, finalY, { align: "center" });
  doc.text("© 2025 Your Company Name", 105, finalY + 10, { align: "center" });

  doc.save(`Payment_Receipt_${paymentInfo.tran_id}.pdf`);
};


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
      <div className="success-card animate-fade">
        <div className="success-icon-wrapper animate-pop">
          <CheckCircle size={80} className="success-icon" />
        </div>

        <h1 className="success-title">Payment successful!</h1>
        <p className="success-message">
         Your order has been successfully completed. Your product will be delivered soon.
        </p>

        <div className="payment-details animate-slide">
          <h3 className="details-title">Payment Details</h3>
          <div className="detail-row">
            <span className="detail-label">Transaction ID:</span>
            <span className="detail-value">{paymentInfo?.tran_id || tran_id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Amount Paid:</span>
            <span className="detail-value success-amount">
              {paymentInfo?.total_amount}৳
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Customer Name:</span>
            <span className="detail-value">{paymentInfo?.customer_name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{paymentInfo?.customer_email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">{paymentInfo?.customer_phone}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value status-success">✓ Successful</span>
          </div>
        </div>

        <div className="success-actions">
          <button className="btn-primary" onClick={() => navigate("/")}>
            <Home size={20} />
            Go to Home
          </button>
          <button className="btn-secondary" onClick={() => navigate("/profile/order")}>
            <ShoppingBag size={20} />
            View Orders
          </button>
          <button className="btn-download" onClick={() => generatePDF(paymentInfo)}>
  <Download size={20} />
  Download Receipt
</button>
        </div>

        <p className="thank-you-text">
          আমাদের সাথে কেনাকাটা করার জন্য ধন্যবাদ 💚
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
