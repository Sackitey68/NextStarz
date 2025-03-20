export const getPaystackConfig = (userEmail) => ({
  reference: `NEXTSTARZ_${new Date().getTime()}`,
  email: userEmail || "user@example.com",
  amount: 10000,
  publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  secretKey: import.meta.env.VITE_PAYSTACK_SECRET_KEY,
  currency: "GHS",
});

// Initialize Paystack payment
export const initializePaystackPayment = (config, onSuccess, onClose) => {
  const initializePayment = usePaystackPayment(config);
  return () => initializePayment(onSuccess, onClose);
};

// Payment success handler
export const onSuccess = async (reference, config) => {
  alert("Payment successful");
  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference.reference}`,
      {
        headers: {
          Authorization: `Bearer ${config.secretKey}`,
        },
      }
    );

    const data = await response.json();
    console.log("Paystack verification response:", data);

    if (data.status && data.data.status === "success") {
      console.log("Payment verified successfully:", data);
      return true;
    } else {
      console.error("Payment verification failed:", data.message);
      throw new Error("Payment verification failed. Please try again.");
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw new Error(
      "An error occurred while verifying payment. Please try again."
    );
  }
};

// Payment close handler
export const onClose = () => {
  console.log("Payment closed");
  throw new Error("Payment was not completed. Please try again.");
};

