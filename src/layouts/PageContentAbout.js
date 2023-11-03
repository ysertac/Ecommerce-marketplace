import { aboutUsData } from "../data";

const PageContentAbout = () => {
  return (
    <div>
      {/* Banner */}
      <div className="sm:h-[49vw] flex flex-row-reverse max-sm:flex-col-reverse justify-between w-3/4 mx-auto items-center">
        <img className="max-sm:mt-20" src={aboutUsData.banner[4]} />
        <div className="w-full mx-auto max-sm:mt-20 h-80 flex flex-col justify-between">
          <p className="text-general text-base font-bold max-sm:text-center">
            {aboutUsData.banner[0]}
          </p>
          <p className="text-general text-6xl max-sm:text-[40px] max-sm:text-center leading-[80px] max-sm:leading-10 font-bold">
            {aboutUsData.banner[1]}
          </p>
          <p className="text-secondaryColor text-xl font-normal w-96 max-sm:w-full max-sm:text-center">
            {aboutUsData.banner[2]}
          </p>
          <a className="text-sm font-bold text-white bg-primaryColor py-3 text-center rounded-md w-48 max-sm:w-full">
            {aboutUsData.banner[3]}
          </a>
        </div>
      </div>

      {/* Second */}
      <div>
        <div className="w-3/4 max-sm:w-11/12 mx-auto max-sm:flex-col flex justify-between items-center py-5">
          <div className="w-[27%] max-sm:w-full max-sm:text-center max-sm:pt-10 h-36 flex flex-col justify-between">
            <p className="text-sm font-normal text-[#e74040]">
              {aboutUsData.second[0]}
            </p>
            <p className="text-2xl font-bold text-general max-sm:pt-5">
              {aboutUsData.second[1]}
            </p>
          </div>
          <p className="text-secondaryColor w-2/5 max-sm:w-full font-normal text-sm max-sm:pt-20">
            {aboutUsData.second[2]}
          </p>
        </div>
      </div>

      {/* Third */}
      <div>
        <div className="w-3/4 max-sm:w-11/12 mx-auto flex max-sm:flex-col justify-between sm:py-20">
          {aboutUsData.third.map((content) => (
            <div className="max-sm:py-10">
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

      {/* Video */}
      <div className="py-10">
        <div className="w-3/4 max-sm:w-11/12 mx-auto">
          <img
            className="mx-auto rounded-3xl w-full"
            src={aboutUsData.bottomBanner.img}
          />
        </div>
      </div>

      {/* Team */}
      <div className="pt-20 pb-20">
        <h2 className="text-center text-general text-[40px] leading-[50px] font-bold pb-5">
          {aboutUsData.team.h2}
        </h2>
        <p className="text-center w-[470px] max-sm:w-11/12 mx-auto text-sm font-normal text-secondaryColor pb-20">
          {aboutUsData.team.text}
        </p>
        <div className="w-3/4 max-sm:w-11/12 flex flex-wrap mx-auto justify-between">
          {aboutUsData.team.members.map((member) => (
            <div className="w-[30%] max-sm:w-full">
              <img className="w-full sm:h-[16vw]" src={member.img} />
              <div className="flex flex-col justify-evenly items-center h-[152px]">
                <h3 className="text-general text-base font-bold">
                  {member.username}
                </h3>
                <p className="text-secondaryColor text-sm leading-6">
                  {member.profession}
                </p>
                <div className="w-28 flex justify-between">
                  {member.links.map((link) => (
                    <a className="text-primaryColor text-xl" href={link.path}>
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Big Companies Are Here  */}
      <div className="bg-dimbg flex flex-col justify-evenly max-sm:py-20">
        <div className="sm:py-14">
          <h2 className="text-center text-general text-[40px] max-sm:w-11/12 max-sm:mx-auto font-bold leading-[50px] pb-5">
            {aboutUsData.companies.h2}
          </h2>
          <p className="w-[547px] max-sm:w-11/12 mx-auto text-center text-secondaryColor text-sm">
            {aboutUsData.companies.text}
          </p>
        </div>
        <div className="flex max-sm:flex-col sm:py-14 mx-auto justify-between w-3/4">
          {aboutUsData.companies.img.map((company) => (
            <img
              className="max-sm:w-1/3 max-sm:mx-auto max-sm:my-10"
              src={company}
            />
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-primaryColor flex justify-between items-center">
        <div className="mx-auto w-[44%] max-sm:w-11/12 text-white sm:h-60 max-sm:py-10 flex flex-col justify-between">
          <h3 className="text-base font-bold sm:w-[438px] max-sm:my-5 max-sm:text-center">
            {aboutUsData.bottomBanner2.header1}
          </h3>
          <h2 className="text-[40px] leading-[50px] font-bold sm:w-[438px] max-sm:my-5 max-sm:text-center">
            {aboutUsData.bottomBanner2.header2}
          </h2>
          <p className="text-sm font-normal sm:w-[438px] max-sm:my-5 max-sm:text-center">
            {aboutUsData.bottomBanner2.text}
          </p>
          <button className="py-3 px-8 border rounded-lg sm:w-32 text-dimbg border-dimbg max-sm:my-5">
            {aboutUsData.bottomBanner2.button}
          </button>
        </div>
        <img className="max-sm:hidden" src={aboutUsData.bottomBanner2.img} />
      </div>
    </div>
  );
};
export default PageContentAbout;
