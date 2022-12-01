import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import Faqs from "react-faq-component";

function Support() {

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
      {/* <!--==================== Support Section Start ============== --> */}
      <section className="contacts">
        <div className="container">
            <div className="contact-warrper">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-left">
                            <div className="contact-item-btn">
                                <button> 
                                    <div className="check-img">
                                        <img src="../assets/img/cat/check.png" alt="" />
                                    </div>
                                    <span>My Account</span>
                                </button>
                            </div>
                            <div className="contact-item-btn">
                                <button> 
                                    <div className="check-img">
                                        <img src="../assets/img/cat/check.png" alt="" />
                                    </div>
                                    <span>Waleet and transaction issues</span>
                                </button>
                            </div>
                            <div className="contact-item-btn">
                                <button> 
                                    <div className="check-img">
                                        <img src="../assets/img/cat/check.png" alt="" />
                                    </div>
                                    <span>Buying and selling NFTs</span>
                                </button>
                            </div>
                            <div className="contact-item-btn">
                                <button> 
                                    <div className="check-img">
                                        <img src="../assets/img/cat/check.png" alt="" />
                                    </div>
                                    <span>Developer Help</span>
                                </button>
                            </div>
                            <div className="contact-item-btn">
                                <button> 
                                    <div className="check-img">
                                        <img src="../assets/img/cat/check.png" alt="" />
                                    </div>
                                    <span>Report a Bug or Error Message</span>
                                </button>
                            </div>
                            <div className="contact-item-btn">
                                <button> 
                                    <div className="check-img">
                                        <img src="../assets/img/cat/check.png" alt="" />
                                    </div>
                                    <span>Report Fraudulent Activity</span>
                                </button>
                            </div>
                            <div className="contact-item-btn join-items">   
                                    <span>Join Our Community on <a href="" className="twitter">Twitter</a> Or <a href="" className="discord">Discord</a> </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-right">
                             <form action="">
                               <div className="contact-form">
                                <div className="contact-item">
                                    <label for="">Your email address</label>
                                    <div className=""><input type="text" /></div>
                                </div>
                                <div className="contact-item">
                                    <label for="">My Accunt has an issue </label>
                                    <div className=""><input type="text" /></div>
                                </div>
                                <div className="contact-item">
                                    <label for="">Subject</label>
                                    <div className=""><input type="text" /></div>
                                </div>
                                <div className="contact-item description-area">
                                    <label for="">Descrption</label>
                                    <div className="">
                                      <textarea name="" id="" cols="30" rows="8"></textarea>
                                    </div>
                                    <p className="description">In order to best help, please enter as many details as you can. This should include troubleshooting steps you've already taken, as well as screenshots of any error messages.</p>
                                </div>
                                <div className="contact-item">
                                    <label for="">Attachments (optional)</label>
                                    <div className="">
                                    <input type="file" />
                                    </div>
                                </div>
                                <div className="contact-item">
                                   <div className="submit-btn">
                                    <button  type="submit">Submit</button>
                                   </div>
                                </div>
                               </div>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* <!--==================== Support Section End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Support;
