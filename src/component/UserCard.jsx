import { useLocation, useNavigate } from "react-router-dom";
import "../style/UserCard.css";

const UserCard = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const {name, email } = location.state || {name:"unknown", email:"unknown"};

    return <div className="usercard_main_conatiner">
        <div className="card">
            <p className="profileHeading">{name}</p>
            <p className="profileDescription">Thank you for signing up! We've registered your email as: {email}</p>
            <div className="buttonContainer">
                <button className="backButton" onClick={()=>navigate('/')}>Back</button>
            </div>


        </div>
    </div>
}

export default UserCard;