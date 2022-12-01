import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import Faqs from "react-faq-component";

function Faq() {
  const data = {
    rows: [
      {
        title: "How do I create an NFT?",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "How can I stay safe and protect my NFTs ?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "What are the key terms to know in NFTs and Web3 ?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "How do I sell an NFT ?",
        content: "v1.0.5",
      },
      {
        title: "Smart Contract Upgrade: What You Need to Know",
        content: "v1.0.5",
      },
    ],
  };
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
      {/* <!--==================== FAQ Section Start ============== --> */}
      <section>
        <div className="container">
          <div className="faqs-con">
            <div className="faqs-title">
              <h1>Frequently Asked Questions</h1>
              <p>
                Join our community now to get free updates and also alot of
                freebies are waiting for you or <a href="">Contact Support</a>
              </p>
            </div>
            <Faqs data={data} />
          </div>
        </div>
      </section>

      {/* <!--==================== FAQ Section End  ============== --> */}

      {/* <!-- ====================subscribe area ================= --> */}
      <Subscribe />
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Faq;
