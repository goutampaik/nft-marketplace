import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
function Blog() {
  return (
    <>
      <div className="blank-100"></div>
      {/* <!--==================== Author ============== --> */}
      <section>
        <div className="container-fluid px-0">
          <div className="author-warrper">
            <div className="author-title">
              <h1>All Of Our Author</h1>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==================== Blog Section Start ============== --> */}
      <section>
        <div className="all-author-warrper">
          <div className="container">
            <div className="author-content">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="author-item-card">
                    <div className="author-img">
                      <img src="./assets/img/image-3.png" alt="" />
                    </div>
                    <div className="author-card-content">
                      <div className="senrew-text">
                        <p>Senrew A. Sisson</p>
                        <div className="dot"></div>
                        <span>25 JAN 2022</span>
                      </div>
                      <div className="author-card-title">
                        <span>
                          An Overview Of Most Common UX Design Deliverables
                        </span>
                      </div>
                      <div className="read-more">
                        <button className="custom-btn read-more-btn">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0713 1.07935L0.571289 9.4231C0.00878906 9.7356 0.0712891 10.5481 0.633789 10.7668L3.97754 12.1731L12.9463 4.26685C13.1025 4.1106 13.3525 4.32935 13.1963 4.51685L5.69629 13.6731V16.2043C5.69629 16.9543 6.57129 17.2356 7.00879 16.7043L9.00879 14.2668L12.8838 15.9231C13.3213 16.1106 13.8525 15.8293 13.915 15.3293L16.165 1.82935C16.29 1.20435 15.6025 0.766846 15.0713 1.07935Z"
                              fill="#DC39FC"
                            />
                          </svg>
                          <Link to='Blog-Details'>Read More</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="author-item-card">
                    <div className="author-img">
                      <img src="./assets/img/image-4.png" alt="" />
                    </div>
                    <div className="author-card-content">
                      <div className="senrew-text">
                        <p>Senrew A. Sisson</p>
                        <div className="dot"></div>
                        <span>25 JAN 2022</span>
                      </div>
                      <div className="author-card-title">
                        <span>
                          An Overview Of Most Common UX Design Deliverables
                        </span>
                      </div>
                      <div className="read-more">
                        <button className="custom-btn read-more-btn">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0713 1.07935L0.571289 9.4231C0.00878906 9.7356 0.0712891 10.5481 0.633789 10.7668L3.97754 12.1731L12.9463 4.26685C13.1025 4.1106 13.3525 4.32935 13.1963 4.51685L5.69629 13.6731V16.2043C5.69629 16.9543 6.57129 17.2356 7.00879 16.7043L9.00879 14.2668L12.8838 15.9231C13.3213 16.1106 13.8525 15.8293 13.915 15.3293L16.165 1.82935C16.29 1.20435 15.6025 0.766846 15.0713 1.07935Z"
                              fill="#DC39FC"
                            />
                          </svg>
                          <Link to='Blog-Details'>Read More</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="author-item-card">
                    <div className="author-img">
                      <img src="./assets/img/image-1.jpg" alt="" />
                    </div>
                    <div className="author-card-content">
                      <div className="senrew-text">
                        <p>Senrew A. Sisson</p>
                        <div className="dot"></div>
                        <span>25 JAN 2022</span>
                      </div>
                      <div className="author-card-title">
                        <span>
                          An Overview Of Most Common UX Design Deliverables
                        </span>
                      </div>
                      <div className="read-more">
                        <button className="custom-btn read-more-btn">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0713 1.07935L0.571289 9.4231C0.00878906 9.7356 0.0712891 10.5481 0.633789 10.7668L3.97754 12.1731L12.9463 4.26685C13.1025 4.1106 13.3525 4.32935 13.1963 4.51685L5.69629 13.6731V16.2043C5.69629 16.9543 6.57129 17.2356 7.00879 16.7043L9.00879 14.2668L12.8838 15.9231C13.3213 16.1106 13.8525 15.8293 13.915 15.3293L16.165 1.82935C16.29 1.20435 15.6025 0.766846 15.0713 1.07935Z"
                              fill="#DC39FC"
                            />
                          </svg>
                          <Link to='Blog-Details'>Read More</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="author-item-card">
                    <div className="author-img">
                      <img src="./assets/img/image-4.png" alt="" />
                    </div>
                    <div className="author-card-content">
                      <div className="senrew-text">
                        <p>Senrew A. Sisson</p>
                        <div className="dot"></div>
                        <span>25 JAN 2022</span>
                      </div>
                      <div className="author-card-title">
                        <span>
                          An Overview Of Most Common UX Design Deliverables
                        </span>
                      </div>
                      <div className="read-more">
                        <button className="custom-btn read-more-btn">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0713 1.07935L0.571289 9.4231C0.00878906 9.7356 0.0712891 10.5481 0.633789 10.7668L3.97754 12.1731L12.9463 4.26685C13.1025 4.1106 13.3525 4.32935 13.1963 4.51685L5.69629 13.6731V16.2043C5.69629 16.9543 6.57129 17.2356 7.00879 16.7043L9.00879 14.2668L12.8838 15.9231C13.3213 16.1106 13.8525 15.8293 13.915 15.3293L16.165 1.82935C16.29 1.20435 15.6025 0.766846 15.0713 1.07935Z"
                              fill="#DC39FC"
                            />
                          </svg>
                          <Link to='Blog-Details'>Read More</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="author-item-card">
                    <div className="author-img">
                      <img src="./assets/img/image-2.jpg" alt="" />
                    </div>
                    <div className="author-card-content">
                      <div className="senrew-text">
                        <p>Senrew A. Sisson</p>
                        <div className="dot"></div>
                        <span>25 JAN 2022</span>
                      </div>
                      <div className="author-card-title">
                        <span>
                          An Overview Of Most Common UX Design Deliverables
                        </span>
                      </div>
                      <div className="read-more">
                        <button className="custom-btn read-more-btn">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0713 1.07935L0.571289 9.4231C0.00878906 9.7356 0.0712891 10.5481 0.633789 10.7668L3.97754 12.1731L12.9463 4.26685C13.1025 4.1106 13.3525 4.32935 13.1963 4.51685L5.69629 13.6731V16.2043C5.69629 16.9543 6.57129 17.2356 7.00879 16.7043L9.00879 14.2668L12.8838 15.9231C13.3213 16.1106 13.8525 15.8293 13.915 15.3293L16.165 1.82935C16.29 1.20435 15.6025 0.766846 15.0713 1.07935Z"
                              fill="#DC39FC"
                            />
                          </svg>
                          <Link to='Blog-Details'>Read More</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="author-item-card">
                    <div className="author-img">
                      <img src="./assets/img/image-1.jpg" alt="" />
                    </div>
                    <div className="author-card-content">
                      <div className="senrew-text">
                        <p>Senrew A. Sisson</p>
                        <div className="dot"></div>
                        <span>25 JAN 2022</span>
                      </div>
                      <div className="author-card-title">
                        <span>
                          An Overview Of Most Common UX Design Deliverables
                        </span>
                      </div>
                      <div className="read-more">
                        <button className="custom-btn read-more-btn">
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0713 1.07935L0.571289 9.4231C0.00878906 9.7356 0.0712891 10.5481 0.633789 10.7668L3.97754 12.1731L12.9463 4.26685C13.1025 4.1106 13.3525 4.32935 13.1963 4.51685L5.69629 13.6731V16.2043C5.69629 16.9543 6.57129 17.2356 7.00879 16.7043L9.00879 14.2668L12.8838 15.9231C13.3213 16.1106 13.8525 15.8293 13.915 15.3293L16.165 1.82935C16.29 1.20435 15.6025 0.766846 15.0713 1.07935Z"
                              fill="#DC39FC"
                            />
                          </svg>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="author-slider-more">
                <div className="author-arrow-con">
                  <button className="athor-items">
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.22266 6.97217C0.800781 7.44092 0.800781 8.14404 1.22266 8.56592L7.59766 14.9409C8.06641 15.4097 8.76953 15.4097 9.19141 14.9409L10.2695 13.9097C10.6914 13.4409 10.6914 12.7378 10.2695 12.3159L5.72266 7.76904L10.2695 3.26904C10.6914 2.84717 10.6914 2.09717 10.2695 1.67529L9.19141 0.597168C8.76953 0.175293 8.06641 0.175293 7.59766 0.597168L1.22266 6.97217Z"
                        fill="#000"
                      />
                    </svg>
                  </button>
                  <button className="athor-items">01</button>
                  <button className="athor-items">02</button>
                  <button className="athor-items">03</button>
                  <button className="athor-items">0</button>
                  <button className="athor-items">
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3164 6.97217C10.7383 7.44092 10.7383 8.14404 10.3164 8.56592L3.94141 14.9409C3.47266 15.4097 2.76953 15.4097 2.34766 14.9409L1.26953 13.9097C0.847656 13.4409 0.847656 12.7378 1.26953 12.3159L5.81641 7.76904L1.26953 3.26904C0.847656 2.84717 0.847656 2.09717 1.26953 1.67529L2.34766 0.597168C2.76953 0.175293 3.47266 0.175293 3.94141 0.597168L10.3164 6.97217Z"
                        fill="#31394C"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==================== Blog Section End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Blog;
