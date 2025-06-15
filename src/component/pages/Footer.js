import { Grid } from "@mui/material";
import React from "react";
import Instagram from "../Image/instgram.png";

export default function Footer() {
  return (
    <>
      <section className="section-black">
        <div className="container-kws">
          <div  className="row m-t-6 m-b-6 footer-re">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer-build">
                <h1 className="f-fam c-w f-w-800">Let's Build Something</h1>
                <p className="f-fam f-c-l-w f-s-1_3 m-t-1 ">
                  Get in touch with us for your exciting idea!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12  col-12">
              <div className="footer-add">
                <h5 className="f-fam f-c-l-w t-a-c">enenassociatesindia@gmail.com</h5>
                <p className="f-fam f-c-l-w t-a-c">#504, Gattu’s Residency</p>
                <p className="f-fam f-c-l-w t-a-c">4th Road, Ayyappa Society</p>
                <p className="f-fam f-c-l-w t-a-c">Madhapur, Hyderabad, India</p>
                <p className="f-fam f-c-l-w t-a-c">+91 81977 47334</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="insta-follow">
              
                <h4 className="f-fam c-w t-a-c">Follow Us on Instagram</h4>
                <div>
                  {" "}
                  <a href="https://www.instagram.com/enenassociates/">
                  <img src={Instagram} alt="" className="d-b m-a m-t-1" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-dark-grey">
        <div className="container-kws">
          <Grid container className="p-t-2 association">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div>
                <h4 className="f-fam c-w">© ENEN Associates 2021-25 | All Rights Reserved</h4>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="f-r design-by">
                <h5 className="f-fam c-w">
                  Designed & Managed By
                 <a href="https://kesaviwebsolutions.com/" target="_blank"> <span className="f-fam c-bl "> Kesavi Web Solutions</span></a>
                </h5>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}
