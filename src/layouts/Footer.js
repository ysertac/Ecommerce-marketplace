import { data } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Brand and Socials */}
      <div className="bg-[#FAFAFA]">
        <div className="flex justify-between w-[73%] mx-auto py-10">
          <span className="text-2xl text-general font-bold">
            {data.header2.brand}
          </span>
          <span className="text-primaryColor">
            {data.header1.socials.icons.map((icon) => (
              <a target="_blank" className="text-2xl" href={icon.path}>
                {icon.icon}
              </a>
            ))}
          </span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-[73%] mx-auto">
        <div className="flex justify-between py-12">
          <div className="flex justify-between w-[70%]">
            {data.footer.blocks.map((block) => (
              <div>
                <h2 className="text-base text-general font-bold mb-5">
                  {block.header}
                </h2>
                <div className="flex flex-col ">
                  {block.contents.map((content) => (
                    <Link className="text-sm leading-6 font-700 text-[#737373]">
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
              className="h-14 bg-[#f9f9f9] border border-[#E6E6E6] pl-4"
              type={data.footer.getInTouch.input.email.type}
              placeholder={data.footer.getInTouch.input.email.placeHolder}
            />
            <input
              className="h-14 bg-primaryColor w-28 text-white"
              type={data.footer.getInTouch.input.submit.type}
              value={data.footer.getInTouch.input.submit.value}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm font-bold text-[#737373] bg-[#FAFAFA] py-5">
        <p className="w-[73%] mx-auto">{data.footer.copyRight}</p>
      </div>
    </>
  );
};
export default Footer;
