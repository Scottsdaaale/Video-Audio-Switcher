import { Navbar } from "react-bootstrap";
import logo from "../assets/header-logo.svg";

function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className=""
          alt="Logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
