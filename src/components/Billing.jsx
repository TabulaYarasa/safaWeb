import { apple, bill, google, mutlu_aile } from "../assets";
import styles, { layout } from "../style";
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={mutlu_aile}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum dolor sit amet.
        <br className="sm:block hidden" /> Lorem, ipsum.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia
        nostrum, laboriosam aliquam earum quisquam.
      </p>
     
    </div>
  </section>
);

export default Billing;
