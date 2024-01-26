import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50] ocject-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-primary tex-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-primary tex-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-primary`}>
          Burdan sonrası  <br className="sm:block hidden " /> çok daha iyi olacak.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-primary `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          magni repudiandae laudantium!
        </p>

        <Button styles="mt-10" title="Randevunuzu oluşturun" linkTo="https://www.doktortakvimi.com/ibrahim-safa-varol/psikolojik-danisma-ve-rehberlik/eskisehir#tab=profile-info"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
