import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <>
      {/* <div className="blank-100"></div> */}
      <section>
        <div className="user-admin cpy-8">
          <div className="container-fluid p-0 m-0">
            <div className="user-admin-warrper">
              {/* Sidebar  */}
              <Sidebar />
              {/* Sidebar  */}

              <div className="user-content">
                {/* Topbar  */}
                <Topbar />
                {/* Topbar  */}
                <div className="user-tranding-auction">
                  <div className="user-tranding-title">
                    <div className="user-trading-left">
                      <h2>Tranding Auctions</h2>
                    </div>
                    <div className="user-trading-left">
                      <a href="">
                        <p>Auctions</p>
                      </a>
                      <span>+32</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="product-card user-product cpys-2">
                        <div className="product-card-inner">
                          <div className="product-image user-product-img">
                            <img src="assets/img/product/1.png" alt="" />
                            <a href="" className="custom-btn">
                              <i className="icofont-telegram"></i>
                              <span>Place Bid</span>
                            </a>

                            <div
                              data-countdown="2023/01/01"
                              className="timer-area user-time-area"
                            >
                              <div className="timer">
                                <div className="day date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="hour date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="min date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="sec date-style"></div>
                              </div>
                            </div>
                          </div>
                          <div className="product-details">
                            <div className="cp-type user-type">
                              <span>BSC</span>
                            </div>
                            <a href="" className="product-name">
                              "3D Space Rocket With Smoke Premium"
                            </a>
                            <div className="author-info">
                              <div className="author-image">
                                <img src="assets/img/user/1.png" alt="" />
                              </div>
                              <div className="author-name">
                                <a href="">
                                  <span>
                                    <span>NFT Constracter</span>
                                  </span>
                                </a>
                                <p className="author-title">Creator</p>
                              </div>
                            </div>
                            <div className="price-area">
                              <p>Current Bid</p>
                              <div className="price">
                                <h5>5.23 ETH</h5>
                                <p>= $32.420</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="product-card user-product cpys-2">
                        <div className="product-card-inner">
                          <div className="product-image user-product-img">
                            <img src="assets/img/product/1.png" alt="" />
                            <a href="" className="custom-btn">
                              <i className="icofont-telegram"></i>
                              <span>Place Bid</span>
                            </a>

                            <div
                              data-countdown="2023/01/01"
                              className="timer-area user-time-area"
                            >
                              <div className="timer">
                                <div className="day date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="hour date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="min date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="sec date-style"></div>
                              </div>
                            </div>
                          </div>
                          <div className="product-details">
                            <div className="cp-type user-type">
                              <span>BSC</span>
                            </div>
                            <a href="" className="product-name">
                              "3D Space Rocket With Smoke Premium"
                            </a>
                            <div className="author-info">
                              <div className="author-image">
                                <img src="assets/img/user/1.png" alt="" />
                              </div>
                              <div className="author-name">
                                <a href="">
                                  <span>
                                    <span>NFT Constracter</span>
                                  </span>
                                </a>
                                <p className="author-title">Creator</p>
                              </div>
                            </div>
                            <div className="price-area">
                              <p>Current Bid</p>
                              <div className="price">
                                <h5>5.23 ETH</h5>
                                <p>= $32.420</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="product-card user-product cpys-2">
                        <div className="product-card-inner">
                          <div className="product-image user-product-img">
                            <img src="assets/img/product/1.png" alt="" />
                            <a href="" className="custom-btn">
                              <i className="icofont-telegram"></i>
                              <span>Place Bid</span>
                            </a>

                            <div
                              data-countdown="2023/01/01"
                              className="timer-area user-time-area"
                            >
                              <div className="timer">
                                <div className="day date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="hour date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="min date-style"></div>
                              </div>
                              :
                              <div className="timer">
                                <div className="sec date-style"></div>
                              </div>
                            </div>
                          </div>
                          <div className="product-details">
                            <div className="cp-type user-type">
                              <span>BSC</span>
                            </div>
                            <a href="" className="product-name">
                              "3D Space Rocket With Smoke Premium"
                            </a>
                            <div className="author-info">
                              <div className="author-image">
                                <img src="assets/img/user/1.png" alt="" />
                              </div>
                              <div className="author-name">
                                <a href="">
                                  <span>
                                    <span>NFT Constracter</span>
                                  </span>
                                </a>
                                <p className="author-title">Creator</p>
                              </div>
                            </div>
                            <div className="price-area">
                              <p>Current Bid</p>
                              <div className="price">
                                <h5>5.23 ETH</h5>
                                <p>= $32.420</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-featured-creator">
                  <div className="user-featured-creator-title">
                    <div className="sec-title-left">
                      <h2>Featured Creators</h2>
                      <p>Most popular gaming digital nft market place </p>
                    </div>
                    <div className="sec-title-right">
                      <div className="filter-menu">
                        <a href="" className="">
                          <span>Explore More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="top-author-item user-admin-author-item">
                        <div className="tops-items">
                          <img
                            src="assets/img/action/1.png"
                            alt=""
                            className="author-img"
                          />
                        </div>
                        <div className="nft-name-price">
                          <a href="" className="author-name">
                            @Ndrea_uido
                          </a>
                          <p className="top-price">3,002.98 ETH</p>
                          <div className="star">
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                          </div>
                        </div>
                        <a href="" className="custom-btn-alt top-follow">
                          Follow
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="top-author-item user-admin-author-item">
                        <div className="tops-items">
                          <img
                            src="assets/img/action/2.png"
                            alt=""
                            className="author-img"
                          />
                        </div>
                        <div className="nft-name-price">
                          <a href="" className="author-name">
                            @Ndrea_uido
                          </a>
                          <p className="top-price">3,002.98 ETH</p>
                          <div className="star">
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                          </div>
                        </div>
                        <a href="" className="custom-btn-alt top-follow">
                          Follow
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="top-author-item user-admin-author-item">
                        <div className="tops-items">
                          <img
                            src="assets/img/action/4.png"
                            alt=""
                            className="author-img"
                          />
                        </div>
                        <div className="nft-name-price">
                          <a href="" className="author-name">
                            @Ndrea_uido
                          </a>
                          <p className="top-price">3,002.98 ETH</p>
                          <div className="star">
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                          </div>
                        </div>
                        <a href="" className="custom-btn-alt top-follow">
                          Follow
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="top-author-item user-admin-author-item">
                        <div className="tops-items">
                          <img
                            src="assets/img/action/2.png"
                            alt=""
                            className="author-img"
                          />
                        </div>
                        <div className="nft-name-price">
                          <a href="" className="author-name">
                            @Ndrea_uido
                          </a>
                          <p className="top-price">3,002.98 ETH</p>
                          <div className="star">
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                          </div>
                        </div>
                        <a href="" className="custom-btn-alt top-follow">
                          Follow
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="top-author-item user-admin-author-item">
                        <div className="tops-items">
                          <img
                            src="assets/img/action/4.png"
                            alt=""
                            className="author-img"
                          />
                        </div>
                        <div className="nft-name-price">
                          <a href="" className="author-name">
                            @Ndrea_uido
                          </a>
                          <p className="top-price">3,002.98 ETH</p>
                          <div className="star">
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                          </div>
                        </div>
                        <a href="" className="custom-btn-alt top-follow">
                          Follow
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="top-author-item user-admin-author-item">
                        <div className="tops-items">
                          <img
                            src="assets/img/action/3.png"
                            alt=""
                            className="author-img"
                          />
                        </div>
                        <div className="nft-name-price">
                          <a href="" className="author-name">
                            @Ndrea_uido
                          </a>
                          <p className="top-price">3,002.98 ETH</p>
                          <div className="star">
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                            <img src="./assets/img/icon/star.svg" alt="" />
                          </div>
                        </div>
                        <a href="" className="custom-btn-alt top-follow">
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
