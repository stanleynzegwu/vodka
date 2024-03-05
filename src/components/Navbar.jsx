import cart from "/images/shopping-cart.png";
import logo from "/images/silverLogo.png";

const Navbar = () => {
  return (
    <div className={`fixed h-16 w-full bg-[#1a1919] z-50`}>
      <ul className="flex items-center justify-between h-full">
        <li className="w-[150px] h-full flex items-center justify-center">
          <img className=" " src={logo} alt="logo" />
        </li>
        <li className="w-[150px] h-full flex justify-center items-center">
          <img className="w-[30px] h-[30px]" src={cart} alt="shopping-cart" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
