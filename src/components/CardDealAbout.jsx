import { feedback, uzmanlık } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import UzmanlikKart from "./UzmanlikKart";

const CardDealAbout = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full "/>

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
       Uzmanlık Alanlarım 
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Sizlere destek verebileceğim konulardan bazıları
        </p>
      </div>
    </div>
<div className="flex flex-wrap lg:justify-start justify-center w-full feedback-container relative z-[1]">
{uzmanlık.map((card) => (
  <UzmanlikKart key={card.id} {...card} />
))}
</div>

  </section>
);

export default CardDealAbout;
