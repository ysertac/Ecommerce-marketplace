import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProductsAction } from "../store/actions/productActions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDownn() {
  const { pageno } = useParams();
  const categories = useSelector((store) => store.global.categories);
  const activePage = useSelector((store) => store.product.activePage);
  const dispatch = useDispatch();
  const history = useHistory();
  const lsKeyCategory = "categoryParam";
  const lsKeyFilter = "filterParam";
  const lsKeySort = "sortParam";

  useEffect(() => {
    if (localStorage.getItem(lsKeySort) == "") {
      if (
        localStorage.getItem(lsKeyCategory) == "" &&
        localStorage.getItem(lsKeyFilter) == ""
      ) {
        dispatch(
          fetchProductsAction(
            pageno - 1,
            localStorage.getItem(lsKeyCategory),
            "",
            ""
          )
        );
      } else {
        if (
          localStorage.getItem(lsKeyCategory) !== "" &&
          localStorage.getItem(lsKeyFilter) == ""
        ) {
          dispatch(
            fetchProductsAction(
              pageno - 1,
              localStorage.getItem(lsKeyCategory),
              "",
              ""
            )
          );
        } else {
          dispatch(
            fetchProductsAction(
              pageno - 1,
              "",
              localStorage.getItem(lsKeyFilter),
              ""
            )
          );
        }
      }
    } else {
      if (
        localStorage.getItem(lsKeyCategory) == "" &&
        localStorage.getItem(lsKeyFilter) == ""
      ) {
        dispatch(
          fetchProductsAction(
            pageno - 1,
            "",
            "",
            localStorage.getItem(lsKeySort)
          )
        );
      } else {
        if (localStorage.getItem(lsKeyCategory) !== "") {
          dispatch(
            fetchProductsAction(
              pageno - 1,
              localStorage.getItem(lsKeyCategory),
              "",
              localStorage.getItem(lsKeySort)
            )
          );
        } else {
          dispatch(
            fetchProductsAction(
              pageno - 1,
              "",
              localStorage.getItem(lsKeyFilter),
              localStorage.getItem(lsKeySort)
            )
          );
        }
      }
    }
  }, [activePage]);
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
                <Menu.Item key={category}>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => (
                        dispatch(
                          fetchProductsAction(pageno - 1, category.id, "", "")
                        ),
                        localStorage.setItem(lsKeyCategory, category.id),
                        localStorage.setItem(lsKeyFilter, ""),
                        history.push(
                          `/shop/${
                            category.gender
                          }/${category.title.toLowerCase()}`
                        )
                      )}
                    >
                      {"Erkek " + category.title}
                    </div>
                  )}
                </Menu.Item>
              ))}
          </div>
          <div className="py-1">
            {categories
              .filter((category) => category.code[0] == "k")
              .map((category) => (
                <Menu.Item key={category}>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => (
                        dispatch(
                          fetchProductsAction(pageno - 1, category.id, "", "")
                        ),
                        localStorage.setItem(lsKeyCategory, category.id),
                        localStorage.setItem(lsKeyFilter, ""),
                        history.push(
                          `/shop/${
                            category.gender
                          }/${category.title.toLowerCase()}`
                        )
                      )}
                    >
                      {"Kadın " + category.title}
                    </div>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
