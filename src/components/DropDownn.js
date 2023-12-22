import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownn() {
  const categories = useSelector((store) => store.global.categories);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-bold leading-6 hover:text-white text-secondaryColor">
          Shop
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {categories
              .filter((category) => category.code[0] == "e")
              .map((category) => (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/shop/erkek/" + category.code.substring(2)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {"Erkek " + category.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
          </div>
          <div className="py-1">
            {categories
              .filter((category) => category.code[0] == "k")
              .map((category) => (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={"/shop/kadin/" + category.code.substring(2)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {"Kadın " + category.title}
                    </Link>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
