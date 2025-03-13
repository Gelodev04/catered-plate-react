export const Carousel = () => {
    const imgSize = "size-[140px]"; // Change this value once
  
    return (
      <div className="flex overflow-hidden gap-3">
        <img className={`${imgSize} rounded-full `} src="/images/image1.webp" alt="" />
        <img className={`${imgSize} rounded-t-full`} src="/images/image2.webp" alt="" />
        <div className={`w-[90px] h-[140px] rounded-l-full bg-[#19522F] flex-none`}></div>
        <img className={`${imgSize} rounded-full flex-none`} src="/images/image3.webp" alt="" />
      </div>
    );
  };
  