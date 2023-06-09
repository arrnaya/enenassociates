import { Grid } from "@mui/material";
import React from "react";
import image1 from "../Image/project-image-1.jpeg";
import image2 from "../Image/project-image-2.jpeg"
import image3 from "../Image/project-image-3.jpeg"
import image4 from "../Image/image4.jpeg"
import image5 from "../Image/image5.jpeg";
import projectsectionimg from "../Image/image6.jpeg"
import projectimg5 from "../Image/image7.jpeg"
import projectimg6 from "../Image/image8.jpeg"


export default function Project() {
  return (
    <>
      <section className="project-img a-i-c ">
        <div className="container-kws ">
          <div className="content">
            {" "}
            <h1 className="project-fonts f-s-3_5 c-w ">Projects</h1>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="container-kws">
          <div className="p-t-2 p-b-2">
            <h4 className="f-fam c-b f-s-1_5">UNMATCHED QUALITY</h4>
            <p className="f-fam c-b m-t-1">
              Our single-minded belief lies in a very simple proposition – “the
              difference is in the detail” and this belief translates to action
              in a variety of ways. We have achieved the specific expertise of
              flawless completion of projects against extremely stringent
              timelines. To do this, we have assembled a team of accomplished
              professionals to realize the perfect environment as per your
              requirements and the architect’s designs. And we have always
              delivered more.
            </p>
          </div>
          <div  className="row p-t-2 p-b-2">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div >
                <img src={image1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="projec-img"><img src={image2} alt=""/></div></div>
          </div>
          <div  className="row p-t-2 p-b-2">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div >
                <img src={image3} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="projec-img"><img src={image4} alt=""/></div>
            <div className="m-t-3"><img src={image5} alt=""/></div>
            </div>
          </div>
        </div>
      </section>
      <section ><div><img src={projectsectionimg} alt="" className="w-100"/></div></section>
      <section className="section-white ">
      <div className="container-kws">
      <div className="row p-t-3 p-b-3">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12"><div><img src={projectimg5} alt=""/></div></div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12"><div className="projec-img"><img src={projectimg6} alt=""/></div></div>
      </div>
      </div></section>
    </>
  );
}
