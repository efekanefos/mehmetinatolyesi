import PersonalProducts from "../components/pages/PersonalProducts";
import Home from "../components/Home";

const pageinfo = [
  {
    title: "Home",
    isExact: true,
    component: Home,
    link: "/",
    isActive: true,
  },
  {
    title: "PersonalProducts",
    isExact: false,
    component: PersonalProducts,
    link: "/personalproducts",
    isActive: true,
  },
];

export default pageinfo;
