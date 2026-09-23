import React from 'react';

const Header = () => {
  return (
    <>
      <div className="topBar">
        <p>Free shipping on orders above ₹999</p>
        <p>Contact us | Help</p>
      </div>

      <header className="headerSection">

        <div className="logo">
          <span>SHOP</span>HUB
        </div>

        <nav className="navMenu">
          <a href="#">Home</a>
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Children</a>
          <a href="#">Beauty</a>
        </nav>

        <div className="searchBox">
          <input
            type="text"
            placeholder="Search products..."
          />
          <button>🔍</button>
        </div>

        <div className="headerActions">
          <button>♡</button>
          <button>👤</button>
          <button>🛒</button>
        </div>

      </header>
    </>
  );
};

export default Header;