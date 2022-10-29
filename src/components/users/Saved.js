import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
function Saved() {
  return (
    <>
    <section>
    <div className="user-admin cpy-8">
        <div className="container-fluid p-0 m-0">
          <div className="user-admin-warrper">
           
              <Sidebar />
          
            
                <div className="user-content">
                  <Topbar />
                    {/* <!-- =========Saved Items Start================= --> */}
                    <div className="saved-item-title cpt-5">
                        <h2>Saved Items</h2>
                    </div>
                   <div className=" saved-item-header">
                  
                   
                        <div className="saved-item-all-btn">
                            <div className="saved-item-btn">
                                <button>From</button>
                            </div>
                            <div className="saved-item-btn">
                                <button>Art</button>
                            </div>
                            <div className="saved-item-btn">
                                <button>Game</button>
                            </div>
                            <div className="saved-item-btn">
                                <button>Fashion</button>
                            </div>
                            <div className="saved-item-btn">
                                <button>Music</button>
                            </div>
                        </div>
                  
                    <div className="recent-bids-right">
                        <div className="recent-search">
                            <input type="text" name="" id="" placeholder="Search here" />
                            <button>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5703 16.683L14.3164 12.4291C14.2109 12.3587 14.1055 12.2884 14 12.2884H13.543C14.6328 11.0228 15.3359 9.33531 15.3359 7.50719C15.3359 3.49937 12.0312 0.194687 8.02344 0.194687C3.98047 0.194687 0.710938 3.49937 0.710938 7.50719C0.710938 11.5502 3.98047 14.8197 8.02344 14.8197C9.85156 14.8197 11.5039 14.1517 12.8047 13.0619V13.5189C12.8047 13.6244 12.8398 13.7298 12.9102 13.8353L17.1641 18.0892C17.3398 18.265 17.6211 18.265 17.7617 18.0892L18.5703 17.2806C18.7461 17.14 18.7461 16.8587 18.5703 16.683ZM8.02344 13.1322C4.89453 13.1322 2.39844 10.6361 2.39844 7.50719C2.39844 4.41344 4.89453 1.88219 8.02344 1.88219C11.1172 1.88219 13.6484 4.41344 13.6484 7.50719C13.6484 10.6361 11.1172 13.1322 8.02344 13.1322Z" fill="#DC39FC"/>
                                    </svg>
                                    
                            </button>
                        </div>
                 
                    </div>
                   </div>
                  <div className="saved-item-card">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="product-card user-product mb-3">
                                <div className="product-card-inner">
                                    <div className="product-image user-product-img">
                                        <img src="assets/img/product/1.png" alt="" />
                                       

                                        <div className="saved-item-love">
                                            <img src="./assets/img/love.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className="cp-type user-type">
                                            <span>BSC</span>
                                        </div>
                                        <a href="" className="product-name">"3D Space Rocket With Smoke Premium"</a>
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
                           <div className="saved-item-price-area">
                            <div className="price-area">
                                <p>Current Bid</p>
                                <div className="price">
                                    <h5>5.23 ETH</h5>
                                    <p>= $32.420</p>
                                </div>
                            </div>
                            <div className="saved-place-bid">
                                <a href="" className="custom-btn">
                                    <i className="icofont-telegram"></i>
                                    <span>Place Bid</span>
                                </a>
                            </div>
                           </div>
                            </div>
                        </div>
                    </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="product-card user-product mb-3">
                                <div className="product-card-inner">
                                    <div className="product-image user-product-img">
                                        <img src="assets/img/product/1.png" alt="" />
                                       

                                        <div className="saved-item-love">
                                            <img src="./assets/img/love.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className="cp-type user-type">
                                            <span>BSC</span>
                                        </div>
                                        <a href="" className="product-name">"3D Space Rocket With Smoke Premium"</a>
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
                           <div className="saved-item-price-area">
                            <div className="price-area">
                                <p>Current Bid</p>
                                <div className="price">
                                    <h5>5.23 ETH</h5>
                                    <p>= $32.420</p>
                                </div>
                            </div>
                            <div className="saved-place-bid">
                                <a href="" className="custom-btn">
                                    <i className="icofont-telegram"></i>
                                    <span>Place Bid</span>
                                </a>
                            </div>
                           </div>
                            </div>
                        </div>
                    </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="product-card user-product mb-3">
                                <div className="product-card-inner">
                                    <div className="product-image user-product-img">
                                        <img src="assets/img/product/1.png" alt="" />
                                       

                                        <div className="saved-item-love">
                                            <img src="./assets/img/love.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className="cp-type user-type">
                                            <span>BSC</span>
                                        </div>
                                        <a href="" className="product-name">"3D Space Rocket With Smoke Premium"</a>
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
                           <div className="saved-item-price-area">
                            <div className="price-area">
                                <p>Current Bid</p>
                                <div className="price">
                                    <h5>5.23 ETH</h5>
                                    <p>= $32.420</p>
                                </div>
                            </div>
                            <div className="saved-place-bid">
                                <a href="" className="custom-btn">
                                    <i className="icofont-telegram"></i>
                                    <span>Place Bid</span>
                                </a>
                            </div>
                           </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                  </div>
                    {/* <!-- ========= saved item end ================= --> */}

                </div>
           
        </div>
        </div>
    </div>
 </section>
    </>
  );
}

export default Saved;
