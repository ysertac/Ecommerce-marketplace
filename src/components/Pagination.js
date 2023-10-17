const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-gray-200 bg-white px-4 sm:px-6 pt-24">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-5 bg-[#f3f3f3] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="text-[#bdbdbd] font-bold text-sm leading-6 px-3">
                Previous
              </span>
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-5 text-sm font-bold leading-6 text-primaryColor ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              1
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-primaryColor px-4 py-5 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-5 text-sm font-bold leading-6 text-primaryColor ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="text-primaryColor font-bold text-sm leading-6 px-3">
                Next
              </span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
