import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerMain">

        <div className="footerBrand">

          <h2>
            <span>SHOP</span>HUB
          </h2>

          <p>
            Your destination for modern fashion,
            lifestyle and everyday essentials.
          </p>

          <div className="socials">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>

        </div>


        <div className="footerColumn">

          <h3>Shop</h3>

          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Children</a>
          <a href="#">Beauty</a>

        </div>


        <div className="footerColumn">

          <h3>Help</h3>

          <a href="#">Contact Us</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>

        </div>


        <div className="footerColumn">

          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>

        </div>

      </div>


      <div className="footerBottom">

        <p>
          © 2026 ShopHub. All rights reserved.
        </p>

        <p>
          Secure payments • Fast delivery • Easy returns
        </p>

      </div>

    </footer>
  );
};

export default Footer;