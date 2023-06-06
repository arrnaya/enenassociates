import React, { useEffect, useLayoutEffect, useState } from "react";

import { ImCross } from "react-icons/im";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import meta from "../Image/meta.png";
import walletconnect from "../Svg/walletconnect.svg";
import "animate.css";

import logo from "../Image/enenasso-bg.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="  navbar12  d-f a-i-c j-c-s-b p-y-1">
        <div className="container-kws">
          <ul className="l-s-t-n d-f a-i-c ">
            <li className="m-r-2 c-p c-w f-fam f-s-0_8 ">
              <BsFillTelephoneFill />
              +91 8197747334
            </li>
            <li className="f-fam c-w f-s-0_8">
              <MdEmail className="c-w f-s-1 m-r-0_5" />
              enenassociatesindia@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container-kws">
      <div className="d-f a-i-c j-c-s-b p-y-0_5">
        <div>
          <img src={logo} alt="" className="w-8" />
        </div>{" "}
        <div className=" c-p ">
          <ul className="l-s-t-n d-f a-i-c ">
           <NavLink to="/"> <li className="m-l-2 c-p f-fam c-w m-q-b-d-n">Home</li></NavLink>
            <NavLink to="/project"><li className="m-l-2 c-p c-w f-fam  m-q-b-d-n">Projects</li></NavLink>
            <NavLink to="/contact"><li className="m-l-2 c-p c-w f-fam m-q-b-d-n">Contact</li></NavLink>
            <NavLink to="/store"><li className="m-l-2 c-p c-w f-fam m-q-b-d-n">Store</li></NavLink>
            <li className="m-l-2 c-p   m-q-a-d-n ">
              {" "}
              <Button onClick={handleShow} className=" b-c-t c-i b-n pa-0">
                <AiOutlineMenu className="c-w" />
              </Button>
            </li>
          </ul>
        </div>
      </div></div>

      {/* ---------------mobile-navbar---------------------------------- */}

      <Offcanvas show={show} onHide={handleClose} className="pa-1">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <div className="image-dog1">
              <a href="/" target="_blank">
                <img src={logo} alt="" className="w-50" />
              </a>
            </div>
          </Offcanvas.Title>
          <ImCross onClick={handleClose} color="black" className="c-w"/>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="l-s-t-n">
            <NavLink to="/"><li className="m-r-1 m-t-1 c-p f-fam f-s-2 c-w home-select">Home</li></NavLink>
           <NavLink to="/project"> <li className="m-r-1 m-t-1 c-p f-fam c-w f-s-2 home-select">Projects</li></NavLink>
            <NavLink to="/contact"><li className="m-r-1 m-t-1 c-p f-fam c-w f-s-2 home-select">Contact</li></NavLink>
           <NavLink to="/store"><li className="m-r-1 m-t-1 c-p f-fam c-w f-s-2 home-select">Store</li></NavLink>
            
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={show2} onHide={handleClose2} className="">
        <div className="">
          <Modal.Header closeButton>
            <Modal.Title className="t-a-c m-a c-i">
              Please Connect Your Wallet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="walletconnect d-f a-i-c j-c-s-e m-y-2">
              <img src={meta} alt="" className="w-7" />
              <img src={walletconnect} alt="" className="w-5" />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
