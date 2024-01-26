import styles from "../style";
import { safa } from "../assets";

const HeroAbout = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary ss:leading-[100px] leading-[75px]">
          Beni Daha <br className="sm:block hidden" />
          <span className="text-gradient"> Yakından </span>
        </h1>
        
      </div>

      <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-primary ss:leading-[100px] leading-[75px] w-full">
        
        Tanıyın
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        labore impedit animi libero repellendus.        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        labore impedit animi libero repellendus.        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        labore impedit animi libero repellendus.        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        labore impedit animi libero repellendus.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
      <img src={safa} alt="billing" className="w-[100%] h-[100%] relative z-[5] "/>
     
    </div>


  </section>
);

export default HeroAbout;
