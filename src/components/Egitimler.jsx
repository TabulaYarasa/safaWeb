import { dersler, features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-0" : "mb-0"
    } feature-card `}
  >
 
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-primary tex-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-primary text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
);
const Egitimler = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary`}>
          Aldığım Eğitimler
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-primary `}>
          Eğitim öğretim ve meslek hayatım boyunca bir çok farklı eğitimde gerek öğrenci gerekse eğitmen statüsünde yer aldım. 
        </p>

       
      </div>
      <div className={`${layout.sectionInfo} flex-col`}>
        {dersler.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Egitimler;
