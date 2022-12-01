import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import Faqs from "react-faq-component";
import Countdown from 'react-countdown';

function Profile() {
  const countdownTime = 500000;
  const Completionist = () => <span>Time is Over</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span className="countdown-time">{days}:{hours}:{minutes}:{seconds}</span>;
    }
  };
  return (
    <>
      <div className="blank-100"></div>
      {/* <!-- =================== Profile section start======================= -->  */}
      <div className="cover-images">
      <img src="../assets/img/cat/cover-image.png" alt="" />
      </div>
    <section className="profile">
        <div className="container">
            <div className="profile-warrper">
                <div className="profile-header">
                    <div className="profile-image">
                        <img src="../assets/img/cat/cat-profile.png" alt="" />
                        <span><i className="icofont-check"></i></span>
                    </div>
                    <h4>NFT Funny Cat</h4>
                    <p>Created by  <a href="">051_Hart</a></p>
                    <div className="profile-box">
                      <div className="profile-boxss">
                        <div className="profile-box-item">
                            <h3>7.2</h3>
                            <p>Items</p>
                        </div>
                        <div className="profile-box-item">
                            <h3>5.3</h3>
                            <p>Owners</p>
                        </div>
                      </div>
                      <div className="profile-boxss">
                        <div className="profile-box-item">
                            <div className="profile-price">
                                <div className="ethi">
                                    <img src="../assets/img/cat/ethereum.png" alt="" />
                                </div>
                                <h3>2.55</h3>
                            </div>
                            <p>Floor Price</p>
                        </div>
                        <div className="profile-box-item">
                            <div className="profile-price">
                                <div className="ethi">
                                    <img src="../assets/img/cat/ethereum.png" alt="" />
                                </div>
                                <h3>17.2 K</h3>
                            </div>
                            <p>Volume Traded</p>
                        </div>
                      </div>
                    </div>
                    <p className="profile-dis" >Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.</p>
                    <div className="profile-item">
                        <div className="profile-coment">
                            <div className="profile-coment-img">
                                <img src="../assets/img/cat/love.svg" alt="" />
                            </div>
                        </div>
                        <div className="profile-coment">
                            <div className="profile-coment-img">
                                <img src="../assets/img/cat/share.svg" alt="" />
                            </div>
                        </div>
                        <div className="profile-coment">
                            <div className="profile-coment-img">
                                <img src="../assets/img/cat/dots.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- =================== Profile section  End====================== --> */}
    {/* <!-- ================= profile-card start======================== --> */}
    <section className="profile-card">
        <div className="container">
            <div className="profile-card-warrper">
                <div className="profile-card-header">
                    <div className="profile-card-btn">
                        <button className="profile-btns">
                            <div className="btn-icon">
                                <img src="../assets/img/cat/block.svg" alt="" />
                            </div>
                            <span>Blockchain</span>
                        </button>
                        <button className="profile-btns">
                            <div className="btn-icon">
                                <img src="../assets/img/cat/cate.svg" alt="" />
                            </div>
                            <span>Category</span>
                        </button>
                        <button className="profile-btns">
                            <div className="btn-icon">
                                <img src="../assets/img/cat/proper.svg" alt="" />
                            </div>
                            <span>Properties</span>
                        </button>
                        <button className="profile-btns">
                            <div className="btn-icon">
                                <img src="../assets/img/cat/sale.svg" alt="" />
                            </div>
                            <span>Sale type</span>
                        </button>
                        <button className="profile-btns">
                            <div className="btn-icon">
                                <img src="../assets/img/cat/price.svg" alt="" />
                            </div>
                            <span>Price range</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ================= profile-card end======================== --> */}
          {/* <!-- ==================Trending Now ===================== --> */}
          <section>
        <div className="trending-now">
          <div className="container">
            <div className="trending-product-inner cpy-5">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/1.png" alt="" />
                        <a href="" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/01" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/5.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="">
                              <span>NFT Constracter</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/5.png" alt="" />
                        <a href="" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/05" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/6.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="">
                              <span>NFT Constracter</span>
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/6.png" alt="" />
                        <a href="" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/07" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/7.png" alt="" />
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/4.png" alt="" />
                        <a href="" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/08" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="./" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/8.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="./">
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/7.png" alt="" />
                        <a href="./" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/09" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="./" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/9.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="./">
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/2.png" alt="" />
                        <a href="./" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/09" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="./" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/10.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="./">
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/3.png" alt="" />
                        <a href="./" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/11" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="./" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/2.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="./">
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
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-card-inner">
                      <div className="product-image">
                        <img src="assets/img/product/8.png" alt="" />
                        <a href="./" className="custom-btn">
                          <i className="icofont-telegram"></i>
                          <span>Place Bid</span>
                        </a>

                        <div data-countdown="2023/05/11" className="timer-area">
                        <Countdown date={Date.now() + countdownTime} renderer={renderer}/>
                        </div>
                      </div>
                      <div className="product-details">
                        <div className="cp-type">
                          <span>NTF</span>
                        </div>
                        <a href="./" className="product-name">
                          "3D Space Rocket With Smoke Premium"
                        </a>
                        <div className="author-info">
                          <div className="author-image">
                            <img src="assets/img/user/1.png" alt="" />
                          </div>
                          <div className="author-name">
                            <a href="./">
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
          </div>
        </div>
      </section>
      {/* <!-- ==================Trending Now end ===================== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Profile;
