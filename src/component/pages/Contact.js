import React from "react";
import contactimg from "../Image/image1.jpeg";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <section className="section-white">
        <div className="container-kws">
          <div className="row p-t-5 p-b-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              {" "}
              <div className="p-b-2">
                <h1 className="c-b f-fam f-s-3">Contact Us</h1>
              </div>
              <div className="d-f">
                <MdEmail className="f-s-3_5  email-icon" />
                <div className="d-g m-l-2">
                  <span className="c-b f-fam f-s-1_5">EMAIL US</span>
                  <div className="c-g f-fam f-s-1_3">enenassociatesindia@gmail.com</div>
                </div>
              </div>
              <div className="row p-t-3">
                <div className="d-f">
                  <div>
                    <IoIosCall className="f-s-3_5 email-icon" />
                  </div>

                  <div className="d-g m-l-2">
                    <div className="c-b f-fam f-s-1_5">CALL US</div>
                    <div className="c-g f-fam f-s-1_3">
                      Y. V. NARAYANA REDDY
                      <br />
                      +91 98480 10197
                    </div>
                    <div className="c-g p-t-1 f-fam f-s-1_3">
                      P. V. NARENDRA BABU
                      <br />
                      +91 81977 47334
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contactimg">
                <img src={contactimg} alt="" className="contact-img"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
