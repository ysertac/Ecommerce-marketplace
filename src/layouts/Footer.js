import { data } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Brand and Socials */}
      <div className="bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col justify-between w-3/4 max-sm:w-11/12 mx-auto py-10">
          <span className="text-2xl text-general font-bold">
            {data.header2.brand}
          </span>
          <span className="text-primaryColor flex w-32 justify-between max-sm:mt-3">
            {data.header1.socials.icons.map((icon, index) => (
              <a
                key={index}
                target="_blank"
                className="text-2xl"
                href={icon.path}
              >
                {icon.icon}
              </a>
            ))}
          </span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-3/4 max-sm:w-11/12 mx-auto">
        <div className="flex max-sm:flex-col justify-between py-12">
          <div className="flex max-sm:flex-col justify-between w-[70%]">
            {data.footer.blocks.map((block, index) => (
              <div key={index}>
                <h2 className="text-base text-general font-bold mb-5">
                  {block.header}
                </h2>
                <div className="flex flex-col ">
                  {block.contents.map((content, index) => (
                    <Link
                      key={index}
                      to="/#"
                      className="text-sm leading-6 font-bold text-secondaryColor"
                    >
                      {content}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-base text-general font-bold mb-3">
              {data.footer.getInTouch.header}
            </h2>
            <input
              className="h-14 bg-[#f9f9f9] border max-sm:w-3/5 border-[#E6E6E6] pl-4"
              type={data.footer.getInTouch.input.email.type}
              placeholder={data.footer.getInTouch.input.email.placeHolder}
            />
            <input
              className="h-14 bg-primaryColor w-28 max-sm:w-2/5 text-white"
              type={data.footer.getInTouch.input.submit.type}
              value={data.footer.getInTouch.input.submit.value}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm font-bold text-[#737373] bg-[#FAFAFA] py-5">
        <p className="w-3/4 mx-auto">{data.footer.copyRight}</p>
      </div>
    </>
  );
};
export default Footer;
