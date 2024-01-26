import React from "react";
import styles from "../style";
import { Navbar,Billing,CTA,CardDeal,Business,Clients,Stats,Footer,Testimonials,Hero} from "../components"
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
      </div>


      <div className={`bg-primary absolute w-full bottom-0 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  );
};


export default HomePage