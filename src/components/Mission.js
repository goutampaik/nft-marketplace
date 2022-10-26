import React from "react";

function Mission() {
  return (
    <>
      {/* <!-- ===========mission start================== --> */}
      <section>
        <div className="latest-product cpy-6">
          <div className="container">
            <div className="content-area cpt-5">
              <div className="latest-product-slider">
                <div className="swiper product-slider">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="product-card-inner mission-imgs">
                        <div className="product-image">
                          <img
                            src="assets/img/product/mission-img.png"
                            alt=""
                          />
                          <a href="" className="custom-btn">
                            <i className="icofont-telegram"></i>
                            <span>Place Bid</span>
                          </a>

                          <div
                            data-countdown="2023/01/01"
                            className="timer-area mission-time-area"
                          >
                            <div className="timer mission-timer">
                              <div className="day date-style"></div>
                              <p>Days</p>
                            </div>
                            :
                            <div className="timer mission-timer">
                              <div className="hour date-style"></div>
                              <p>Hour</p>
                            </div>
                            :
                            <div className="timer mission-timer">
                              <div className="min date-style"></div>
                              <p>Mint</p>
                            </div>
                            :
                            <div className="timer mission-timer">
                              <div className="sec date-style"></div>
                              <p>Seco</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mission-detalis">
                        <div className="mission-title">
                          <h2>Mission For Ghost Fighter</h2>
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut
                          </p>
                        </div>
                        <div className="mission-profile">
                          <div className="profile-left">
                            <img src="./assets/img/image-1.jpg" alt="" />
                          </div>
                          <div className="profile-right">
                            <p>Owner By</p>
                            <span>Duane M. Mendoza</span>
                            <div className="social-links">
                              <ul className="social-ul">
                                <li>
                                  <a href="" className="social-link ">
                                    <i className="icofont-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="social-link">
                                    <i className="icofont-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="social-link">
                                    <i className="icofont-instagram"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="social-link">
                                    <i className="icofont-youtube-play"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-price-details">
                          <div className="prices">
                            <p>Current Price 1.5 ETH</p>
                            <p>$500.89 </p>
                            <p>1 of 5</p>
                          </div>
                          <p>Size 14000 x 14000 px</p>
                          <p>Volume Traded 64.1 </p>
                        </div>
                        <div className="profile-list">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="profile-item">
                                <div className="profile-imgs">
                                  <img src="./assets/img/image-2.jpg" alt="" />
                                </div>
                                <div className="pro-des">
                                  <span>Keith J. Kelley</span>
                                  <p>Creators</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="profile-item">
                                <div className="profile-imgs">
                                  <img src="./assets/img/image-1.jpg" alt="" />
                                </div>
                                <div className="pro-des">
                                  <span>Keith J. Kelley</span>
                                  <p>Creators</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hight-bit">
                          <span>Highest Bid</span>
                          <div className="hight-dis">
                            <p>93 BNB</p>
                            <p>1 of 9</p>
                          </div>
                        </div>
                        <div className="place-bid cpys-2">
                          <button
                            className="custom-btn-alt place-bids "
                            type="submit"
                          >
                            <div className="create-btn-icon">
                              <img
                                src="./assets/img/icon/create-icon.svg"
                                alt=""
                              />
                            </div>
                            Place-Bid
                          </button>
                        </div>

                        <div className="product-details-btn">
                          <button className="custom-btn  product-details-btns">
                            Bids
                          </button>
                          <button className="custom-btn">History</button>
                          <button className="custom-btn">Details</button>
                        </div>
                      </div>
                      <div className="product-bids-des">
                        <div className="bids-des">
                          <div className="bids-img">
                            <img src="./assets/img/action/3.png" alt="" />
                          </div>
                          <div className="bids-pra">
                            <p>
                              Bid listed for <span>25 ETH</span> 8 hours ago{" "}
                              <br />
                              by <span>@Johnson</span>
                            </p>
                          </div>
                        </div>
                        <div className="bids-des">
                          <div className="bids-img">
                            <img src="./assets/img/action/1.png" alt="" />
                          </div>
                          <div className="bids-pra">
                            <p>
                              Bid listed for <span>25 ETH</span> 8 hours ago{" "}
                              <br />
                              by <span>@Johnson</span>
                            </p>
                          </div>
                        </div>
                        <div className="bids-des">
                          <div className="bids-img">
                            <img src="./assets/img/action/2.png" alt="" />
                          </div>
                          <div className="bids-pra">
                            <p>
                              Bid listed for <span>25 ETH</span> 8 hours ago{" "}
                              <br />
                              by <span>@Johnson</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===========mission end================== --> */}
    </>
  );
}

export default Mission;
