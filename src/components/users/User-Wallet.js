import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
function UserWallet() {
  return (
    <>
      <section>
    <div className="user-admin cpy-8">
        <div className="container-fluid p-0 m-0">
          <div className="user-admin-warrper">
           <Sidebar />
            
                <div className="user-content">
                    <Topbar />
                    {/* <!-- ========= User Wallet ================= --> */}
                   <div className="recent-bids-table cpy-4">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Item List</th>
                           
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
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
                                <td>May 11, 2022</td>
                              
                                <td>10:37 PM</td>
                                <td>
                                    <div className="recent-action-btn">
                                        <div className="recent-action-btn-item">
                                            <button className="action-doted-btn">
                                               <img src="./assets/img/icon/dotted.svg" alt="" />
                                            </button>
                                        </div>
                                       
                                    </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                    <div className="recent-item-list">
                                        <div className="item-list-left">
                                            <img src="./assets/img/action/2.png" alt="" />
                                        </div>
                                        <div className="item-list-right">
                                            <h4>Sacral Metatron</h4>
                                            <p>Hannah Zeo</p>
                                        </div>
                                    </div>
                                </td>
                                <td>1.00 ETH</td>
                                <td>May 11, 2022</td>
                              
                                <td>10:37 PM</td>
                                <td>
                                    <div className="recent-action-btn">
                                        <div className="recent-action-btn-item">
                                            <button className="action-doted-btn">
                                               <img src="./assets/img/icon/dotted.svg" alt="" />
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
                                <td>May 11, 2022</td>
                              
                                <td>10:37 PM</td>
                                <td>
                                    <div className="recent-action-btn">
                                        <div className="recent-action-btn-item">
                                            <button className="action-doted-btn">
                                               <img src="./assets/img/icon/dotted.svg" alt="" />
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
                                <td>May 11, 2022</td>
                              
                                <td>10:37 PM</td>
                                <td>
                                    <div className="recent-action-btn">
                                        <div className="recent-action-btn-item">
                                            <button className="action-doted-btn">
                                               <img src="./assets/img/icon/dotted.svg" alt="" />
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
                    <div className="list-read-more">
                        <button className="custom-btn-alt">Read More</button>
                       </div>
                </div>
           
        </div>
        </div>
    </div>
 </section>
    </>
  );
}

export default UserWallet;
