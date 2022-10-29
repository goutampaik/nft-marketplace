import React from "react";

function Subscribe() {
  return (
    <>
      {/* <!-- ====================subscribe area ================= --> */}
      <div class="subscribe-area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="ns-wrapper">
                <div class="row">
                  <div class="col-md-6  mb-4">
                    <div class="newsletter">
                      <h2>Newsletters</h2>
                      <p>Most popular gaming digital nft market place</p>
                    </div>
                  </div>
                  <div class="col-md-6  mb-4">
                    <div class="subscribe-form">
                      <form action="">
                        <div class="ns-input">
                          <input
                            type="text"
                            class="ns-input"
                            placeholder="Enter Email Address"
                          />
                          <button class="custom-btn">
                            <i class="icofont-telegram"></i>
                            <span>Browse More</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================subscribe area end ================= --> */}
    </>
  );
}

export default Subscribe;
