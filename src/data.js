import b11 from "./assets/b11.jpg";
import b12 from "./assets/b12.jpg";
import b13 from "./assets/b13.jpg";
import t1 from "./assets/t1.png";
import t2 from "./assets/t2.png";
import t3 from "./assets/t3.png";
import t4 from "./assets/t4.png";
import t5 from "./assets/t5.png";
import t6 from "./assets/t6.png";
import t7 from "./assets/t7.png";
import t8 from "./assets/t8.png";
import pc4 from "./assets/none.png";
import pccar1 from "./assets/pccar1.png";
import pccar2 from "./assets/pccar2.png";
import pc51 from "./assets/pc51.png";
import pc52 from "./assets/pc52.png";
import pc53 from "./assets/pc53.png";
import plsp1 from "./assets/productlist/plsp1.jpg";
import plsp2 from "./assets/productlist/plsp2.jpg";
import plsp3 from "./assets/productlist/plsp3.jpg";
import plsp4 from "./assets/productlist/plsp4.jpg";
import plsp5 from "./assets/productlist/plsp5.jpg";
import plsp6 from "./assets/productlist/plsp6.jpg";
import plsp7 from "./assets/productlist/plsp7.jpg";
import plsp8 from "./assets/productlist/plsp8.jpg";
import plsp9 from "./assets/productlist/plsp9.jpg";
import plsp10 from "./assets/productlist/plsp10.jpg";
import plsp11 from "./assets/productlist/plsp11.jpg";
import plsp12 from "./assets/productlist/plsp12.jpg";
import logo1 from "./assets/productlist/logo1.png";
import logo2 from "./assets/productlist/logo2.png";
import logo3 from "./assets/productlist/logo3.png";
import logo4 from "./assets/productlist/logo4.png";
import logo5 from "./assets/productlist/logo5.png";
import logo6 from "./assets/productlist/logo6.png";
import videoImg from "./assets/about/video.jpg";

export const data = {
  header1: {
    mobile: {
      icon: <i class="fa-solid fa-phone"></i>,
      value: "+90 535 741 45 11",
    },
    mail: {
      icon: <i class="fa-solid fa-envelope"></i>,
      value: "ysertac96@gmail.com",
    },
    text: "Follow Us and get a chance to win 80% off",
    socials: {
      text: "Follow Us :",
      icons: [
        {
          icon: <i class="fa-brands fa-instagram px-2"></i>,
          path: "https://instagram.com/ysertacc",
        },
        {
          icon: <i class="fa-brands fa-github px-2"></i>,
          path: "https://github.com/ysertac",
        },
        {
          icon: <i class="fa-brands fa-linkedin-in px-2"></i>,
          path: "https://linkedin.com/in/sertacyildirir",
        },
        {
          icon: <i class="fa-brands fa-facebook px-2"></i>,
          path: "https://facebook.com/ysertacc",
        },
      ],
    },
  },
  header2: {
    brand: "Bandage",
    navbar: [
      { name: "Home", path: "/" },
      { name: "Shop", path: "/products" },
      { name: "About", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Contact", path: "/contact" },
      { name: "Pages", path: "/" },
    ],
    auth: {
      icon: <i class="fa-regular fa-user"></i>,
      login: "Login",
      register: "Register",
    },

    otherIcons: [
      {
        icon: <i class="fa-solid fa-magnifying-glass"></i>,
        count: "",
      },
      {
        icon: <i class="fa-solid fa-cart-shopping"></i>,
        count: 0,
      },
      { icon: <i class="fa-regular fa-heart"></i>, count: 0 },
    ],
  },
  hero: {
    carousel: [b11, b12, b13],
  },
  pageContent: {
    header1: "EDITOR'S PICK",
    header2: { header: "BESTSELLER PRODUCTS", text: "Featured Products" },
    links: ["MEN", "WOMEN", "ACCESSORIES", "KIDS"],
    products: [
      {
        image: t1,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t2,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t3,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t4,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t5,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t6,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t7,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
      {
        image: t8,
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          },
          {
            name: "green",
            icon: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "orange",
            icon: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          },
          {
            name: "dark",
            icon: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          },
        ],
      },
    ],
    carousel: [pccar1, pccar2],
    pageContent4: {
      img: pc4,
      text1: "SUMMER 2020",
      header: "Part of the Neural Universe",
      text2: "We know how large objects will act, but things on a small scale",
      buttons: ["BUY NOW", "READ MORE"],
    },
    pageContent5: {
      header: "Featured Posts",
      items: [
        {
          topText: ["Google", "Trending", "New"],
          img: pc51,
          name: "Loudest à la Madison #1 (L'integral)",
          bottomText: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
          date: {
            icon: <i class="fa-regular fa-clock text-primaryColor"></i>,
            value: "dd/month/yyyy",
          },
          comment: {
            icon: <i class="fa-solid fa-chart-simple text-[#23856D]"></i>,
            number: 0,
            text: "comments",
          },
          learnMore: {
            text: "Learn More",
            icon: <i class="fa-solid fa-angle-right text-primaryColor"></i>,
          },
        },
        {
          topText: ["Google", "Trending", "New"],
          img: pc52,
          name: "Loudest à la Madison #2 (L'integral)",
          bottomText: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
          date: {
            icon: <i class="fa-regular fa-clock text-primaryColor"></i>,
            value: "dd/month/yyyy",
          },
          comment: {
            icon: <i class="fa-solid fa-chart-simple text-[#23856D]"></i>,
            number: 0,
            text: "comments",
          },
          learnMore: {
            text: "Learn More",
            icon: <i class="fa-solid fa-angle-right text-primaryColor"></i>,
          },
        },
        {
          topText: ["Google", "Trending", "New"],
          img: pc53,
          name: "Loudest à la Madison #3 (L'integral)",
          bottomText: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
          date: {
            icon: <i class="text-primaryColor fa-regular fa-clock"></i>,
            value: "dd/month/yyyy",
          },
          comment: {
            icon: <i class="fa-solid fa-chart-simple text-[#23856D]"></i>,
            number: 0,
            text: "comments",
          },
          learnMore: {
            text: "Learn More",
            icon: <i class="fa-solid fa-angle-right text-primaryColor"></i>,
          },
        },
      ],
    },
  },
  footer: {
    blocks: [
      {
        header: "Company Info",
        contents: ["About Us", "Carrier", "We are hiring", "Blog"],
      },
      {
        header: "Legal",
        contents: ["About Us", "Carrier", "We are hiring", "Blog"],
      },
      {
        header: "Features",
        contents: [
          "Business Marketing",
          "User Analytic",
          "Live Chat",
          "Unlimited Support",
        ],
      },
      {
        header: "Resources",
        contents: ["IOS & Android", "Watch a Demo", "Customers", "API"],
      },
    ],
    getInTouch: {
      header: "Get In Touch",
      input: {
        email: {
          type: "email",
          placeHolder: "Your Email",
        },
        submit: {
          type: "submit",
          value: "Subscribe",
        },
      },
    },
    copyRight: "Made With Love By Turkiye All Right Reserved",
  },
};
const secondPartHeaderCounter = 12;

