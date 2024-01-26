
const UzmanlikKart = ({ content, name, title, img }) => (
  <div className="flex flex-1 justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] min-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border-2">
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-primary my-10">
      {content}
    </p>
  </div>
);

export default UzmanlikKart;
