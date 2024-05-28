import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, descriptioin, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="description" />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Meta;
