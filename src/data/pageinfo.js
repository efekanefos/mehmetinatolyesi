import WallArt from "../components/WallArt";
import Home from "../components/Home";
import ProductDetails from "../components/products/ProductDetails";
import Products from "../components/products/Products";
import AllProducts from "../components/products/AllProducts";
import YesilProducts from "../components/yesilProducts/YesilProducts";
import YesilDetails from "../components/yesilProducts/YesilDetails";

const pageinfo = [
  {
    title: "Home",
    isExact: true,
    component: Home,
    link: "/",
    isActive: true,
  },
  {
    title: "WallArt",
    isExact: false,
    component: WallArt,
    link: "/wallart",
    isActive: true,
  },
  {
    title: "ProductDetails",
    isExact: false,
    component: ProductDetails,
    link: "/products/:productID",
    isActive: true,
  },
  {
    title: "Products",
    isExact: false,
    component: Products,
    link: "/products",
    isActive: true,
  },
  {
    title: "AllProducts",
    isExact: false,
    component: AllProducts,
    link: "/allproducts",
    isActive: true,
  },
  {
    title: "YesilDetails",
    isExact: false,
    component: YesilDetails,
    link: "/yesilcam/:yesilID",
    isActive: true,
  },
  {
    title: "YesilProducts",
    isExact: false,
    component: YesilProducts,
    link: "/yesilcam",
    isActive: true,
  },
];

export default pageinfo;
