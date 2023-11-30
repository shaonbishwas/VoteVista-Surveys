import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import jpg from '../assets/img/A-404-Page-Best-Practices-and-Design-Inspiration.jpg'
const ErrorElement = () => {
//   const error = useRouteError();
  const navigate = useNavigate()
  // if(error){
  //   return <Navigate to={link}></Navigate>
  // }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
       <div className="relative">
       <img src={jpg} alt="" className="w-[400px]" />
       <div className="absolute bottom-1 left-1">
       <button className="bg-sky-400 py-2 px-3 text-white" onClick={()=> navigate('/')}>Back to Home</button>
       </div>
       </div>
      {/* <p className="text-2xl text-center font-sans font-semibold">{error.message}</p> */}
      <p className="text-2xl text-center font-sans font-semibold">Please check your internet Connection</p>
      
      </div>
    </div>
  );
};
ErrorElement.propTypes ={
  link: PropTypes.string
}
export default ErrorElement;