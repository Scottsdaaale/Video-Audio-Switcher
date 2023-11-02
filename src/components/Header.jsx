import { Navbar } from "react-bootstrap";
import logo from "./assets/57c.png";

function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="50"
          height="50"
          className=""
          alt="Logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
