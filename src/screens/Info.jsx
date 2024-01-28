import React from "react";
import styles from "../style";
import {
  Navbar,
  Billing,
  CTA,
  CardDeal,
  Business,
  Clients,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "../components";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
const HomePage = () => {
  return (
    <div className=" bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg- ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>

      <div
        className={`bg-primary bottom-0 ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// absolute w-full
