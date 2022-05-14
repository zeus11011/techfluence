import './App.scss';
import {FiTwitter, FiFacebook , FiInstagram} from "react-icons/fi"
import Box from './Components/Box';


function App() {
  return (
    <div className="App">
      <div className="logos">
        <img
          src="https://res.cloudinary.com/dtwnn46uj/image/upload/v1652548431/techfluence/gec_logo_iffsmd.png"
          height="100%"
        />
        <img
          src="https://res.cloudinary.com/dtwnn46uj/image/upload/v1652548429/techfluence/intensa_yuiuga.png"
          height="100%"
        />
      </div>
      <div className="bg_img">
        <div className="home">
          <div className="title">
            <h5>Intensa presents</h5>
            <h1>Techfluence</h1>
            <h2>2022</h2>
          </div>
        </div>
        <div className="techfluence_info">
          <h1>Techfluence</h1>
          <h3>
            TechFluence 2022 aims to be the BEST Technical event Goa has ever
            seen where the student council of Information Technology department
            (INTENSA) focuses on starting this tradition and keeping it alive
            for years to come .<br /> TechFluence 2022 shall be carried out in 2
            days in the form of 10 sub-events out of which 9 are major TECH
            competitions and one entertainment event on the final day.
          </h3>
        </div>
        <div className="event_cont">
          <div className="events">
            <h1>Events</h1>
            <Box
              img="https://res.cloudinary.com/dtwnn46uj/image/upload/v1652548495/techfluence/events/CODE_GROUND_bk4w6h.png"
              text="CODE GROUND"
            />
            <Box
              img="https://res.cloudinary.com/dtwnn46uj/image/upload/v1652548495/techfluence/events/ESPORTSPNG_xgdwef.png"
              text="ESPORTS"
            />
            <Box
              img="https://res.cloudinary.com/dtwnn46uj/image/upload/v1652548495/techfluence/events/ESPORTSPNG_xgdwef.png"
              text="DEBATE"
            />
            <Box
              img="https://res.cloudinary.com/dtwnn46uj/image/upload/v1652548495/techfluence/events/POSTERMAKING_fo14gp.png"
              text="DIGITAL POSTER MAKING"
            />
          </div>
        </div>
        <div className="services">
          <h1>Services</h1>
          <div className="service_boxes">
            <div className="service_box basic">
              <h1>Basic</h1>
              <p>
                An initial of your company will be added in our description
                page.
              </p>
              <div>
                <p>Rs. 2000/-</p>
                <button>See Details</button>
              </div>
            </div>
            <div className="service_box premium">
              <h1>Premium</h1>
              <p>
                An initial of your company will be added in our description
                page.
              </p>
              <div>
                <p>Rs. 5000/-</p>
                <button>See Details</button>
              </div>
            </div>
            <div className="service_box gold">
              <h1>Gold</h1>
              <p>
                An initial of your company will be added in our description
                page.
              </p>
              <div>
                <p>Rs. 10000/-</p>
                <button>See Details</button>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="div">
            <h3>Contact</h3>
            <h3>aboute us</h3>
            <h3>Help</h3>
            <h3>events</h3>
            <h3>Rules</h3>
          </div>
          <div className="contact">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
          <p>All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
