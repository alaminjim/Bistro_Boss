import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  import.meta.env.VITE_PAYMENT_PUBLISHED_API_KEY
);

const Payment = () => {
  return (
    <div>
      <div>
        <SectionTitle
          title={"Payment"}
          heading={"Get Your Payment"}
        ></SectionTitle>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <PaymentForm></PaymentForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
