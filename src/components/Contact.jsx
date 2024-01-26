import React, { useState } from "react";
import "./css/contact.css";
import { pp, mutlu_aile, star } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const LINK =
  "https://www.doktortakvimi.com/ibrahim-safa-varol/psikolojik-danisma-ve-rehberlik/eskisehir#";
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/03f7f4d0-bb7a-11ee-8fa9-872d80d8eac1";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
      {/* --------------------------- */}

      <section className={layout.section2}>
        <div className={layout.sectionInfo2}>
          <h2 className={`${styles.heading3} text-center`}>
            Benimle İletişime Geçin
          </h2>
          <div class="border-bottom"></div>
          <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
            <div class="form-fields">
              <input
                type="text"
                placeholder="İsim"
                name="name"
                class="name input"
                id="fullname"
                required
              />

              <input
                type="text"
                class="subject input"
                name="subject"
                id="subject"
                placeholder="Konu"
                required
              />
              <input
                type="email"
                class="email input"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                class="phone input"
                name="phone"
                id="phone"
                placeholder="Telefon"
                required
              />
              <textarea
                name="message"
                class="message input"
                id="message"
                placeholder="Mesajınızı Giriniz"
                required
              ></textarea>
            </div>
            <button className="bg-[#333] text-white px-10 py-2" type="submit">
              Gönder
            </button>
          </form>
        </div>
     
        {/* className={`${layout.sectionInfo1} mx-5 my-5`} */}
        <div className={layout.sectionInfo1}>
        
            <img
              src={pp}
              alt="card"
              className="w-[300px] h-[300px]  xs:w-[200px] xs:h-[200px] "
            />
            <div className="mx-5">
              <h2 className={styles.heading3}>
                Psk. Dan. <br className="sm:block hidden" /> İbrahim Safa VAROL
              </h2>
              <p className={`${styles.paragraph} text-[#ccc]  `}>
                Psikolojik Danışma ve Rehberlik
              </p>
              <div className="flex  bw:flex-col flex-row bwm:flex-col rxs:flex-col ">
                <div className="flex flex-row ">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <Link to={LINK}>
                  <p className="ml-3 mt-1 text-[15px]">24 Görüş</p>
                </Link>
              </div>
              <div className="flex flex-1"></div>
              {/* <p
                className={` ${styles.paragraph} mt-5 lgt:block hidden  md:hidden`}
              >
                Adres: Hoşnudiye mah. 766.sk Gürdal abacı ofis no:2 daire:1
                Tepebaşı/ Eskişehir
              </p> */}
              <Button title="Danışan Görüşleri" linkTo={LINK} />
            </div>
    
          {/* <p className={` ${styles.paragraph} mt-5 lgt:hidden mb-10`}>
            Adres: Hoşnudiye mah. 766.sk Gürdal abacı ofis no:2 daire:1
            Tepebaşı/ Eskişehir
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Contact;

{
  /* <section id="contact-a" class="text-center py-3 flexi">
<div class="container">
  <h2 className={styles.heading3}>Benimle İletişime Geçin</h2>
  <div class="border-bottom"></div>

  <form>
    <div class="form-fields">
      <input
        type="text"
        class="name input"
        name="fullname"
        id="fullname"
        placeholder="İsim"
      />

      <input
        type="text"
        class="subject input"
        name="subject"
        id="subject"
        placeholder="Konu"
      />
      <input
        type="email"
        class="email input"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        type="tel"
        class="phone input"
        name="phone"
        id="phone"
        placeholder="Telefon"
      />
      <textarea
        name="message"
        class="message input"
        id="message"
        placeholder="Mesajınızı Giriniz"
      ></textarea>
    </div>
  </form>
  <button className="bg-[#333] text-white px-10 py-2" type="submit">
    Gönder
  </button>
</div>



<div className={layout.sectionInfo}>
  <div className="flex flex-row mx-5 sm:flex-col">
    <img
      src={pp}
      alt="İbrahim Safa Varol, Psikolojik Danışma ve Rehberlik Eskişehir"
      className="h-[300px] w-[300px] min-w-[300px] "
    />
    <div className="px-5 mt-5 flex  flex-col ">
      <h2 className={styles.heading3}>Psk. Dan. İbrahim Safa VAROL</h2>
      <p className={`${styles.paragraph}   `}>
        Psikolojik Danışma ve Rehberlik
      </p>
    </div>
  </div>
  <p className={` ${styles.paragraph}  mt-5 mx-5 `}>
    Adres: Hoşnudiye mah. 766.sk Gürdal abacı ofis no:2 daire:1
    Tepebaşı/ Eskişehir
  </p>
</div>
</section> */
}
