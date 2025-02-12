import "./Nav.scss";
import PhoneMenu from "./PhoneMenu";
import DesktopMenu from "./DesktopMenu";
import ToggleTheme from "./ToggleTheme";
import NavProgressBar from "./NavProgressBar";
import Logo from "./Logo";

function Nav({ isLoggedIn = false }) {
  return (
    <>
      <nav className="Nav">
        <div className="nav-container">
          <Logo></Logo>
          <ToggleTheme />
          <PhoneMenu isLoggedIn={isLoggedIn} />
          <DesktopMenu isLoggedIn={isLoggedIn} />
        </div>
      </nav>
      <NavProgressBar />
      <div className="nav-fixer"></div>
    </>
  );
}
export default Nav;
