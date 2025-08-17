import "../style/AboutPage.css";

const features = [
  {
    title: "🔐 Signup Page",
    description: "A user-friendly signup form that allows new users to register. The form includes input validation and a clean, modern design to enhance user experience."
  },
  {
    title: "🧭 Navigation Bar",
    description: "A fully functional navigation bar that helps users move between different sections of the application with ease. It's responsive and adjusts well to various screen sizes."
  },
  {
    title: "💳 Display Cards",
    description: "Beautifully designed display cards used to showcase user data, product listings, or any other content in a visually appealing layout."
  }
];

const AboutPage = () => {

  return (
    <div className="about-container">
      <h1 className="about-title">📘 Project Overview</h1>
      <p className="about-description">
        Welcome to my React project! This is a simple and responsive web application built using ReactJS, 
        showcasing the following key components:
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (

          <div class="notification">
            <div class="notiglow"></div>
            <div class="notiborderglow"></div>
            <div class="notititle">{feature.title}</div>
            <div class="notibody">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AboutPage;