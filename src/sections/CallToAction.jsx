import { useState } from "react"
import { appleIcon, android, arrowRight } from "../assets/icons"
import { mockup1 } from '../assets/images'
import { Button, SlideCard } from '../components'
import {
  mockups, 
  statistics, 
  npsDefinition,
  npsMotto,
 } from '../constants'


const CallToAction = () => {

  const motto2 = npsMotto[1].motto2
  const words = motto2.split(' ')

  const [bigMockupImg, setbigMockupImg] = useState(mockups[0].bigMockup);
  const [selectedCaption, setSelectedCaption] = useState(mockups[0].caption);

  const changeBigMockupImage = (mockup) => {
    setbigMockupImg(mockup.bigMockup);
    setSelectedCaption(mockup.caption);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="mt-5 text-4xl font-montserrat text-vivid-orange animate-slide-in-right">
          {npsMotto[0].motto1}
        </p>

        <h1 className="mt-10 font-palanquin text-[76px] max-sm:text-[22px] z-10 max-sm:leading-[42px] font-bold animate-slide-in-left">
          <span className="xl:bg-gunmetal xl:whitespace-nowrap relative pr-10">
            {words[0]} {words[1]} {words[2]}
          </span>
          <br />
          <span className="text-vivid-orange inline-block ">{words[3]}</span> {words.slice(4).join(" ")}
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm animate-pulse">
          {npsDefinition.definition}
        </p>

        <Button label="Download Now" iconUrl={appleIcon} />
        <Button label="Download Now" iconUrl={android} />

        <div className="flex justify-start items-start flex-wrap w-full max-sm:mt-10 mt-20 gap-16 max-sm:gap-10">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-[36px] text-vivid-orange font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-callToAction parallax-bg">
        <img
          src={bigMockupImg}
          alt="mockup collection"
          width={610}
          height={502}
          className="object-contain relative z-10 transition-transform duration-200 animate-pulse"
        />

        {selectedCaption && (
          <div className="mt-4 mx-2">
            <p className="text-[24px] max-sm:text-[15px] font-bold text-clip animate-typewriter">{selectedCaption.text}</p>
            <p className="mt-2 max-sm:text-[12px]  text-slate-gray">{selectedCaption.description}</p>
          </div>
        )}

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[5%] max-sm:px-2 ">
          {mockups.map((mockup, index) => (
            <div key={index}>
              <SlideCard
                index={index}
                imgURL={mockup} 
                changeBigMockupImage={changeBigMockupImage}
                bigMockupImg={bigMockupImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;