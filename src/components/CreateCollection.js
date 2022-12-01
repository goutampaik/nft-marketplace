import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import Faqs from "react-faq-component";

function CreateCollection() {

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
      {/* <!--==================== Create Collection Start ============== --> */}
      <section class="create-collection">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="create-collection-left">
                        <div class="collection-image-item">
                            <p>Logo Image</p>
                            <div class="collection-logo-img">
                                <img src="../assets/img/create-collection/logo-collection.png" alt="" />
                                <input type="file" />
                            </div>
                        </div>
                        <div class="collection-image-item">
                            <p>Cover Image</p>
                            <div class="cover-image">
                                <img src="../assets/img/create-collection/cover-collection.png" alt="" />
                                <input type="file" />
                            </div>
                        </div>
                        <div class="collection-image-item">
                            <p>Featured Image</p>
                            <div class="featured-img">
                                <img src="../assets/img/create-collection/Featured-collection.png" alt="" />
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">      
                    <div class="create-collection-right">
                        <form action="" class="collection-form">
                            <div class="collection-input-item">
                                <div class="collection-input">
                                    <div class="input-item">
                                        <label for="">Name</label>
                                        <input type="text" placeholder="Enter username" />
                                    </div>
                                    <div class="input-item">
                                        <label for="">URL</label>
                                        <input type="text" placeholder="Enter URL" />
                                    </div>
                                </div>
                            </div>
                            <div class="collection-input-item">
                                <label for="">Category</label>
                                <select class="form-select category-select" aria-label="Default select example">
                                    <option selected>Add Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                            </div>
                            <div class="collection-input-item">
                                <label for="">Description </label>
                                <textarea name="" id="" cols="30" rows="10" ></textarea>
                            </div>
                            <div class="collection-input-item">
                                <div class="collection-input">
                                    <div class="input-item">
                                        <label for="">Creator Earning</label>
                                        <input type="text" placeholder="Enter username" />
                                    </div>
                                    <div class="input-item">
                                        <label for="">Your payour wallet address</label>
                                        <input type="text" placeholder="Enter URL" />
                                    </div>
                                </div>
                            </div> 
                            <div class="collection-input-item">
                               <div class="explisitict-content">
                                    <div class="explisitict-box">
                                        <div class="round-box"></div>
                                    </div>
                                    <p>Explisitict and sensitive content</p>
                               </div>
                            </div> 
                            <div class="collection-input-item">
                               <button class="create-btn">Create </button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* <!--==================== Create Collection End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default CreateCollection;
