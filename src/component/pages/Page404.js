import React from "react";
import image404 from "../Image/image404.jpg";
import { Link } from "react-router-dom";
import "../scss/_page404.scss"; // (Optional: Create this for scoped styles)

function Page404() {
  return (
    <div className="page404-container">
      <img
        src={image404}
        alt="404 - Page Not Found"
        className="page404-image"
      />
      <div className="page404-content">
        <h1>Oops! Page Not Found</h1>
        <p>Looks like you’re trying to visit a page that doesn’t exist.</p>
        <Link to="/" className="page404-button">
          Go Back to Home Page
        </Link>
      </div>
    </div>
  );
}

export default Page404;
