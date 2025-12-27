import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, image, url }) => {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | E-Commerce` : "E-Commerce Store"}</title>
      <meta
        name="description"
        content={
          description ||
          "Welcome to our E-Commerce Store. Find the best products here."
        }
      />
      <meta
        name="keywords"
        content={keywords || "ecommerce, shop, buy, online store"}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:title" content={title || "E-Commerce Store"} />
      <meta
        property="og:description"
        content={description || "Welcome to our E-Commerce Store."}
      />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || window.location.href} />
      <meta property="twitter:title" content={title || "E-Commerce Store"} />
      <meta
        property="twitter:description"
        content={description || "Welcome to our E-Commerce Store."}
      />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
