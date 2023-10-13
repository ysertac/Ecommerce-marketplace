import banner1 from "../src/assets/b1.jpg";
import banner2 from "../src/assets/b2.jpg";
import banner3 from "../src/assets/b3.jpg";

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
      { icon: <i class="fa-solid fa-magnifying-glass"></i>, count: "" },
      { icon: <i class="fa-solid fa-cart-shopping"></i>, count: 0 },
      { icon: <i class="fa-regular fa-heart"></i>, count: 0 },
    ],
  },
  hero: {
    carousel: [banner1, banner2, banner3],
  },
  pageContent: {
    header1: "EDITOR'S PICK",
    header2: { header: "BESTSELLER PRODUCTS", text: "Featured Products" },
    links: ["MEN", "WOMEN", "ACCESSORIES", "KIDS"],
    products: [
      {
        image: "https://picsum.photos/240/430?random1",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random2",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random3",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random4",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random5",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random6",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random7",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
        image: "https://picsum.photos/240/430?random8",
        name: "Product",
        price: { first: "$16.48", discount: "$6.48" },
        colors: [
          {
            name: "blue",
            icon: <div className="bg-[#23A6F0] w-4 h-4 rounded-full"></div>,
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
  },
};
