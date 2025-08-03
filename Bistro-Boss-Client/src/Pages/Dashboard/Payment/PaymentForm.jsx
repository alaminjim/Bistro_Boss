import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProviders";
import moment from "moment/moment";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const { axiosSecure } = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = cart?.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      }
    );

    if (cardError) {
      console.log(cardError);
      setError(cardError.message);
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: moment().format("YYYY-MM-DD"),
          cartId: cart.map((item) => item._id),
          menuItemId: cart.map((item) => item.menuId),
          status: "Pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        if (res.data.result.insertedId) {
          toast.success("Payment SuccessFul");
          navigate("/dashboard/payment-history");
        }
      }
      setError("");
    }
  };

  return (
    <div className="mt-10 mx-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn my-6 bg-[#D1A054]"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-600 font-bold">
            Your Transaction Id : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
