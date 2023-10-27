import { aboutUsData } from "../data";

const PageContentAbout = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[url('./assets/about/background.png')] h-[972px] bg-no-repeat bg-cover flex items-center">
        <div className="w-3/4 mx-auto h-80 flex flex-col justify-between">
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
        <div className="w-3/4 mx-auto flex justify-between items-center py-5">
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
        <div className="w-3/4 mx-auto flex justify-between py-20">
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

      {/* Video */}
      <div className="py-10">
        <div className="w-3/4 mx-auto">
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
        <p className="text-center w-[470px] mx-auto text-sm font-normal text-secondaryColor pb-20">
          {aboutUsData.team.text}
        </p>
        <div className="w-3/4 flex mx-auto justify-between">
          {aboutUsData.team.members.map((member) => (
            <div>
              <img className="w-[433px]" src={member.img} />
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
      <div className="bg-dimbg h-[478px] flex flex-col justify-evenly">
        <div>
          <h2 className="text-center text-general text-[40px] font-bold leading-[50px] pb-5">
            {aboutUsData.companies.h2}
          </h2>
          <p className="w-[547px] mx-auto text-center text-secondaryColor text-sm">
            {aboutUsData.companies.text}
          </p>
        </div>
        <div className="flex mx-auto justify-between w-3/4">
          {aboutUsData.companies.img.map((company) => (
            <img src={company} />
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-primaryColor flex justify-between items-center">
        <div className="mx-auto w-[44%] text-white h-60 flex flex-col justify-between">
          <h3 className="text-base font-bold w-[438px]">
            {aboutUsData.bottomBanner2.header1}
          </h3>
          <h2 className="text-[40px] leading-[50px] font-bold w-[438px]">
            {aboutUsData.bottomBanner2.header2}
          </h2>
          <p className="text-sm font-normal w-[438px]">
            {aboutUsData.bottomBanner2.text}
          </p>
          <button className="py-3 px-8 border rounded-lg w-32 text-dimbg border-dimbg">
            {aboutUsData.bottomBanner2.button}
          </button>
        </div>
        <img src={aboutUsData.bottomBanner2.img} />
      </div>
    </div>
  );
};
export default PageContentAbout;
