import React from 'react';
import { Products } from '../data';

const categories = [
  {
    name: 'Women',
    icon: '👗',
    description: 'Fashion & Lifestyle'
  },
  {
    name: 'Men',
    icon: '👔',
    description: 'Modern Essentials'
  },
  {
    name: 'Children',
    icon: '🧸',
    description: 'Fun & Comfortable'
  },
  {
    name: 'Beauty',
    icon: '💄',
    description: 'Beauty & Care'
  }
];

const Collections = () => {
  return (
    <main>

      {/* ================= CATEGORIES ================= */}

      <section className="categoriesSection">

        <div className="sectionHeading">

          <div>
            <p>SHOP BY CATEGORY</p>
            <h2>Explore Collections</h2>
          </div>

          <button className="viewAll">
            View All →
          </button>

        </div>

        <div className="categoryGrid">

          {categories.map((category) => (

            <div
              className="categoryCard"
              key={category.name}
            >

              <div className="categoryIcon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <span>
                Explore →
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="productsSection">

        <div className="sectionHeading">

          <div>
            <p>OUR PRODUCTS</p>
            <h2>Trending Products</h2>
          </div>

          <button className="viewAll">
            View All →
          </button>

        </div>


        <div className="productGrid">

          {Products.map((product) => (

            <div
              className="productCard"
              key={product.id}
            >

              {/* PRODUCT IMAGE */}

              <div className="productImage">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <span className="discount">
                  {product.discount}
                </span>

                <button className="wishlist">
                  ♡
                </button>

              </div>


              {/* PRODUCT DETAILS */}

              <div className="productInfo">

                <p className="productCategory">
                  {product.category}
                </p>

                <h3>
                  {product.title}
                </h3>


                {/* RATING */}

                <div className="rating">
                  ★★★★★
                  <span>(24)</span>
                </div>


                {/* PRICE */}

                <div className="price">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <del>
                    ₹{product.oldPrice}
                  </del>

                </div>


                {/* ADD TO CART */}

                <button className="addCart">
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= OFFER ================= */}

      <section className="offerSection">

        <div>

          <p>LIMITED TIME OFFER</p>

          <h2>
            Get 30% OFF
            <br />
            Your First Order
          </h2>

          <p>
            Use coupon code:
            <strong> NEW30</strong>
          </p>

          <button className="primaryBtn">
            Shop Now
          </button>

        </div>

        <div className="offerNumber">
          30%
        </div>

      </section>

    </main>
  );
};

export default Collections;