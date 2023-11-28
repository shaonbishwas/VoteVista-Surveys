// import { loadStripe } from "@stripe/stripe-js";
// // import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";

// // TODO: add publishable key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const BecomePro = () => {
//     return (
//         <div>
//             <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
//             <div>
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm></CheckoutForm>
//                 </Elements>
//             </div>
//         </div>
//     );
// };
// const SectionTitle = ({heading, subHeading}) => {
//   return (
//       <div className="mx-auto text-center md:w-4/12 my-8">
//           <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
//           <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
//       </div>
//   );
// };
// export default BecomePro;
 const BecomePro = ()=>{
  return <div>
    <h1>do payment</h1>
  </div>
}
export default BecomePro;