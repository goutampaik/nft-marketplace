import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
function Activity() {
  return (
    <>
      <div className="blank-100"></div>
      {/* <!--==================== Author ============== --> */}
      <section>
        <div className="container-fluid px-0">
          <div className="author-warrper">
            <div className="author-title">
              {/* <h1>All Of Our Author</h1> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--==================== Activity Section Start ============== --> */}
      <section className="collection-box-item">
        <div className="container">
          <div className="collection-box-item-warrper">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="collection-box-item-left">
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Cryptopunk</h3>
                        <p>sold for 1.0046 ETH</p>
                        <span>30 minutes 45 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/crypto.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>NFT Funny Cat</h3>
                        <p>listed by 051_Hart .08095 ETH</p>
                        <span>10 minutes 36 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/cat.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Prince Ape Planet</h3>
                        <p>bid cancelled by 0397fd</p>
                        <span>50 minutes 30 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/planet.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Origin Morish</h3>
                        <p>sold for 1.0046 ETH</p>
                        <span>30 minutes 45 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/morish.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Portrait Gallery#029</h3>
                        <p>sold for 1.0046 ETH</p>
                        <span>30 minutes 45 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/crypto.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Amazing NFt art</h3>
                        <p>sold for 1.0046 ETH</p>
                        <span>30 minutes 45 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/art.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Nightycat</h3>
                        <p>sold for 1.0046 ETH</p>
                        <span>30 minutes 45 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/love.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box-item">
                    <div className="box-item-left">
                      <div className="box-img">
                        <img src="../assets/images/image.png" alt="" />
                      </div>
                      <div className="box-content">
                        <h3>Fantasi#031</h3>
                        <p>sold for 1.0046 ETH</p>
                        <span>30 minutes 45 seconds ago</span>
                      </div>
                    </div>
                    <div className="box-item-right">
                      <div className="box-item-icon">
                        <img src="../assets/images/icon/love.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="collection-box-item-right">
                  <div className="activity-search-box">
                    <a href="">
                      <div className="search-icon">
                        <img src="../assets/images/icon/serach.svg" alt="" />
                      </div>
                    </a>
                    <input type="text" placeholder="Search" />
                  </div>
                  <p>Filter</p>
                  <div className="collection-filter-btn">
                    <div className="filter-btn-item">
                      <button className="filter-btn">
                        <div className="filter-btn-icon">
                          <svg
                            width="22"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.89985 0.100098L19.7988 1.5151L21.2128 11.4151L12.0208 20.6071C11.8333 20.7946 11.579 20.8999 11.3138 20.8999C11.0487 20.8999 10.7944 20.7946 10.6068 20.6071L0.706849 10.7071C0.519378 10.5196 0.414063 10.2653 0.414062 10.0001C0.414063 9.73493 0.519378 9.48063 0.706849 9.2931L9.89985 0.100098ZM10.6068 2.2221L2.82785 10.0001L11.3138 18.4851L19.0918 10.7071L18.0318 3.2821L10.6068 2.2221ZM12.7268 8.5861C12.3517 8.21082 12.141 7.70188 12.1411 7.17124C12.1411 6.9085 12.1929 6.64834 12.2935 6.40561C12.3941 6.16289 12.5415 5.94235 12.7273 5.7566C12.9132 5.57084 13.1338 5.42351 13.3765 5.323C13.6193 5.2225 13.8795 5.17079 14.1422 5.17084C14.6728 5.17093 15.1817 5.38182 15.5568 5.7571C15.932 6.13238 16.1427 6.64132 16.1426 7.17195C16.1425 7.70259 15.9316 8.21145 15.5563 8.5866C15.1811 8.96175 14.6721 9.17245 14.1415 9.17236C13.6109 9.17226 13.102 8.96138 12.7268 8.5861Z"
                              fill="#131740"
                            />
                          </svg>
                        </div>
                        <span>Listing</span>
                      </button>
                      <button className="filter-btn">
                        <div className="filter-btn-icon">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 20V22H0V20H12ZM12.586 0.686035L20.364 8.46404L18.95 9.88004L17.89 9.52604L15.413 12L21.07 17.657L19.656 19.071L14 13.414L11.596 15.818L11.879 16.95L10.464 18.364L2.686 10.586L4.101 9.17204L5.231 9.45404L11.525 3.16104L11.172 2.10104L12.586 0.686035ZM13.293 4.22204L6.222 11.292L9.757 14.828L16.828 7.75804L13.293 4.22204Z"
                              fill="#131740"
                            />
                          </svg>
                        </div>
                        <span>Bids</span>
                      </button>
                      <button className="filter-btn">
                        <div className="filter-btn-icon">
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.05 10.05L18 15L13.05 19.9501L11.636 18.536L14.172 15.999L1 16V14H14.172L11.636 11.464L13.05 10.05ZM4.95 0.0500488L6.364 1.46405L3.828 4.00005H17V6.00005H3.828L6.364 8.53605L4.95 9.95005L0 5.00005L4.95 0.0500488Z"
                              fill="#131740"
                            />
                          </svg>
                        </div>
                        <span>Transfer </span>
                      </button>
                    </div>
                    <div className="filter-btn-item">
                      <button className="filter-btn">
                        <div className="filter-btn-icon">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z"
                              fill="#131740"
                            />
                          </svg>
                        </div>
                        <span>Likes</span>
                      </button>
                      <button className="filter-btn">
                        <div className="filter-btn-icon">
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.5 0H14.5C14.6552 0 14.8084 0.036145 14.9472 0.105573C15.0861 0.175 15.2069 0.275804 15.3 0.4L18 4V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V4L2.7 0.4C2.79315 0.275804 2.91393 0.175 3.05279 0.105573C3.19164 0.036145 3.34475 0 3.5 0ZM16 6H2V18H16V6ZM15.5 4L14 2H4L2.5 4H15.5ZM6 8V10C6 10.7956 6.31607 11.5587 6.87868 12.1213C7.44129 12.6839 8.20435 13 9 13C9.79565 13 10.5587 12.6839 11.1213 12.1213C11.6839 11.5587 12 10.7956 12 10V8H14V10C14 11.3261 13.4732 12.5979 12.5355 13.5355C11.5979 14.4732 10.3261 15 9 15C7.67392 15 6.40215 14.4732 5.46447 13.5355C4.52678 12.5979 4 11.3261 4 10V8H6Z"
                              fill="#131740"
                            />
                          </svg>
                        </div>
                        <span>Purchases</span>
                      </button>
                      <button className="filter-btn">
                        <div className="filter-btn-icon">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 1H18V3H5V1ZM0 0.5H3V3.5H0V0.5ZM0 7.5H3V10.5H0V7.5ZM0 14.5H3V17.5H0V14.5ZM5 8H18V10H5V8ZM5 15H18V17H5V15Z"
                              fill="#131740"
                            />
                          </svg>
                        </div>
                        <span>Offer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==================== Activity Section End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Activity;
