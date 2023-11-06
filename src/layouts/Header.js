import { data } from "../data";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
      {/* Üst Header */}
      <div className="bg-[#252B42] text-white">
        <div className="sm:flex sm:justify-between w-3/4 max-sm:w-11/12 mx-auto py-5">
          <div className="font-bold text-sm leading-6 max-sm:flex max-sm:justify-between">
            <span>
              {data.header1.mobile.icon} &nbsp; {data.header1.mobile.value}
            </span>
            <span className="pl-5">
              {data.header1.mail.icon} &nbsp; {data.header1.mail.value}
            </span>
          </div>
          <div className="font-bold text-sm leading-6 max-sm:hidden">
            {data.header1.text}
          </div>
          <div className="font-bold text-sm leading-6 max-sm:hidden flex">
            <span className="mr-2">{data.header1.socials.text}</span>
            <span className="flex w-32 justify-between">
              {data.header1.socials.icons.map((icon) => (
                <a target="_blank" href={icon.path}>
                  {icon.icon}
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Alt Header */}

      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto w-3/4 max-sm:w-11/12 py-1">
              <div className="relative flex h-16 items-center justify-between">
                <div className="font-bold text-sm leading-6 text-primaryColor sm:hidden">
                  <span>{data.header2.auth.icon}</span>{" "}
                  <Link>{data.header2.auth.login}</Link> /{" "}
                  <Link to="/register">{data.header2.auth.register.name}</Link>
                </div>

                <div className="flex flex-1 items-center justify-center sm:justify-between">
                  <h2 className="text-2xl font-bold leading-8 text-general">
                    {data.header2.brand}
                  </h2>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-1">
                      {data.header2.navbar.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className={classNames(
                            item.current
                              ? "bg-general text-[#737373]"
                              : "text-[#737373] hover:bg-general hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-bold leading-6 text-[#737373]"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="font-bold text-sm leading-6 text-primaryColor max-sm:hidden">
                    <span>{data.header2.auth.icon}</span>{" "}
                    <Link>{data.header2.auth.login}</Link> /{" "}
                    <Link to="/register">
                      {data.header2.auth.register.name}
                    </Link>
                    {data.header2.otherIcons.map((icon) => (
                      <span className="pl-5">
                        {icon.icon} {icon.count}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collapse Button */}
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {data.header2.navbar.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-[#737373] hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-center text-sm font-bold leading-6 "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
