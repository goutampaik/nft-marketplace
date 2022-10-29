import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
function Bids() {
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
                {/* <!-- ========= recent-bid ================= --> */}
                <div className="bids-card-item cpy-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="bid-card">
                        <div className="bid-color-round"></div>
                        <div className="bid-card-content">
                          <div className="bid-card-title">
                            <h3>35,874</h3>
                            <span>Artwork</span>
                          </div>
                          <div className="bids-dis-card">
                            <p>
                              <span>+139.00%</span> last 15 Days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="bid-card">
                        <div className="bid-color-round yellow-round"></div>
                        <div className="bid-card-content">
                          <div className="bid-card-title">
                            <h3>35,874</h3>
                            <span>Artwork</span>
                          </div>
                          <div className="bids-dis-card">
                            <p>
                              <span className="price-time">+139.00%</span> last
                              15 Days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="bid-card">
                        <div className="bid-color-round navi-bule-round"></div>
                        <div className="bid-card-content">
                          <div className="bid-card-title">
                            <h3>35,874</h3>
                            <span>Artwork</span>
                          </div>
                          <div className="bids-dis-card">
                            <p>
                              <span className="price-time">+139.00%</span> last
                              15 Days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="recent-bids-header">
                  <div className="recent-head-title">
                    <h2>Recent Bid</h2>
                  </div>
                  <div className="recent-bids-right">
                    <div className="recent-search">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search here"
                      />
                      <button>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.5703 16.683L14.3164 12.4291C14.2109 12.3587 14.1055 12.2884 14 12.2884H13.543C14.6328 11.0228 15.3359 9.33531 15.3359 7.50719C15.3359 3.49937 12.0312 0.194687 8.02344 0.194687C3.98047 0.194687 0.710938 3.49937 0.710938 7.50719C0.710938 11.5502 3.98047 14.8197 8.02344 14.8197C9.85156 14.8197 11.5039 14.1517 12.8047 13.0619V13.5189C12.8047 13.6244 12.8398 13.7298 12.9102 13.8353L17.1641 18.0892C17.3398 18.265 17.6211 18.265 17.7617 18.0892L18.5703 17.2806C18.7461 17.14 18.7461 16.8587 18.5703 16.683ZM8.02344 13.1322C4.89453 13.1322 2.39844 10.6361 2.39844 7.50719C2.39844 4.41344 4.89453 1.88219 8.02344 1.88219C11.1172 1.88219 13.6484 4.41344 13.6484 7.50719C13.6484 10.6361 11.1172 13.1322 8.02344 13.1322Z"
                            fill="#DC39FC"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="recent-select-item">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="recent-bids-table cpy-4">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Item List</th>
                          <th scope="col">Price</th>
                          <th scope="col">Your Offer</th>
                          <th scope="col">Recent Offer</th>
                          <th scope="col">Time Left</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="item-list-left">
                                <img src="./assets/img/action/3.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1.00 ETH</td>
                          <td>1.003 ETH</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>
                            <div className="recent-action-btn">
                              <div className="recent-action-btn-item">
                                <button className="action-edit-btn">
                                  <img
                                    src="./assets/img/icon/edit.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="recent-action-btn-item">
                                <button className="action-delete-btn">
                                  <img
                                    src="./assets/img/icon/delete.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="item-list-left">
                                <img src="./assets/img/action/1.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1.00 ETH</td>
                          <td>1.003 ETH</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>
                            <div className="recent-action-btn">
                              <div className="recent-action-btn-item">
                                <button className="action-edit-btn">
                                  <img
                                    src="./assets/img/icon/edit.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="recent-action-btn-item">
                                <button className="action-delete-btn">
                                  <img
                                    src="./assets/img/icon/delete.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="item-list-left">
                                <img src="./assets/img/action/4.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1.00 ETH</td>
                          <td>1.003 ETH</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>
                            <div className="recent-action-btn">
                              <div className="recent-action-btn-item">
                                <button className="action-edit-btn">
                                  <img
                                    src="./assets/img/icon/edit.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="recent-action-btn-item">
                                <button className="action-delete-btn">
                                  <img
                                    src="./assets/img/icon/delete.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="item-list-left">
                                <img src="./assets/img/action/3.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1.00 ETH</td>
                          <td>1.003 ETH</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>
                            <div className="recent-action-btn">
                              <div className="recent-action-btn-item">
                                <button className="action-edit-btn">
                                  <img
                                    src="./assets/img/icon/edit.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="recent-action-btn-item">
                                <button className="action-delete-btn">
                                  <img
                                    src="./assets/img/icon/delete.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="item-list-left">
                                <img src="./assets/img/action/1.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1.00 ETH</td>
                          <td>1.003 ETH</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>
                            <div className="recent-action-btn">
                              <div className="recent-action-btn-item">
                                <button className="action-edit-btn">
                                  <img
                                    src="./assets/img/icon/edit.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="recent-action-btn-item">
                                <button className="action-delete-btn">
                                  <img
                                    src="./assets/img/icon/delete.svg"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- ========= recent-bid end ================= --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bids;
