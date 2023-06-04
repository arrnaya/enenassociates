import { Grid } from "@mui/material";
import React from "react";
import Instagram from "../Image/instgram.png";

export default function Footer() {
  return (
    <>
      <section className="section-black">
        <div className="container-kws">
          <Grid container className="m-t-6 m-b-6">
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="footer-build">
                <h1 className="f-fam f-w-800">Let's Build Something</h1>
                <p className="f-fam f-s-1_3 m-t-1 ">
                  Get in touch with us for your exciting idea!
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div>
                <h5 className="f-fam t-a-c">enenassociatesindia@gmail.com</h5>
                <p className="f-fam t-a-c">#504, Gattu’s Residency</p>
                <p className="f-fam t-a-c">4th Road, Ayyappa Society</p>
                <p className="f-fam t-a-c">Madhapur, Hyderabad, India</p>
                <p className="f-fam t-a-c">+91 81977 47334</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="insta-follow">
                <h4 className="f-fam t-a-c">Follow Us on Instagram</h4>
                <div>
                  {" "}
                  <img src={Instagram} alt="" className="d-b m-a m-t-1" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="section-dark-grey">
        <div className="container-kws">
          <Grid container className="p-t-2 association">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div>
                <h4 className="f-fam">© ENEN Associates 2021</h4>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="f-r design-by">
                <h5 className="f-fam">
                  Designed & Managed By
                  <span className="f-fam c-bl"> Kesavi Web Solutions</span>
                </h5>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
}
