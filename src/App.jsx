import Business from "./components/Business";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";

function App() {
  return (
    <div className=''>
      <Hero />
      <Features />
      <Business />
      <Testimonials />
      <OurTeam
        Twitter={FaTwitter}
        Instagram={FaInstagram}
        Facebook={FaFacebookSquare}
      />
      <ContactUs />
      <Footer
        Twitter={FaTwitter}
        Instagram={FaInstagram}
        Facebook={FaFacebookSquare}
        Youtube={FaYoutube}
      />
    </div>
  );
}

export default App;
