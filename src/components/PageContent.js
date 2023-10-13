import { data } from "../data";
import ProductList from "./ProductList";

const PageContent = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-2xl font-bold leading-8 p-16">
          {data.pageContent.header1}
        </h2>
        <div className="flex w-[1050px] mx-auto justify-between">
          <div className="bg-[url('https://picsum.photos/500/500?random')] bg-no-repeat h-[500px] w-[500px] relative">
            <a
              href="#"
              className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
            >
              {data.pageContent.links[0]}
            </a>
          </div>
          <div className="bg-[url('https://picsum.photos/240/500?random')] bg-no-repeat h-[500px] w-[240px] relative">
            <a
              href="#"
              className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
            >
              {data.pageContent.links[1]}
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-[url('https://picsum.photos/240/242?random1')] bg-no-repeat h-[242px] w-[240px] relative">
              <a
                href="#"
                className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
              >
                {data.pageContent.links[2]}
              </a>
            </div>
            <div className="bg-[url('https://picsum.photos/240/242?random2')] bg-no-repeat h-[242px] w-[240px] relative">
              <a
                href="#"
                className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
              >
                {data.pageContent.links[3]}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl font-bold leading-8 p-16">
          <p className="font-normal text-xl text-[#737373] leading-8">
            {data.pageContent.header2.text}
          </p>
          {data.pageContent.header2.header}
        </h2>
        <ProductList />
      </div>
    </>
  );
};

export default PageContent;
