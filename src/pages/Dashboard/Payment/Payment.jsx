import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import SectionHeader from "../../shared/SectionHeader";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
	return (
		<div>
			<SectionHeader
				heading="Payment"
				subHeading="Please pay to eat"
			></SectionHeader>
			<div>
				<Elements stripe={stripePromise}>
					<CheckOutForm></CheckOutForm>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
