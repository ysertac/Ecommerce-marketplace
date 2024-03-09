import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../store/actions/productActions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DropDownSort() {
  const sortHandler = (e) => {
    if (
      localStorage.getItem(lsKeyFilter) !== "" &&
      localStorage.getItem(lsKeyCategory) == ""
    ) {
      dispatch(
        fetchProductsAction(
          activePage,
          "",
          localStorage.getItem(lsKeyFilter),
          e.target.innerText
        )
      );
    } else if (
      localStorage.getItem(lsKeyCategory) !== "" &&
      localStorage.getItem(lsKeyFilter) == ""
    ) {
      dispatch(
        fetchProductsAction(
          activePage,
          localStorage.getItem(lsKeyCategory),
          "",
          e.target.innerText
        )
      );
    } else {
      dispatch(fetchProductsAction(activePage, "", "", e.target.innerText));
    }
    localStorage.setItem(lsKeySort, e.target.innerText);
  };

  const activePage = useSelector((store) => store.product.activePage);
  const dispatch = useDispatch();
  const lsKeyCategory = "categoryParam";
  const lsKeyFilter = "filterParam";
  const lsKeySort = "sortParam";
  return (
    <Menu as="div" className="relative inline-block text-left max-sm:w-[30%]">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-bold leading-6 hover:text-black text-secondaryColor border-2 py-2 px-8">
          Sort
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
            <Menu.Item>
              {({ active }) => (
                <div
                  id="div1"
                  onClick={sortHandler}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Fiyat artan
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={sortHandler}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Fiyat azalan
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={sortHandler}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Puan artan
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={sortHandler}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Puan azalan
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
