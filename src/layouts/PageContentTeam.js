import { data, teamData } from "../data";

const PageContentTeam = () => {
  return (
    <div>
      {/* Üst Banner */}
      <section className="py-10">
        <h2 className="text-secondaryColor text-base font-bold text-center pb-5">
          {teamData.bannerTop[0]}
        </h2>
        <h2 className="text-general text-[58px] leading-[80px] font-bold text-center pb-7">
          {teamData.bannerTop[1]}
        </h2>
        <p className="text-center">
          <span className="text-general text-sm leading-6 font-bold">
            {data.header2.navbar[0].name + " "}
          </span>
          <span className="text-[#bdbdbd]">{teamData.bannerTop[2]}</span>
          <span className="text-secondaryColor text-sm leading-6 font-bold">
            {" " + data.header2.navbar[3].name}
          </span>
        </p>
      </section>

      {/* Alt Banner */}
      <section className="flex justify-between">
        <img className="w-[49.5%]" src={teamData.bannerBottom[0]} />
        <div className="flex justify-between w-[49.5%]">
          <div className="flex flex-col justify-between w-[49%]">
            <img className="h-[49%]" src={teamData.bannerBottom[1]} />
            <img className="h-[49%]" src={teamData.bannerBottom[2]} />
          </div>
          <div className="flex flex-col justify-between w-[49%]">
            <img className="h-[49%]" src={teamData.bannerBottom[3]} />
            <img className="h-[49%]" src={teamData.bannerBottom[4]} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-general text-[40px] leading-[50px] font-bold text-center py-24">
          {teamData.team.header}
        </h2>
        <div className="flex flex-wrap w-3/4 mx-auto justify-between h-[1700px]">
          {teamData.team.members.map((member) => (
            <div className="w-[30%]">
              <img className="w-full" src={member.img} />
              <div className="flex flex-col justify-between h-1/5 mt-5">
                <h3 className="text-center text-general text-base font-bold">
                  {member.username}
                </h3>
                <h3 className="text-center text-secondaryColor text-sm leading-5 font-bold">
                  {member.profession}
                </h3>
                <div className="w-28 flex justify-between mx-auto">
                  {member.socials.map((social) => (
                    <a
                      className="text-primaryColor text-2xl"
                      href={social.path}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trial */}
      <section className="mb-24 mt-10">
        <h2 className="text-general text-[40px] leading-[50px] font-bold text-center">
          {teamData.trial.header}
        </h2>
        <p className="text-secondaryColor font-normal text-sm w-[411px] mx-auto text-center my-8">
          {teamData.trial.text}
        </p>
        <a className="bg-primaryColor py-3 rounded-md w-36 mx-auto block text-center text-white text-sm font-bold my-8">
          {teamData.trial.button}
        </a>
        <div className="text-primaryColor text-2xl w-60 flex justify-between mx-auto my-8">
          {teamData.trial.socials.map((social) => (
            <a href={social.path}>{social.icon}</a>
          ))}
        </div>
      </section>
    </div>
  );
};
export default PageContentTeam;
