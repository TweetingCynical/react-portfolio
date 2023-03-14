import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header d-flex flex-wrap justify-content-center">
      <NavLink
        className="btn bg-purple shadow-lg m-2 p-2 col-3"
        to="/react-portfolio"
      >
        Home
      </NavLink>
      <NavLink className="btn bg-purple shadow-lg m-2 p-2 col-3" to="projects">
        Projects
      </NavLink>
      <NavLink className="btn bg-purple shadow-lg m-2 p-2 col-3" to="contact">
        Contact
      </NavLink>
    </header>
  );
};

export default Navbar;
