import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header class="header">
        <div class="container">
          <nav class="navigation">
            <div class="logo"></div>
            <div class="search-box">
              <form method="post" class="search-form">
                <input
                  type="text"
                  class="form-control search-input"
                  placeholder="Search..."
                />
                <button class="search-btn" type="submit">
                  <i class="icofont-search-1"></i>
                </button>
              </form>
            </div>
            <div class="menu">
              <div class="close-menu">
                <i class="icofont-close"></i>
              </div>
              <ul class="menu-nav-ul">
                <li class="nav-list">
                  <a href="./" class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-list">
                  <Link class="nav-link" to="Mission">
                  Activity
                  </Link>
                </li>
                <li class="nav-list">
                  <Link class="nav-link" to="Wallet-Connect">
                    Wallet
                  </Link>
                </li>
                <li class="nav-list">
                  <Link class="nav-link" to="All-Author">
                    Author
                  </Link>
                </li>

                <li class="nav-list">
                  <Link class="nav-link" to="Blog">
                    Blog
                  </Link>
                </li>
                <li class="nav-list nav-pages">
                  {" "}
                  <a class="nav-link">
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
              <a href="./" class="custom-btn l-none mt-3">
                <span>Connect Wallet</span>
              </a>
            </div>
            <div class="wallet-btn m-none">
              <a href="./" class="custom-btn-alt">
                <span>
                  <i class="icofont-wallet"></i> Connect Wallet
                </span>
              </a>
            </div>
            <div class="show-nav">
              <i class="icofont-navigation-menu"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
