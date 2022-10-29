import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <div className="logo"></div>
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
            <div className="menu">
              <div className="close-menu">
                <i className="icofont-close"></i>
              </div>
              <ul className="menu-nav-ul">
                <li className="nav-list">
                  <a href="./" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-list">
                  <Link className="nav-link" to="Mission">
                    Activity
                  </Link>
                </li>
                <li className="nav-list">
                  <Link className="nav-link" to="Wallet-Connect">
                    Wallet
                  </Link>
                </li>
                <li className="nav-list">
                  <Link className="nav-link" to="All-Author">
                    Author
                  </Link>
                </li>

                <li className="nav-list">
                  <Link className="nav-link" to="Blog">
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
                      <Link to="Top-Seller">Top Sellers</Link>
                    </li>
                    <li>
                      <Link to="Collection">Collection</Link>
                    </li>
                    <li>
                      <Link to="Sellers">Sellers</Link>
                    </li>
                    <li>
                      <Link to="Dashboard">Dashboard</Link>
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
            <div className="show-nav" >
              <i className="icofont-navigation-menu"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
