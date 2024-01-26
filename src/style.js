const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",
    heading3: "font-poppins font-semibold xs:text-[20px] text-[28px] text-primary xs:leading-[30px] leading-[50px] w-full",
    paragraph: "font-poppins font-normal  text-[18px] leading-[30.8px] xs:text-[13px] xs:leading-[25px]",
  
    flexCenter: "flex justify-center items-center",
    
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    section2: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionNonImg: `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  //  sectionInfo1: ` flex flex-1 ${styles.flexStart} flex-col min-w-[550px]`,
    sectionInfo1: `flex flex-1 xs:flex-col
    xs:${styles.flexCenter} m-5 p-[20px] border-[1px] border-solid border-[#ccc] rounded-[5px] shadow-custom lg:ml-5 mb-5 `,

    sectionInfo2: `flex flex-col flex-1 m-5 p-[20px] border-[1px] border-solid border-[#ccc] rounded-[5px] shadow-custom lg:ml-5 mb-5  `,
  };
  
  export default styles;