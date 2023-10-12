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
      { name: "Shop", path: "/Products" },
      { name: "About", path: "/" },
      { name: "Blog", path: "/" },
      { name: "Contact", path: "/" },
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
};
