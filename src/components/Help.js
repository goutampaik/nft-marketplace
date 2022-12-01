import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

function Help() {

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
      {/* <!--==================== Help Section Start ============== --> */}
      <section className="help">
    <div className="container">
        <div className="help-warrper">
            <div className="help-header">
                <div className="help-title">
                    <h2>How can we help you?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati
                        dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                </div>
                <div className="help-search">
                    <div className="search-input">
                        <input type="text" placeholder="Type your question here" />
                    </div>
                    <div className="help-search-btn">
                        <button><img src="../assets/img/cat/search.svg" alt="" /></button>
                    </div>
                </div>
                <div className="help-or">
                    <a href="">Or choose a categories to quickly find the help you need</a>
                </div>
            </div>
            <div className="help-content">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6 ">
                        <div className="help-card">
                            <div className="help-icon">
                                <img src="../assets/img/cat/star.png" alt="" />
                            </div>
                            <h4>Getting Started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="help-card">
                            <div className="help-icon">
                                <img src="../assets/img/cat/star.png" alt="" />
                            </div>
                            <h4>Getting Started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="help-card">
                            <div className="help-icon">
                                <img src="../assets/img/cat/star.png" alt="" />
                            </div>
                            <h4>Getting Started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="help-card">
                            <div className="help-icon">
                                <img src="../assets/img/cat/star.png" alt="" />
                            </div>
                            <h4>Getting Started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>
                 
                    <div className="col-lg-3 col-md-6">
                        <div className="help-card">
                            <div className="help-icon">
                                <img src="../assets/img/cat/star.png" alt="" />
                            </div>
                            <h4>Getting Started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="help-card">
                            <div className="help-icon">
                                <img src="../assets/img/cat/star.png" alt="" />
                            </div>
                            <h4>Getting Started</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* <!--==================== Help Section End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Help;
