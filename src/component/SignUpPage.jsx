import '../style/signUpStyle.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SingUpPage = () => {

    const navigate = useNavigate();
    const [user, updateUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return alert("Enter valid email");
        return true;
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
        if(!passwordRegex.test(password)) return alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
        return true;
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (user.email != "" || user.email) return isValidEmail(user.email);
        }, 1000)

        return () => clearTimeout(debounce);
    }, [user])
    const handleSignUpRequest = () => {
        if (!user.firstName || !user.email) return alert("Required field are missing");
        navigate('/user', {
            state: { name: user.firstName, email: user.email }
        });
    }

    return (
        <div className="main_signup_container">
            <div className="form_container" >
                <div className="title_container">
                    <p className="title">Welcome to Signup Page!</p>
                </div>
                <div className="input_container">
                    <label className="input_label" >First Name</label>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="24"
                        width="24"
                        className="icon"
                    >
                        <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" />
                        <path d="M3 22c0-3.866 3.582-7 8-7s8 3.134 8 7" />
                    </svg>
                    <input
                        value={user.firstName}
                        onChange={(e) => updateUser({ ...user, firstName: e.target.value })}
                        placeholder="Jhon"
                        type="text"
                        className="input_field"
                    />
                </div>
                <div className="input_container">
                    <label className="input_label" >Last Name</label>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="24"
                        width="24"
                        className="icon"
                    >
                        <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5z" />
                        <path d="M3 22c0-3.866 3.582-7 8-7s8 3.134 8 7" />
                    </svg>
                    <input
                        value={user.lastName}
                        onChange={(e) => updateUser({ ...user, lastName: e.target.value })}
                        placeholder="Doe"
                        type="text"
                        className="input_field"
                    />
                </div>
                <div className="input_container">
                    <label className="input_label" >Email Address</label>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.942 10.239C11.657 11.253 12.343 11.253 14.058 10.239L17 8.5" />
                        <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.016 13.476C2.081 16.541 2.114 18.074 3.245 19.209C4.376 20.345 5.95 20.384 9.099 20.463C11.039 20.512 12.961 20.512 14.901 20.463C18.05 20.384 19.624 20.345 20.755 19.209C21.886 18.074 21.919 16.541 21.984 13.476C22.005 12.49 22.005 11.51 21.984 10.524C21.919 7.459 21.886 5.926 20.755 4.791C19.624 3.655 18.05 3.616 14.901 3.537C12.961 3.488 11.039 3.488 9.099 3.537C5.95 3.616 4.376 3.655 3.245 4.791C2.114 5.926 2.081 7.459 2.016 10.524C1.995 11.51 1.995 12.49 2.016 13.476Z" />
                    </svg>
                    <input
                        value={user.email}
                        onChange={(e) => updateUser({ ...user, email: e.target.value })}
                        placeholder="jhon123@example.com"
                        type="text"
                        className="input_field"
                    />
                </div>
                <div className="input_container">
                    <label className="input_label">Password</label>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M18 11.004C17.417 9.917 16.273 9.158 14.952 9.099C13.477 9.034 11.979 9 10.329 9C8.679 9 7.181 9.034 5.706 9.099C3.953 9.177 2.513 10.488 2.279 12.162C2.126 13.254 2 14.373 2 15.513C2 16.653 2.126 17.773 2.279 18.865C2.513 20.539 3.953 21.85 5.706 21.928C6.42 21.959 7.26 21.983 8 22" />
                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M6 9V6.5C6 4.015 8.015 2 10.5 2C12.985 2 15 4.015 15 6.5V9" />
                    </svg>
                    <input
                        value={user.password}
                        onChange={(e) => updateUser({ ...user, password: e.target.value })}
                        placeholder="Password"
                        type="password"
                        className="input_field"
                    />
                </div>
                <button onClick={handleSignUpRequest} className="sign-in_btn">
                    <span>Sign Up</span>
                </button>
            </div>
        </div>
    )
}

export default SingUpPage;