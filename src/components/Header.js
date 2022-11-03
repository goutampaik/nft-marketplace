import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [toggleClass, setToggleClass] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  const _toggleClass = () => {
    setToggleClass(!toggleClass);
  };
  console.log(activeIndex);
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <div className="logo">
              <div className="opensea-logo">
                <img src="assets/img/opensea.png" alt="" />
              </div>
            </div>
            <div className="search-box">
              <form method="post" className="search-form">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search..."
                />
                <button className="search-btn" type="submit">
                  <i className="icofont-search-1"></i>
                </button>
              </form>
            </div>
            <div className={`menu ${sidebarActive ? "active" : ""}`}>
              <div
                className="close-menu"
                onClick={() => setSidebarActive(false)}
              >
                <i className="icofont-close"></i>
              </div>
              <ul className="menu-nav-ul">
                <li className="nav-list">
                  <a href="./" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-list nav-pages">
                  {" "}
                  <a className="nav-link">Stats</a>
                  <ul className="nav-pages-list">
                    <li>
                      <Link to="Activity" onClick={_toggleSidebar}>
                        Activity
                      </Link>
                    </li>
                    <li>
                      <Link to="Rankings" onClick={_toggleSidebar}>
                        Rankings
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-list">
                  <Link
                    className="nav-link"
                    to="Wallet-Connect"
                    onClick={_toggleSidebar}
                  >
                    Wallet
                  </Link>
                </li>
                <li className="nav-list">
                  <Link
                    className="nav-link"
                    to="All-Author"
                    onClick={_toggleSidebar}
                  >
                    Author
                  </Link>
                </li>

                <li className="nav-list">
                  <Link className="nav-link" to="Blog" onClick={_toggleSidebar}>
                    Blog
                  </Link>
                </li>
                <li className="nav-list nav-pages">
                  {" "}
                  <a className="nav-link">
                    Pages <span>v</span>
                  </a>
                  <ul className="nav-pages-list">
                    <li>
                      <Link to="Top-Seller" onClick={_toggleSidebar}>
                        Top Sellers
                      </Link>
                    </li>
                    <li>
                      <Link to="Collection" onClick={_toggleSidebar}>
                        Collection
                      </Link>
                    </li>
                    <li>
                      <Link to="Sellers" onClick={_toggleSidebar}>
                        Sellers
                      </Link>
                    </li>
                    <li>
                      <Link to="Dashboard" onClick={_toggleSidebar}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="Mission" onClick={_toggleSidebar}>
                        Mission
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="./" className="custom-btn l-none mt-3">
                <span>Connect Wallet</span>
              </a>
            </div>
            <div className="wallet-btn m-none">
              <a href="./" className="custom-btn-alt">
                <span>
                  <i className="icofont-wallet"></i> Connect Wallet
                </span>
              </a>
            </div>
            <div className="show-nav" onClick={_toggleSidebar}>
              <i className="icofont-navigation-menu"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
