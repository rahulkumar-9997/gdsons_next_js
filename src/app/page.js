import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "@/components/Banner/Banner";
export default function Home() {
  const products = [
    {
      id: 1,
      title: "Cozy Knit Cardigan Sweater",
      price: "80",
      image: "/assets/images/shop/product/1.png",
      categories: ["Tops"]
    },
    {
      id: 2,
      title: "Sophisticated Swagger Suit",
      price: "80",
      image: "/assets/images/shop/product/2.png",
      categories: ["Dresses", "Jacket"]
    },
    {
      id: 3,
      title: "Classic Denim Skinny Jeans",
      price: "80",
      image: "/assets/images/shop/product/3.png",
      categories: ["Dresses"]
    },
    {
      id: 4,
      title: "Athletic Mesh Sports Leggings",
      price: "80",
      image: "/assets/images/shop/product/4.png",
      categories: ["Tops", "Jacket"]
    },
    // Add more products as needed
  ];
  return (
    <>
      <Banner />
      {/* Primary Category */}
      <div className="content-inner category-section">
        <div className="container">
          <div className=" row justify-content-md-between align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head style-1 m-b30  wow fadeInUp">
                <div className="left-content text-center">
                  <h2 className="title">Highlighted Products</h2>
                </div>
              </div>
            </div>

          </div>
          <div className="row gx-xl-4 g-3">
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="category-product left product-1">
                <a href="shop-with-category.html">
                  <img src="/assets/images/category/pic1.jpg" alt="" />
                  <div className="category-badge">Jacket</div>
                </a>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="category-product left product-2">
                <a href="shop-with-category.html">
                  <img src="/assets/images/category/pic2.jpg" alt="" />
                  <div className="category-badge">Jeans</div>
                </a>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-4 col-md-4 col-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="category-product left product-3">
                <a href="shop-with-category.html">
                  <img src="/assets/images/category/pic3.jpg" alt="" />
                  <div className="category-badge">Shirts</div>
                </a>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="category-product right product-4">
                <a href="shop-with-category.html">
                  <img src="/assets/images/category/pic4.jpg" alt="" />
                  <div className="category-badge">Shorts</div>
                </a>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-4 col-md-4 col-6 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="category-product right product-5">
                <a href="shop-with-category.html">
                  <img src="/assets/images/category/pic5.jpg" alt="" />
                  <div className="category-badge">t-shirt</div>
                </a>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-4 col-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="category-product right product-6">
                <a href="shop-with-category.html">
                  <img src="/assets/images/category/pic6.jpg" alt="" />
                  <div className="category-badge">Blazer</div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Primary Category */}
      {/* Products  Section Start*/}
      <section className="content-inner">
        <div className="container">
          <div className=" row justify-content-md-between align-items-start">
            <div className="col-lg-12 col-md-12">
              <div
                className="section-head style-1 m-b30  wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="left-content text-center">
                  <h2 className="title">Most popular products</h2>
                </div>
              </div>
            </div>

          </div>
          <div className="clearfix">
            <ul id="masonry" className="row g-xl-4 g-3">
              <li
                className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="shop-card">
                  <div className="dz-media">
                    <img src="/assets/images/shop/product/1.png" alt="image" />
                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block" />
                        <span className="d-md-block d-none">Quick View</span>
                      </a>
                      <div className="btn btn-primary meta-icon dz-wishicon">
                        <i className="icon feather icon-heart dz-heart" />
                        <i className="icon feather icon-heart-on dz-heart-fill" />
                      </div>
                      <div className="btn btn-primary meta-icon dz-carticon">
                        <i className="flaticon flaticon-basket" />
                        <i className="flaticon flaticon-basket-on dz-heart-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Cozy Knit Cardigan Sweater</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </li>
              <li
                className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Dresses Jacket wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="shop-card">
                  <div className="dz-media">
                    <img src="/assets/images/shop/product/2.png" alt="image" />
                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block" />
                        <span className="d-md-block d-none">Quick View</span>
                      </a>
                      <div className="btn btn-primary meta-icon dz-wishicon">
                        <i className="icon feather icon-heart dz-heart" />
                        <i className="icon feather icon-heart-on dz-heart-fill" />
                      </div>
                      <div className="btn btn-primary meta-icon dz-carticon">
                        <i className="flaticon flaticon-basket" />
                        <i className="flaticon flaticon-basket-on dz-heart-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Sophisticated Swagger Suit</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </li>
              <li
                className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Dresses wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <div className="shop-card">
                  <div className="dz-media">
                    <img src="/assets/images/shop/product/3.png" alt="image" />
                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block" />
                        <span className="d-md-block d-none">Quick View</span>
                      </a>
                      <div className="btn btn-primary meta-icon dz-wishicon">
                        <i className="icon feather icon-heart dz-heart" />
                        <i className="icon feather icon-heart-on dz-heart-fill" />
                      </div>
                      <div className="btn btn-primary meta-icon dz-carticon">
                        <i className="flaticon flaticon-basket" />
                        <i className="flaticon flaticon-basket-on dz-heart-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Classic Denim Skinny Jeans</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </li>
              <li
                className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops Jacket wow fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="shop-card">
                  <div className="dz-media">
                    <img src="/assets/images/shop/product/4.png" alt="image" />
                    <div className="shop-meta">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-secondary btn-md btn-rounded"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fa-solid fa-eye d-md-none d-block" />
                        <span className="d-md-block d-none">Quick View</span>
                      </a>
                      <div className="btn btn-primary meta-icon dz-wishicon">
                        <i className="icon feather icon-heart dz-heart" />
                        <i className="icon feather icon-heart-on dz-heart-fill" />
                      </div>
                      <div className="btn btn-primary meta-icon dz-carticon">
                        <i className="flaticon flaticon-basket" />
                        <i className="flaticon flaticon-basket-on dz-heart-fill" />
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Athletic Mesh Sports Leggings</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Products Section Start*/}
      <section className="video-section">
        <div
          className="video-wrapper bg-parallax"
          style={{ backgroundImage: 'url("/assets/images/background/bg2.jpg")' }}
        >
          <div className="container">
            <div className="d-flex justify-content-center">
              <a
                className="icon-button popup-youtube"
                href="https://www.youtube.com/watch?v=YwYoyQ1JdpQ"
              >
                <div className="text-row word-rotate-box border-white c-black">

                  <svg
                    className="badge__emoji"
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_671_345)">
                      <path
                        d="M34.6779 15.3843L11.0529 0.821429C9.34369 -0.230839 7.2772 -0.274589 5.52493 0.704398C3.77266 1.68323 2.72656 3.46612 2.72656 5.47323V34.4664C2.72656 37.5013 5.17188 39.9835 8.17735 39.9999C8.18556 39.9999 8.19376 40 8.20181 40C9.14103 39.9999 10.1198 39.7056 11.0339 39.1478C11.7693 38.6991 12.0017 37.7392 11.5531 37.0039C11.1044 36.2685 10.1444 36.0361 9.40923 36.4848C8.98165 36.7456 8.56407 36.8805 8.19415 36.8804C7.06016 36.8742 5.84602 35.9028 5.84602 34.4665V5.47331C5.84602 4.6123 6.29477 3.84769 7.04634 3.42776C7.79798 3.00784 8.68431 3.02659 9.41658 3.47745L33.0417 18.0404C33.7518 18.4776 34.1581 19.2065 34.1564 20.0405C34.1547 20.8743 33.7454 21.6016 33.0314 22.0373L15.9503 32.4958C15.2156 32.9456 14.9847 33.9059 15.4346 34.6405C15.8843 35.3752 16.8446 35.6061 17.5792 35.1563L34.6583 24.6991C36.2935 23.7015 37.2721 21.9624 37.276 20.0467C37.2799 18.1312 36.3083 16.3881 34.6779 15.3843Z"
                        fill="#FEEB9D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_671_345">
                        <rect width={40} height={40} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="dz-features-wrapper overflow-hidden">
          <ul className="dz-features text-wrapper">
            <li className="item">
              <h2 className="title">Jacket</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Jeans</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Shirts</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Shorts</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">t-shirt</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Blazer</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Jacket</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Jeans</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Shirts</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
            <li className="item">
              <h2 className="title">Shorts</h2>
            </li>
            <li className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={61}
                height={60}
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        </div>
      </section>
      {/* Trending Product */}
      {/* Trending Product */}
      <section className="content-inner">
        <div className="container">
          <div className="row justify-content-md-between align-items-start">
            <div className="col-lg-12 col-md-12">
              <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                <div className="left-content text-center">
                  <h2 className="title">Trending Products</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel for Trending Products */}
          <div id="trendingProductsCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Carousel Items - Group products into slides */}
              {[0, 4].map((startIndex) => (
                <div
                  key={startIndex}
                  className={`carousel-item ${startIndex === 0 ? 'active' : ''}`}
                >
                  <div className="row g-xl-4 g-3">
                    {products.slice(startIndex, startIndex + 4).map((product, index) => (
                      <div
                        key={product.id}
                        className="col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                        data-wow-delay={`${0.6 + (index * 0.2)}s`}
                      >
                        <div className="shop-card">
                          <div className="dz-media">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="img-fluid"
                            />
                            <div className="shop-meta">
                              <button
                                className="btn btn-secondary btn-md btn-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="fa-solid fa-eye d-md-none d-block" />
                                <span className="d-md-block d-none">Quick View</span>
                              </button>
                              <button className="btn btn-primary meta-icon dz-wishicon">
                                <i className="icon feather icon-heart dz-heart" />
                                <i className="icon feather icon-heart-on dz-heart-fill" />
                              </button>
                              <button className="btn btn-primary meta-icon dz-carticon">
                                <i className="flaticon flaticon-basket" />
                                <i className="flaticon flaticon-basket-on dz-heart-fill" />
                              </button>
                            </div>
                          </div>
                          <div className="dz-content">
                            <h5 className="title">
                              <a href="shop-list.html">{product.title}</a>
                            </h5>
                            <h5 className="price">${product.price}</h5>
                          </div>
                          <div className="product-tag">
                            <span className="badge">Get 20% Off</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#trendingProductsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#trendingProductsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Trending Product */}
    </>
  );
}
