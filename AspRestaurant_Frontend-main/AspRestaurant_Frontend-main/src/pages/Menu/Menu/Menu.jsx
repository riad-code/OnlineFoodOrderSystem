
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinksImg from "../../../assets/menu/drinks.jpg";
import offeredImg from "../../../assets/menu/offered.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category.name === "Dessert");
  const soup = menu.filter((item) => item.category.name === "Soup");
  const pizza = menu.filter((item) => item.category.name === "Pizza");
  const offered = menu.filter((item) => item.category.name === "Offered");
  const salad = menu.filter((item) => item.category.name === "Salad");
  const drinks = menu.filter((item) => item.category.name === "Drinks");

  console.log(dessert, "\n", pizza, "\n", salad, "\n", offered, "\n", soup ,"\n", drinks);

  return (
    <div className="mb-5">
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"To Days Offter"}
      ></SectionTitle>
      <MenuCategory items={offered} title="Offers" coverImg={offeredImg}></MenuCategory>
      
      {/* for Dessert menu Items */}
      <MenuCategory items={dessert} title="Dessert" coverImg={desertImg}></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>
    
      <MenuCategory items={drinks} title="Drinks" coverImg={drinksImg}></MenuCategory>
    </div>
  );
};

export default Menu;
