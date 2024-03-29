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
import team1 from "./assets/about/team1.jpg";
import team2 from "./assets/about/team2.jpg";
import team3 from "./assets/about/team3.jpg";
import bbimg from "./assets/about/bbimg.jpg";
import teamBanner1 from "./assets/team/teambanner1.png";
import teamBanner2 from "./assets/team/teambanner2.png";
import teamBanner3 from "./assets/team/teambanner3.png";
import teamBanner4 from "./assets/team/teambanner4.png";
import teamBanner5 from "./assets/team/teambanner5.png";
import tteam1 from "./assets/team/team1.jpg";
import tteam2 from "./assets/team/team2.jpg";
import tteam3 from "./assets/team/team3.jpg";
import tteam4 from "./assets/team/team4.jpg";
import tteam5 from "./assets/team/team5.jpg";
import tteam6 from "./assets/team/team6.jpg";
import tteam7 from "./assets/team/team7.jpg";
import tteam8 from "./assets/team/team8.jpg";
import tteam9 from "./assets/team/team9.jpg";
import contactBannerBg from "./assets/contact/bannerbg.png";
import phone from "./assets/contact/phone.png";
import location from "./assets/contact/location.png";
import envelope from "./assets/contact/envelope.png";
import arrow from "./assets/contact/Arrow.png";
import detailImg from "./assets/product/main.jpg";
import add1 from "./assets/product/1.jpg";
import add2 from "./assets/product/2.jpg";
import add3 from "./assets/product/3.jpg";
import add4 from "./assets/product/4.jpg";
import add5 from "./assets/product/5.jpg";
import add6 from "./assets/product/6.jpg";
import add7 from "./assets/product/7.jpg";
import add8 from "./assets/product/8.jpg";
import none from "./assets/about/none.png";
import tbres1 from "./assets/team/tbres1.jpg";
import tbres2 from "./assets/team/tbres2.jpg";
import tbres3 from "./assets/team/tbres3.jpg";
import tbres4 from "./assets/team/tbres4.jpg";
import tbres5 from "./assets/team/tbres5.jpg";
import contactBanner from "./assets/contact/contactbanner.png";
import DropDownn from "./components/DropDownn";

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
          icon: <i class="fa-brands fa-instagram"></i>,
          path: "https://instagram.com/ysertacc",
        },
        {
          icon: <i class="fa-brands fa-github"></i>,
          path: "https://github.com/ysertac",
        },
        {
          icon: <i class="fa-brands fa-linkedin-in"></i>,
          path: "https://linkedin.com/in/sertacyildirir",
        },
        {
          icon: <i class="fa-brands fa-facebook"></i>,
          path: "https://facebook.com/ysertacc",
        },
      ],
    },
  },
  header2: {
    brand: "Bandage",
    navbar: [
      { name: "Home", path: "/" },
      { name: <DropDownn />, path: "/shop/1" },
      { name: "About Us", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Contact", path: "/contact" },
      { name: "Pages", path: "/deneme" },
    ],
    auth: {
      icon: <i class="fa-regular fa-user"></i>,
      login: {
        path: "/login",
        name: "Log in",
      },
      register: {
        path: "/register",
        name: "Sign up",
      },
    },
  },
  hero: {},
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
          "bg-[url('./assets/productlist/plfp1.png')] bg-cover w-[18.75%] h-[15.5vw] max-sm:h-[75vw] max-sm:mt-5 bg-no-repeat flex justify-center items-center max-sm:w-full",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp2.png')] bg-cover w-[18.75%] h-[15.5vw] max-sm:h-[75vw] max-sm:mt-5 bg-no-repeat flex justify-center items-center max-sm:w-full",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp3.png')] bg-cover w-[18.75%] h-[15.5vw] max-sm:h-[75vw] max-sm:mt-5 bg-no-repeat flex justify-center items-center max-sm:w-full",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp4.png')] bg-cover w-[18.75%] h-[15.5vw] max-sm:h-[75vw] max-sm:mt-5 bg-no-repeat flex justify-center items-center max-sm:w-full",
        content1: "CLOTHS",
        content2: "5 Items",
      },
      {
        class:
          "bg-[url('./assets/productlist/plfp5.png')] bg-cover w-[18.75%] h-[15.5vw] max-sm:h-[75vw] max-sm:mt-5 bg-no-repeat flex justify-center items-center max-sm:w-full",
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
        id: 0,
        img: plsp1,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 1,
        img: plsp2,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 2,
        img: plsp3,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 3,
        img: plsp4,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 4,
        img: plsp5,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 5,
        img: plsp6,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "no stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 6,
        img: plsp7,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 7,
        img: plsp8,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "no stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 8,
        img: plsp9,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 9,
        img: plsp10,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 10,
        img: plsp11,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "in stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
      },
      {
        id: 11,
        img: plsp12,
        header: "Graphic Design",
        header2: "English Department",
        price: { full: "$16.48", discount: "$6.48" },
        colors: {
          blue: (
            <div className="bg-primaryColor w-1/6 h-full rounded-full"></div>
          ),
          darkish: (
            <div className="bg-[#252B42] w-1/6 h-full rounded-full"></div>
          ),
          orange: (
            <div className="bg-[#E77C40] w-1/6 h-full rounded-full"></div>
          ),
          green: <div className="bg-[#23856D] w-1/6 h-full rounded-full"></div>,
        },
        definition: `Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.`,
        stock: "no stock",
        buttons: [
          "Select Options",
          <i class="fa-regular fa-heart"></i>,
          <i class="fa-solid fa-cart-shopping"></i>,
          <i class="fa-regular fa-eye"></i>,
        ],
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
    none,
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
  team: {
    h2: "Meet Our Team",
    text: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
    members: [
      {
        img: team1,
        username: "Username",
        profession: "Profession",
        links: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: team2,
        username: "Username",
        profession: "Profession",
        links: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: team3,
        username: "Username",
        profession: "Profession",
        links: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
    ],
  },
  companies: {
    h2: "Big Companies Are Here",
    text: "Problems trying to resolve the conflict between the two major of Classical physics: Newtonian mechanics",
    img: [logo1, logo2, logo3, logo4, logo5, logo6],
  },
  bottomBanner2: {
    img: bbimg,
    header1: "WORK WITH US",
    header2: "Now Let's grow Yours",
    text: "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th",
    button: "Button",
  },
};

export const teamData = {
  bannerTop: [
    "WHAT WE DO",
    "Innovation tailored for you",
    <i class="fa-solid fa-angle-right"></i>,
  ],
  bannerBottom: [
    teamBanner1,
    teamBanner2,
    teamBanner3,
    teamBanner4,
    teamBanner5,
    tbres1,
    tbres2,
    tbres3,
    tbres4,
    tbres5,
  ],
  team: {
    header: "Meet Our Team",
    members: [
      {
        img: tteam1,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam2,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam3,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam4,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam5,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam6,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam7,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam8,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
      {
        img: tteam9,
        username: "Username",
        profession: "Profession",
        socials: [
          {
            path: "/#",
            icon: <i class="fa-brands fa-instagram"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-facebook"></i>,
          },
          {
            path: "/#",
            icon: <i class="fa-brands fa-twitter"></i>,
          },
        ],
      },
    ],
  },
  trial: {
    header: "Start your 14 days free trial",
    text: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.",
    button: "Try it free now",
    socials: [
      {
        path: "https://github.com/ysertac",
        icon: <i class="fa-brands fa-github"></i>,
      },
      {
        path: "https://instagram.com/ysertacc",
        icon: <i class="fa-brands fa-instagram"></i>,
      },
      {
        path: "https://facebook.com/ysertacc",
        icon: <i class="fa-brands fa-facebook"></i>,
      },
      {
        path: "/https://linkedin.com/in/sertacyildirir",
        icon: <i class="fa-brands fa-linkedin"></i>,
      },
    ],
  },
};

export const contactData = {
  banner: {
    texts: [
      "CONTACT US",
      "Get in touch today!",
      "We know how large objects will act, but things on a small scale.",
      "Phone: +90 535 741 45 11",
      "Email: ysertac96@gmail.com",
      contactBanner,
    ],
    socials: [
      {
        path: "https://instagram.com/ysertacc",
        icon: <i class="fa-brands fa-instagram fa-2x"></i>,
      },
      {
        path: "https://facebook.com/ysertacc",
        icon: <i class="fa-brands fa-facebook fa-2x"></i>,
      },
      {
        path: "https://linkedin.com/in/sertacyildirir",
        icon: <i class="fa-brands fa-linkedin fa-2x"></i>,
      },
      {
        path: "https://github.com/ysertac",
        icon: <i class="fa-brands fa-github fa-2x"></i>,
      },
    ],
    img: contactBannerBg,
  },
  main: {
    header: ["VISIT OUR OFFICE", "We help small businesses with big ideas"],
    cards: [
      {
        icon: phone,
        text: ["+90 535 741 45 11", "Get Support"],
        button: "CALL",
        color: "text-general",
        bg: "bg-white",
        hover: "hover:bg-general",
      },
      {
        icon: location,
        text: ["Antakya / Hatay / Turkiye", "Get Support"],
        button: "LOCATION",
        color: "text-white",
        bg: "bg-general",
        hover: "hover:bg-white",
      },
      {
        icon: envelope,
        text: ["ysertac96@gmail.com", "Get Support"],
        button: "EMAIL",
        color: "text-general",
        bg: "bg-white",
        hover: "hover:bg-general",
      },
    ],
    end: {
      arrow: arrow,
      text: ["WE Can't WAIT TO MEET YOU", "Let's Talk"],
      button: "Try it free now",
    },
  },
};

export const productData = {
  options: {
    headers: [
      "Description",
      "Additional Information",
      { name: "Reviews", number: 0 },
    ],
    details: {
      img: detailImg,
      secondCol: {
        header: "the quick fox jumps over",
        content: [
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        ],
      },
      thirdCol: {
        header: "the quick fox jumps over",
        content1: [
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
        ],
        content2: [
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
          {
            icon: <i class="fa-solid fa-angle-right"></i>,
            sentence: "the quick fox jumps over the lazy dog",
          },
        ],
      },
    },
    bestSeller: {
      header: "BESTSELLER PRODUCTS",
      products: [
        {
          name: "Graphic Design",
          def: "English Department",
          price: ["$16.48", "$6.48"],
          img: add1,
        },
        {
          name: "Graphic Design2",
          def: "English Department",
          price: ["$20.99", "$12.99"],
          img: add2,
        },
        {
          name: "Graphic Design3",
          def: "English Department",
          price: ["$19.48", "$9.99"],
          img: add3,
        },
        {
          name: "Graphic Design4",
          def: "English Department",
          price: ["$15.48", "$4.48"],
          img: add4,
        },
        {
          name: "Graphic Design5",
          def: "English Department",
          price: ["$17.45", "$7.45"],
          img: add5,
        },
        {
          name: "Graphic Design6",
          def: "English Department",
          price: ["$21.99", "$15.99"],
          img: add6,
        },
        {
          name: "Graphic Design7",
          def: "English Department",
          price: ["$7.99", "$3.99"],
          img: add7,
        },
        {
          name: "Graphic Design8",
          def: "English Department",
          price: ["$32.49", "$20.99"],
          img: add8,
        },
      ],
    },
  },
};
