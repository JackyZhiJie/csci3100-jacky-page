import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setProcessingTo] = useState(false);
  const handleSumit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form id="payment-form" onSubmit={handleSumit}>
      <PaymentElement />
      <button type="submit" disabled={isProcessing}>
        <span id="button-text">{isProcessing ? "Processing..." : "Pay now"}</span>
      </button>
    </form>
  );
}
