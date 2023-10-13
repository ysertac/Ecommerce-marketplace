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
