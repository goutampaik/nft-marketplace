import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
function ListUsers() {
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
                {/* <!-- ========= List user ================= --> */}

                <div className="recent-bids-header cpt-5">
                  <div className="recent-head-title">
                    <h2>List Users</h2>
                  </div>
                  <div className="recent-bids-right">
                    <div className="list-user-item-btn">
                      <button>From</button>
                    </div>
                    <div className="list-user-item-btn">
                      <button>to</button>
                    </div>
                    <div className="recent-select-item">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>select Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="list-search-btn">
                      <button className="custom-btn-alt">Search</button>
                    </div>
                  </div>
                </div>
                <div className="recent-bids-table cpy-4">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Rank</th>
                          <th scope="col">Owner</th>
                          <th scope="col">NFTs Sold</th>
                          <th scope="col">Primary Sales</th>
                          <th scope="col">Secondary Sales</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="list-rank-count">
                                <span>X1</span>
                              </div>
                              <div className="item-list-left">
                                <img src="./assets/img/action/3.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1</td>
                          <td>1</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>17.00 ETH</td>
                        </tr>

                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="list-rank-count">
                                <span>X1</span>
                              </div>
                              <div className="item-list-left">
                                <img src="./assets/img/action/3.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1</td>
                          <td>1</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>17.00 ETH</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="list-rank-count">
                                <span>X1</span>
                              </div>
                              <div className="item-list-left">
                                <img src="./assets/img/action/3.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1</td>
                          <td>1</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>17.00 ETH</td>
                        </tr>

                        <tr>
                          <td>
                            <div className="recent-item-list">
                              <div className="list-rank-count">
                                <span>X1</span>
                              </div>
                              <div className="item-list-left">
                                <img src="./assets/img/action/3.png" alt="" />
                              </div>
                              <div className="item-list-right">
                                <h4>Sacral Metatron</h4>
                                <p>Hannah Zeo</p>
                              </div>
                            </div>
                          </td>
                          <td>1</td>
                          <td>1</td>
                          <td>1.003 ETH</td>
                          <td>0.03 ETH</td>
                          <td>17.00 ETH</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="list-read-more">
                  <button className="custom-btn-alt">Read More</button>
                </div>
                {/* <!-- ========= List user end ================= --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListUsers;
