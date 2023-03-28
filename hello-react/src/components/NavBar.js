import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <img src={menu} alt="icon" />
    </nav>
  );
}

export default NavBar;
