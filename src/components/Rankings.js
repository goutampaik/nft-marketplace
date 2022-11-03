import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
function Rankings() {
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
      {/* <!--==================== Rankings Section Start ============== --> */}
      <section className="collection">
        <div className="container">
          <div className="collection-warrper">
            <div className="collection-head">
              <div className="collection-left">
                <div className="collection-left-item">
                  <a href="">
                    <div className="icons">
                      <img
                        src="../assets/images/icon/all-categories-icon.svg"
                        alt=""
                      />
                    </div>
                    <span>All Categories</span>
                  </a>
                </div>
                <div className="collection-left-item">
                  <a href="">
                    <div className="icons">
                      <img src="../assets/images/icon/chain.svg" alt="" />
                    </div>
                    <span>All Chains</span>
                  </a>
                </div>
              </div>
              <div className="collection-right">
                <select
                  className="form-select select-box"
                  aria-label="Default select example"
                >
                  <option selected>Last 7 days</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="collection-table">
              <div className="table-responsive">
                <table className="table">
                  <thead className="collection-table-head">
                    <tr>
                      <th scope="col">Collection</th>
                      <th scope="col">Volume</th>
                      <th scope="col">24h %</th>
                      <th scope="col">7d %</th>
                      <th scope="col">Floor Price</th>
                      <th scope="col">Owners</th>
                      <th scope="col">Items</th>
                    </tr>
                  </thead>
                  <tbody className="collection-table-body">
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>30,6453.01</span>
                        </div>
                      </td>
                      <td>-3.5K</td>
                      <td>10.0K</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="collection-item">
                          <span>1</span>
                          <div className="collection-item-img">
                            <img src="../assets/images/image.png" alt="" />
                            <div className="chack">
                              <img
                                src="../assets/images/icon/check.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <span>NFT Funny Cat</span>
                        </div>
                      </th>
                      <td>
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>10,6453.01</span>
                        </div>
                      </td>
                      <td>
                        <div className="red-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        <div className="green-vat">
                          <span> -35.75%</span>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="collection-price">
                          <div className="ethereum-logo">
                            <img
                              src="../assets/images/icon/Ethereum-icon.svg"
                              alt=""
                            />
                          </div>
                          <span>10,6453.01</span>
                        </div>
                      </td>
                      <td>1.5K</td>
                      <td>6.0K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==================== Rankings Section End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Rankings;
