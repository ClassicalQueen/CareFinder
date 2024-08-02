import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./styles.css";

const Home: React.FC = () => {


  return (
    <div className="home">
      <Nav />

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Your Guide to Nearby Hospitals</h1>
            <p>
              Discover Your Perfect Care: Find Your Hospital,
              <br /> Anytime, Anywhere.
            </p>
            <button className="start-btn">Start Now</button>
          </div>
          <div className="hero-image">
            <img src="/assets\caretaker.png" alt="Doctor and Patient" />
          </div>
        </section>

        <section className="introduction">
          <h2>Build a healthier future for yourself</h2>
          <h3>Step into Carefinder</h3> <br />
          <div className="cards">
            <div className="intro">
              Here, we transform healthcare for millions globally.
              <br />
              <br />
              CareFinder is a platform where users can discover hospitals in
              their vicinity, download hospital details for their records, and
              enhance their healthcare experience by connecting with others and
              sharing valuable resources.
            </div>
            <div className="pictures">
              <img src="/assets\pic1.png" className="pic1"></img>
              <img src="/assets\pic2.png" className="pic2"></img>
              <img src="/assets\pic3.png" className="pic3"></img>
            </div>
          </div>
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <div className="icon">
                <img
                  src="/assets/consultation.svg"
                  alt="a monotone speaker"
                />{" "}
              </div>
              <h3>Consultation</h3>
              <p>Get Free and Timely Consultations</p>
            </div>
            <div className="service-card">
              <div className="icon">
                <img src="/assets/hospital.svg" alt="hospital image" />
              </div>
              <h3>Find Hospitals</h3>
              <p>Efficiently Navigate to Good Hospitals Near You</p>
            </div>
            <div className="service-card">
              <div className="icon">
                <img src="/assets/export.svg" alt="export icon" />
              </div>
              <h3>Export Hospitals</h3>
              <p>Save and Share Lists of Hospitals</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2>Our Users Comment</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="photo">
                <img src="/assets/Ellipse 1.png" alt="customer picture" />
              </div>
              <p>
                Finding the right hospital is now a breeze! This website helped
                me quickly locate a nearby hospital. Highly recommended.
              </p>
              <span>Christy O.</span>
            </div>
            <div className="testimonial-card">
              <div className="photo">
                <img src="/assets/Ellipse 2.png" alt="customer picture" />
              </div>
              <p>
                I'm incredibly grateful for the CareFinder website. It helped me
                find urgent medical care while traveling.
              </p>
              <span>Divine M.</span>
            </div>
            <div className="testimonial-card">
              <div className="photo">
                <img src="/assets/Ellipse 3.png" alt="customer picture" />
              </div>
              <p>
                After moving to a new city, I didn't know where to go for
                medical care. A friend shared hospital details with me using the
                CareFinder website.
              </p>
              <span>Grace J.</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