export const productListData = {
  shop: {
    header: {
      left: "Shop",
      right: { first: "Home", second: "Shop" },
    },
    main: [
      {
        class:
          "bg-[url('./assets/productlist/plfp1.png')] bg-cover w-[270px] h-[295px] bg-no-repeat flex justify-center items-center",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp2.png')] bg-cover w-[270px] h-[295px] bg-no-repeat flex justify-center items-center",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp3.png')] bg-cover w-[270px] h-[295px] bg-no-repeat flex justify-center items-center",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp4.png')] bg-cover w-[270px] h-[295px] bg-no-repeat flex justify-center items-center",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp5.png')] bg-cover w-[270px] h-[295px] bg-no-repeat flex justify-center items-center",
        content1: "CLOTHS",
        content2: "5 Items",
      },
    ],
  },
  secondPart: {
    header: {
      left: {
        text: `Showing all ${secondPartHeaderCounter} results`,
      },
      views: {
        text: "Views:",
        options: [
          <i class="fa-brands fa-windows w-[14px]"></i>,
          <i class="fa-solid fa-list w-[14px]"></i>,
        ],
      },
      buttons: [
        {
          text: "Popularity",
          icon: <i class="fa-solid fa-angle-down text-secondaryColor"></i>,
        },
        "Filter",
      ],
    },
    content: [
      {
        img: plsp1,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp2,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp3,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp4,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp5,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp6,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp7,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp8,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp9,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp10,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp11,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
      {
        img: plsp12,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: <div className="bg-primaryColor w-4 h-4 rounded-full"></div>,
          darkish: <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>,
          orange: <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>,
          green: <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>,
        },
      },
    ],
  },
  logoPart: [logo1, logo2, logo3, logo4, logo5, logo6],
};

export const aboutUsData = {
  banner: [
    "ABOUT COMPANY",
    "ABOUT US",
    "We know how large objects will act, but things on a small scale",
    "Get Quote Now",
  ],
  second: [
    "Problems trying",
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent",
    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
  ],
  third: [
    {
      big: "15K",
      small: "Happy Customers",
    },
    {
      big: "150K",
      small: "Monthly Visitors",
    },
    {
      big: "15",
      small: "Countries Worldwide",
    },
    {
      big: "100+",
      small: "Top Partners",
    },
  ],
  bottomBanner: {
    img: videoImg,
  },
};
