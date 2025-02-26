import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const AboutPage = () => {
  let navigate = useNavigate(); 
  const {id} =useParams(); 
  return (
  <div>
    <div>Id: {id}</div>
    <button onClick={() => navigate("/")}>Home</button>
  </div>
  
  )

}

export default AboutPage; 