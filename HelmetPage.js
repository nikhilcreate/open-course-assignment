import React from "react";
import { Helmet } from "react-helmet";


const HelmetPage = () => {
  return (
    <div>
      {/* React Helmet for dynamic meta tags */}
      <Helmet>
        <title>My Helmet Page</title>
        <meta name="description" content="This is a sample page using React Helmet." />
      </Helmet>

      <h1>Welcome to My Helmet Page</h1>
    </div>
  );
};

export default HelmetPage;
