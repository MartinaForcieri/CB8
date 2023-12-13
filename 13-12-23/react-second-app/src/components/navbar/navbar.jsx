import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="path/to/your/logo.png" alt="Logo" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>

      {/* Burger Menu */}
      <div className="burger-menu">
        <input type="checkbox" id="burger-checkbox" />
        <label htmlFor="burger-checkbox">
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Menu Links */}
        <div className="menu-links">
          <a href="#">Home</a>
          <a href="#">About us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
