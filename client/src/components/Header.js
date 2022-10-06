import logo from "./img/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex align-items-center">
            <img src={logo} alt=""  className="icon"/>
            <div>Project Manager</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
