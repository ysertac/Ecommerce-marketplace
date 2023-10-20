import { aboutUsData } from "../data";

const PageContentAbout = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[url('./assets/about/background.png')] h-[972px] bg-no-repeat bg-cover flex items-center">
        <div className="w-standart mx-auto h-80 flex flex-col justify-between">
          <p className="text-general text-base font-bold">
            {aboutUsData.banner[0]}
          </p>
          <p className="text-general text-6xl leading-[80px] font-bold">
            {aboutUsData.banner[1]}
          </p>
          <p className="text-secondaryColor text-xl font-normal w-96">
            {aboutUsData.banner[2]}
          </p>
          <a className="text-sm font-bold text-white bg-primaryColor py-3 text-center rounded-md w-48">
            {aboutUsData.banner[3]}
          </a>
        </div>
      </div>

      {/* Second */}
      <div>
        <div className="w-standart mx-auto flex justify-between items-center py-5">
          <div className="w-96 h-36 flex flex-col justify-between">
            <p className="text-sm font-normal text-[#e74040]">
              {aboutUsData.second[0]}
            </p>
            <p className="text-2xl font-bold text-general">
              {aboutUsData.second[1]}
            </p>
          </div>
          <p className="text-secondaryColor w-[545px] font-normal text-sm">
            {aboutUsData.second[2]}
          </p>
        </div>
      </div>

      {/* Third */}
      <div>
        <div className="w-standart mx-auto flex justify-between py-20">
          {aboutUsData.third.map((content) => (
            <div>
              <div className="text-general font-bold text-[58px] leading-[80px] text-center">
                {content.big}
              </div>
              <div className="text-secondaryColor font-bold text-base text-center">
                {content.small}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="py-10">
        <div className="w-standart mx-auto">
          <img
            className="mx-auto rounded-3xl"
            src={aboutUsData.bottomBanner.img}
          />
        </div>
      </div>
    </div>
  );
};
export default PageContentAbout;
