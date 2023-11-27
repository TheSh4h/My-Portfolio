import { NavLink } from "react-router-dom";

const Navbar = () => {
    
  return (
    <nav className="bg-gray-800 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Haseeb Shah</div>
        <div className="flex space-x-4">
          <NavLink to="/services" className="text-white font-bold" activeClassName="underline">
            Services
          </NavLink>
          <NavLink to="/contact" className="text-white font-bold" activeClassName="underline">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
