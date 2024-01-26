import { card, cocuk } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum dolor sit amet.
        <br className="sm:block hidden" /> Lorem, ipsum dolor.
      </h2>
      <p className={`${styles.paragraph} max-w[470px] mt-5`}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque
        quod libero beatae reiciendis ad quibusdam fuga voluptatem cupiditate
        fugiat!
      </p>
     
    </div>

    <div className={layout.sectionImg}>
      <img src={cocuk} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
