import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";

const Layout = ({ title, subTitle, showBackButton, children }) => {
  return (
    <>
      {title && (
        <Header
          title={title}
          subTitle={subTitle}
          showBackButton={showBackButton}
        />
      )}
      <main className="main-container" data-testid="main-item-container">
        {children}
      </main>
      <footer data-testid="footer-item-container"></footer>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  showBackButton: PropTypes.bool,
  children: PropTypes.node,
};
Layout.defaultProps = {
  showBackButton: false,
};

export default Layout;
