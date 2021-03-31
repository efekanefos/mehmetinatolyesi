import PersonalProducts from "../components/pages/PersonalProducts";
import WallArt from "../components/pages/WallArt";
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
  {
    title: "WallArt",
    isExact: false,
    component: WallArt,
    link: "/wallart",
    isActive: true,
  },
];

export default pageinfo;
