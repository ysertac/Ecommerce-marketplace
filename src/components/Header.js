import { data } from "../data";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Üst Header */}
      <div className="bg-[#252B42] text-white">
        <div className="flex justify-between w-[1439px] mx-auto py-5">
          <div className="font-bold text-sm leading-6">
            <span>
              {data.header1.mobile.icon} &nbsp; {data.header1.mobile.value}
            </span>
            <span className="pl-5">
              {data.header1.mail.icon} &nbsp; {data.header1.mail.value}
            </span>
          </div>
          <div className="font-bold text-sm leading-6">{data.header1.text}</div>
          <div className="font-bold text-sm leading-6">
            <span>{data.header1.socials.text}</span>
            {data.header1.socials.icons.map((icon) => (
              <a target="_blank" href={icon.path}>
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Header */}
      <div>
        <div className="flex justify-between items-center w-[1439px] mx-auto py-5">
          <div className="font-bold text-sm leading-6">
            <h2 className="text-2xl font-bold leading-8">
              {data.header2.brand}
            </h2>
          </div>
          <nav>
            {data.header2.navbar.map((link) => (
              <NavLink
                className="pl-4 text-sm font-bold leading-6 text-[#737373]"
                to={link.path}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="font-bold text-sm leading-6 text-[#23A6F0]">
            <span>{data.header2.auth.icon}</span>{" "}
            <span>{data.header2.auth.login}</span> /{" "}
            <span>{data.header2.auth.register}</span>
            {data.header2.otherIcons.map((icon) => (
              <span className="pl-5">
                {icon.icon} {icon.count}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
