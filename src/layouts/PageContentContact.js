import { contactData } from "../data";

const PageContentContact = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-[url('assets/contact/bannerbg.png')] bg-cover w-3/4 mx-auto h-[44vw] flex items-center">
        <div className="flex flex-col justify-between h-3/5">
          <p className="text-general font-bold text-base">
            {contactData.banner.texts[0]}
          </p>
          <p className="text-general font-bold text-[58px] leadig-[80px] w-96">
            {contactData.banner.texts[1]}
          </p>
          <p className="text-secondaryColor text-xl font-normal w-96">
            {contactData.banner.texts[2]}
          </p>
          <p className="text-general font-bold text-2xl">
            {contactData.banner.texts[3]}
          </p>
          <p className="text-general font-bold text-2xl">
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
      <section className="my-20">
        <div className="w-[35%] mx-auto text-center">
          <h2 className="text-general font-bold text-sm leading-6">
            {contactData.main.header[0]}
          </h2>
          <h2 className="text-general font-bold text-[40px] leading-[50px]">
            {contactData.main.header[1]}
          </h2>
        </div>
        <div className="w-2/3 flex justify-between mx-auto my-20">
          {contactData.main.cards.map((card) => (
            <div
              className={`${card.bg} ${card.color} h-[28vw] w-1/3 flex flex-col justify-evenly items-center`}
            >
              <img src={card.icon} className="w-1/5" />
              <h2 className="font-bold text-sm leading-6">{card.text[0]}</h2>
              <h3 className="font-bold text-base">{card.text[1]}</h3>
              <button
                className={`font-bold text-sm leading-6 text-primaryColor border border-primaryColor py-4 px-9 rounded-[37px] ${card.hover} duration-500`}
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center text-center h-[13vw]">
          <img className="w-16" src={contactData.main.end.arrow} />
          <h2 className="text-general font-bold text-base">
            {contactData.main.end.text[0]}
          </h2>
          <h2 className="text-general font-bold text-[58px] leading-[80px]">
            {contactData.main.end.text[1]}
          </h2>
          <button className="py-4 px-10 bg-primaryColor text-white rounded-md">
            {contactData.main.end.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PageContentContact;
