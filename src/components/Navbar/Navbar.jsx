import { NavLink } from "react-router-dom";

const Navbar = () => {
    
  return (
    <nav className="bg-gray-800 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Haseeb Shah</div>
        <div className="flex space-x-4">
          <NavLink to="/about" className="text-white" activeClassName="font-bold">
            About Me
          </NavLink>
          <NavLink to="/portfolio" className="text-white" activeClassName="font-bold">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="text-white" activeClassName="font-bold">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
