import '../style/HomePage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
const HomePage = () => {
    const navigate = useNavigate()

    const signUpBtn = () => {
        navigate('./signup')
        return
    }

    return (
        <div className='home_page_main_container'>
            <Navbar />
            <Element name="home" className="section home">
                <div className='home_container'>
                    <h1 className='healine'>👋 Welcome to Our Website!</h1>
                    <p className='description'>
                        Click the button below to create your account.
                        <br />
                        ✨ What Happens Next?
                        <br />
                        You'll be taken to the Signup Page
                        After entering your details, you'll see your User Card with the information you just submitted!
                    </p>
                    <button onClick={signUpBtn} className='join_btn'>
                        <span>👉 Click below to get started!</span>
                    </button>
                </div>
            </Element>
            <hr className="section-divider" />
            <Element name="about" className="section about">
                <AboutPage />
            </Element>
            <hr className="section-divider" />

            <Element name="contact" className="section contact">
                {<ContactPage />}
            </Element>
        </div>
    )
}

export default HomePage;
