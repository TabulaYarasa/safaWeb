import { quotes } from "../assets";
const FeedbackCard = ({ content, name, tarih, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card border-2">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain "
    />
    <p className="font-poppins font-normal text-[14px] leading-[25px] text-primary my-10">
      {content}
    </p>

    <div className="flex flex-row ">
    
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[18px] leading-[25px] text-primary ">
          {name}
        </h4>
        <p>{tarih}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
