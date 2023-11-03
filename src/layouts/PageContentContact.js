import { contactData } from "../data";

const PageContentContact = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="w-3/4 max-sm:w-11/12 mx-auto sm:h-[44vw] flex sm:flex-row-reverse max-sm:flex-col-reverse justify-between items-center">
        <img className="max-sm:mt-8" src={contactData.banner.texts[5]} />
        <div className="flex flex-col justify-between max-sm:items-center max-sm:text-center h-3/5 max-sm:mt-6">
          <p className="text-general font-bold text-base">
            {contactData.banner.texts[0]}
          </p>
          <p className="text-general font-bold text-[58px] max-sm:text-[40px] leadig-[80px] max-sm:leading-[50px] max-sm:w-[330px] max-sm:mx-auto max-sm:mt-6 w-96">
            {contactData.banner.texts[1]}
          </p>
          <p className="text-secondaryColor text-xl font-normal w-96 max-sm:mt-6">
            {contactData.banner.texts[2]}
          </p>
          <p className="text-general font-bold text-2xl max-sm:mt-6">
            {contactData.banner.texts[3]}
          </p>
          <p className="text-general font-bold text-2xl max-sm:mt-6">
            {contactData.banner.texts[4]}
          </p>
          <div className="flex w-60 justify-between text-general mt-5">
            {contactData.banner.socials.map((social) => (
              <a href={social.path}>{social.icon}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="my-10 bg-dimbg">
        <div className="w-[35%] max-sm:w-11/12 mx-auto text-center pt-14">
          <h2 className="text-general font-bold text-sm leading-6">
            {contactData.main.header[0]}
          </h2>
          <h2 className="text-general font-bold text-[40px] leading-[50px]">
            {contactData.main.header[1]}
          </h2>
        </div>
        <div className="w-2/3 max-sm:w-11/12 flex max-sm:flex-wrap justify-between mx-auto my-20">
          {contactData.main.cards.map((card) => (
            <div
              className={`${card.bg} ${card.color} sm:h-[28vw] w-1/3 max-sm:w-full flex flex-col max-sm:py-20 justify-evenly items-center`}
            >
              <img src={card.icon} className="w-1/5" />
              <h2 className="font-bold text-sm leading-6 max-sm:mt-7">
                {card.text[0]}
              </h2>
              <h3 className="font-bold text-base max-sm:mt-7">
                {card.text[1]}
              </h3>
              <button
                className={`font-bold text-sm leading-6 text-primaryColor border border-primaryColor py-4 px-9 rounded-[37px] max-sm:rounded-xl ${card.hover} duration-500 max-sm:mt-7`}
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col bg-white justify-between items-center text-center py-14">
          <img className="w-16" src={contactData.main.end.arrow} />
          <h2 className="text-general font-bold text-base mt-5">
            {contactData.main.end.text[0]}
          </h2>
          <h2 className="text-general font-bold text-[58px] leading-[80px] mt-5">
            {contactData.main.end.text[1]}
          </h2>
          <button className="py-4 px-10 bg-primaryColor text-white rounded-md mt-5">
            {contactData.main.end.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PageContentContact;
