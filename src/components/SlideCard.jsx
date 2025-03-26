const SlideCard = ({ imgURL, changeBigMockupImage, bigMockupImg }) => {
  const handleClick = () => {
    if (bigMockupImg !== imgURL.bigMockup) {
      changeBigMockupImage(imgURL);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigMockupImg === imgURL.bigMockup
          ? "border-vivid-orange"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 transition-transform duration-200 hover:scale-105 `}
      onClick={handleClick}
    >
      <div className='flex flex-col justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:h-35 max-sm:p-2'>
        <img
          src={imgURL.thumbnail}
          alt="mockup collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
        <p className="font-montserrat max-sm:text-[6px] max-sm:mx-0.5 md:text-[10px] lg:text-[12px] mt-2 mx-2 text-center font-semibold text-charcoal-black ">
          {imgURL.caption.text}
        </p>
      </div>
    </div>
  );
};

export default SlideCard;
