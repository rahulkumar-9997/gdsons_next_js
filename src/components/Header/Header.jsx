"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
export default function Header() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const drawerRef = useRef(null);
    const categoryBtnRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target) &&
                categoryBtnRef.current && !categoryBtnRef.current.contains(event.target)) {
                setIsCategoryOpen(false);
                setActiveSubmenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleCategoryMenu = () => {
        setIsCategoryOpen(!isCategoryOpen);
        if (isCategoryOpen) {
            setActiveSubmenu(null);
        }
    };

    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };
    const closeAllMenus = () => {
        setIsCategoryOpen(false);
        setActiveSubmenu(null);
    };

    return (
        <header className="site-header mo-left header style-2">
            {/* Main Header */}
            <div className="header-info-bar">
                <div className="container clearfix">
                    {/* Website Logo */}
                    <div className="logo-header logo-dark">
                        <Link href="/">
                            <img src="/assets/images/logo.svg" alt="logo" />
                        </Link>
                    </div>
                    {/* EXTRA NAV */}
                    <div className="extra-nav d-md-flex d-none m-l15">
                        <div className="extra-cell">
                            <ul className="navbar-nav header-right m-0">
                                <li className="nav-item info-box ">
                                    <div className="nav-link">
                                        <div className="dz-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                style={{ enableBackground: "new 0 0 512 512" }}
                                                xmlSpace="preserve"
                                            >
                                                <path
                                                    style={{ fill: "#3cc" }}
                                                    d="M489.343 210.251c-4.827-105.317-92.01-189.513-198.498-189.513h-69.689c-106.488 0-193.67 84.197-198.498 189.513C9.495 214.747 0 227.228 0 241.894v78.61c0 18.436 15 33.436 33.437 33.436h60.996c6.075 0 11-4.925 11-11V219.458c0-6.075-4.925-11-11-11H44.789c5.699-92.338 82.618-165.72 176.366-165.72h69.689c93.749 0 170.667 73.381 176.366 165.72h-49.644c-6.075 0-11 4.925-11 11V342.94c0 6.075 4.925 11 11 11h60.996c18.436 0 33.436-15 33.436-33.436v-78.61c.002-14.666-9.493-27.147-22.655-31.643zM83.433 331.94H33.437c-6.306 0-11.437-5.13-11.437-11.436v-78.61c0-6.306 5.131-11.436 11.437-11.436h49.996V331.94zM490 320.504c0 6.306-5.131 11.436-11.436 11.436h-49.996V230.458h49.996c6.306 0 11.436 5.13 11.436 11.436v78.61z"
                                                />
                                                <path d="M256 491.262a11.001 11.001 0 0 1-8.402-3.9l-52.108-61.671h-74.566c-20.673 0-37.491-16.818-37.491-37.49V188.049c0-20.673 16.818-37.491 37.491-37.491h270.154c20.672 0 37.49 16.818 37.49 37.491V388.2c0 20.672-16.818 37.49-37.49 37.49h-74.566l-52.108 61.671a11.006 11.006 0 0 1-8.404 3.901zM120.923 172.558c-8.542 0-15.491 6.949-15.491 15.491V388.2c0 8.541 6.949 15.49 15.491 15.49h79.673c3.238 0 6.312 1.427 8.402 3.9L256 463.218l47.002-55.627a10.998 10.998 0 0 1 8.402-3.9h79.673c8.541 0 15.49-6.949 15.49-15.49V188.049c0-8.542-6.949-15.491-15.49-15.491H120.923z" />
                                                <path d="M193.81 259.09c-8.663.084-14.039-9.956-9.139-17.11 4.134-6.475 14.16-6.434 18.29 0 4.892 7.164-.483 17.196-9.151 17.11zM311.729 259.09c-7.629.166-13.258-8.219-10.16-15.21 3.614-8.972 16.705-8.978 20.31 0 3.113 6.979-2.526 15.376-10.15 15.21zM256 352.204c-25.31 0-50.619-10.009-73.192-30.028-4.545-4.03-4.962-10.982-.931-15.528 4.029-4.545 10.982-4.962 15.528-.931 36.689 32.536 80.501 32.538 117.19 0 4.547-4.031 11.497-3.614 15.528.931 4.031 4.546 3.614 11.498-.931 15.528-22.572 20.019-47.882 30.028-73.192 30.028z" />
                                            </svg>
                                        </div>
                                        <div className="info-content">
                                            <span>24/7 SUPPORT</span>
                                            <h6 className="title mb-0">+123 456 789</h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* header search nav */}
                    <div className="header-search-nav">
                        <form className="header-item-search">
                            <div className="input-group search-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Text input with dropdown button"
                                    placeholder="Search for products"
                                />
                                <button className="btn" type="button">
                                    <i className="iconly-Light-Search text-secondary" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Main Header End */}
            {/* Main Header */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix">
                    <div className="container clearfix d-lg-flex d-block">
                        {/* Website Logo */}
                        <div className="logo-header logo-dark">
                            <a href="index.html">
                                <img src="/assets/images/logo.svg" alt="logo" />
                            </a>
                        </div>
                        {/* Nav Toggle Button */}
                        <button
                            className="navbar-toggler collapsed navicon justify-content-end"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        {/* Main Nav */}
                        <div
                            className="header-nav w3menu navbar-collapse collapse justify-content-start"
                            id="navbarNavDropdown"
                        >
                            <div className="logo-header">
                                <a href="index.html">
                                    <img src="/assets/images/logo.svg" alt="" />
                                </a>
                            </div>
                            <div className="head-cate-menu browse-category-menu">
                                <a
                                    ref={categoryBtnRef}
                                    className="category-btn"
                                    onClick={toggleCategoryMenu}
                                    aria-expanded={isCategoryOpen}
                                >
                                    <div className="category-menu me-3">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <span className="category-btn-title">Browse Categories</span>
                                    <span className="toggle-arrow ms-auto">
                                        <i className={`icon feather ${isCategoryOpen ? 'icon-chevron-up' : 'icon-chevron-down'}`} />
                                    </span>
                                </a>

                                {/* Drawer Menu */}
                                <div ref={drawerRef} className={`category-drawer ${isCategoryOpen ? 'open' : ''}`}>
                                    <div className="drawer-header">
                                        <h3>Browse Categories</h3>
                                        <button
                                            className="drawer-close-btn"
                                            onClick={toggleCategoryMenu}
                                        >
                                            <i className="icon feather icon-x" />
                                        </button>
                                    </div>

                                    <div className="category-menu-items">
                                        <ul className="nav navbar-nav">
                                            {/* First Category with Mega Menu */}
                                            <li className={`has-mega-menu cate-drop ${activeSubmenu === 1 ? 'open' : ''}`}>
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleSubmenu(1);
                                                    }}
                                                >
                                                    <i className="icon feather icon-arrow-right" />
                                                    <span>Clothes</span>
                                                    <span className="menu-icon">
                                                        <i className={`icon feather ${activeSubmenu === 1 ? 'icon-chevron-down' : 'icon-chevron-right'}`} />
                                                    </span>
                                                </a>
                                                <div
                                                    className="mega-menu"
                                                    style={{ display: activeSubmenu === 1 ? 'block' : 'none' }}
                                                >
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-4 col-6">
                                                            <a href="#" className="menu-title">
                                                                Men's Clothing
                                                            </a>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/kichen-catalog/" onClick={closeAllMenus}>
                                                                        Shirts
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3 col-sm-4 col-6">
                                                            <a href="shop-standard.html" className="menu-title">
                                                                Women's Clothing
                                                            </a>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/kichen-catalog/" onClick={closeAllMenus}>
                                                                        Shirts
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            {/* Second Category with Mega Menu */}
                                            <li className={`has-mega-menu cate-drop ${activeSubmenu === 2 ? 'open' : ''}`}>
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleSubmenu(2);
                                                    }}
                                                >
                                                    <i className="icon feather icon-arrow-right" />
                                                    <span>Electronics</span>
                                                    <span className="menu-icon">
                                                        <i className={`icon feather ${activeSubmenu === 2 ? 'icon-chevron-down' : 'icon-chevron-right'}`} />
                                                    </span>
                                                </a>
                                                <div
                                                    className="mega-menu"
                                                    style={{ display: activeSubmenu === 2 ? 'block' : 'none' }}
                                                >
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-4 col-6">
                                                            <a href="#" className="menu-title">
                                                                Smart Home Products
                                                            </a>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/kichen-catalog/" onClick={closeAllMenus}>
                                                                        Shirts
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3 col-sm-4 col-6">
                                                            <a href="shop-standard.html" className="menu-title">
                                                                Computers
                                                            </a>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/kichen-catalog/" onClick={closeAllMenus}>
                                                                        Shirts
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav navbar-nav other-nav">
                                <li className="has-mega-menu sub-menu-down auto-width menu-left">
                                    <a href="javascript:void(0);">
                                        <span>Home</span>
                                        <i className="fas fa-chevron-down tabindex" />
                                    </a>
                                    <div className="mega-menu ">
                                        <ul className="demo-menu mb-0">
                                            <li>
                                                <a href="index.html">
                                                    <img src="/assets/images/demo/demo-1.png" alt="/" />
                                                    <span className="menu-title">01 Home Page</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">
                                                    <img src="/assets/images/demo/demo-2.png" alt="/" />
                                                    <span className="menu-title">02 Home Page</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index-3.html">
                                                    <img src="/assets/images/demo/demo-3.png" alt="/" />
                                                    <span className="menu-title">03 Home Page</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-mega-menu sub-menu-down">
                                    <a href="javascript:void(0);">
                                        <span>Shop</span>
                                        <i className="fas fa-chevron-down tabindex" />
                                    </a>
                                    <div className="mega-menu shop-menu">
                                        <ul>
                                            <li className="side-left">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" className="menu-title">
                                                            Shop Structure
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="shop-standard.html">Shop Standard</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-list.html">Shop List</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-with-category.html">
                                                                    Shop With Category
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-filters-top-bar.html">
                                                                    Shop Filters Top Bar
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-sidebar.html">Shop Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-style-1.html">Shop Style 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-style-2.html">Shop Style 2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" className="menu-title">
                                                            Product Structure
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="product-default.html">Default</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-thumbnail.html">Thumbnail</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-grid-media.html">Grid Media</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-carousel.html">Carousel</a>
                                                            </li>
                                                            <li>
                                                                <a href="product-full-width.html">Full Width</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0);" className="menu-title">
                                                            Shop Pages
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="shop-wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-cart.html">Cart</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-checkout.html">Checkout</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-compare.html">Compare</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-order-tracking.html">
                                                                    Order Tracking
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="login.html">Login</a>
                                                            </li>
                                                            <li>
                                                                <a href="registration.html">Registration</a>
                                                            </li>
                                                            <li>
                                                                <a href="forget-password.html">
                                                                    Forget Password{" "}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="month-deal">
                                                        <div className="clearfix me-3">
                                                            <h3>Deal of the month</h3>
                                                            <p className="mb-0">
                                                                Yes! Send me exclusive offers, personalised, and
                                                                unique gift ideas, tips for shopping on Pixio{" "}
                                                                <a
                                                                    href="shop-standard.html"
                                                                    className="dz-link-2"
                                                                >
                                                                    View All Products
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="sale-countdown">
                                                            <div className="countdown text-center">
                                                                <div className="date">
                                                                    <span className="time days text-primary" />
                                                                    <span className="work-time">Days</span>
                                                                </div>
                                                                <div className="date">
                                                                    <span className="time hours text-primary" />
                                                                    <span className="work-time">Hours</span>
                                                                </div>
                                                                <div className="date">
                                                                    <span className="time mins text-primary" />
                                                                    <span className="work-time">Minutess</span>
                                                                </div>
                                                                <div className="date">
                                                                    <span className="time secs text-primary" />
                                                                    <span className="work-time">Second</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="side-right">
                                                <div className="adv-media">
                                                    <img src="/assets/images/adv-1.png" alt="/" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-mega-menu sub-menu-down auto-width">
                                    <a href="javascript:void(0);">
                                        <span>Blog</span>
                                        <i className="fas fa-chevron-down tabindex" />
                                    </a>
                                    <div className="mega-menu">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Blog Dark Style
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-dark-2-column.html">Blog 2 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-dark-2-column-sidebar.html">
                                                            Blog 2 Column Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-dark-3-column.html">Blog 3 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-dark-half-image.html">
                                                            Blog Half Image
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Blog Light Style
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-light-2-column.html">Blog 2 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-light-2-column-sidebar.html">
                                                            Blog 2 Column Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-light-half-image.html">
                                                            Blog Half Image
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-exclusive.html">Blog Exclusive</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Blog List Sidebar
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-list-no-sidebar.html">
                                                            No Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-left-sidebar.html">
                                                            left Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-right-sidebar.html">
                                                            Right Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-both-sidebar.html">
                                                            Both Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Blog Grid Sidebar
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-grid-no-sidebar.html">
                                                            No Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-left-sidebar.html">
                                                            left Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-right-sidebar.html">
                                                            Right Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-both-sidebar.html">
                                                            Both Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-wide-sidebar.html">
                                                            Wide Sidebar{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Blog Page
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-archive.html">Blog Archive</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-author.html">Author</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-category.html">Blog Category</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-tag.html">Blog Tag</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="post-menu">
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Recent Posts
                                                </a>
                                                <div className="widget widget_post pt-2">
                                                    <ul>
                                                        <li>
                                                            <div className="dz-media">
                                                                <img
                                                                    src="/assets/images/shop/product/small/1.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="dz-content">
                                                                <h6 className="name">
                                                                    <a href="post-standard.html">
                                                                        Cozy Knit Cardigan Sweater
                                                                    </a>
                                                                </h6>
                                                                <span className="time">July 23, 2024</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dz-media">
                                                                <img
                                                                    src="/assets/images/shop/product/small/2.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="dz-content">
                                                                <h6 className="name">
                                                                    <a href="post-standard.html">
                                                                        Sophisticated Swagger Suit
                                                                    </a>
                                                                </h6>
                                                                <span className="time">July 23, 2024</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dz-media">
                                                                <img
                                                                    src="/assets/images/shop/product/small/3.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="dz-content">
                                                                <h6 className="name">
                                                                    <a href="post-standard.html">
                                                                        Athletic Mesh Sports Leggings
                                                                    </a>
                                                                </h6>
                                                                <span className="time">July 23, 2024</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dz-media">
                                                                <img
                                                                    src="/assets/images/shop/product/small/4.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="dz-content">
                                                                <h6 className="name">
                                                                    <a href="post-standard.html">
                                                                        Satin Wrap Party Blouse
                                                                    </a>
                                                                </h6>
                                                                <span className="time">July 23, 2024</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-mega-menu sub-menu-down auto-width">
                                    <a href="javascript:void(0);">
                                        <span>Post Layout</span>
                                        <i className="fas fa-chevron-down tabindex" />
                                    </a>
                                    <div className="mega-menu">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Post Types
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="post-text.html">
                                                            Text Post{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="post-image.html">
                                                            Image Post{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="post-video.html">Video Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-link.html">Link Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-audio.html">Audio Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-quote.html">Post Quote</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-tutorial.html">
                                                            Tutorial Post{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="post-cateloge.html">
                                                            Cateloge Post{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Multiple Media
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="post-banner.html">Banner</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-slide-show.html">Slider</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-gallery.html">Gallery</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-status.html">
                                                            Status Slider{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Post Layout Type
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="post-standard.html">Standard Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-corner.html">Corner Post</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-side.html">
                                                            Side Post{" "}
                                                            <div className="badge badge-sm rounded badge-animated">
                                                                New
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Side Bar
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="post-left-sidebar.html">Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-right-sidebar.html">Right Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-both-sidebar.html">Both Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="post-no-sidebar.html">No Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-mega-menu sub-menu-down">
                                    <a href="javascript:void(0);">
                                        <span>Portfolio</span>
                                        <i className="fas fa-chevron-down tabindex" />
                                    </a>
                                    <div className="mega-menu portfolio-menu">
                                        <ul>
                                            <li className="side-left">
                                                <ul className="portfolio-nav-link">
                                                    <li>
                                                        <a href="portfolio-tiles.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/portfolio-tiles.svg"
                                                                alt="/"
                                                            />
                                                            <span>Portfolio Tiles</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="collage-style-1.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/collage-style-1.svg"
                                                                alt="/"
                                                            />
                                                            <span>Collage Style 1</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="collage-style-2.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/collage-style-2.svg"
                                                                alt="/"
                                                            />
                                                            <span>Collage Style 2</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="masonry-grid.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/masonry-grid.svg"
                                                                alt="/"
                                                            />
                                                            <span>Masonry Grid</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cobble-style-1.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/cobble-style-1.svg"
                                                                alt="/"
                                                            />
                                                            <span>Cobble Style 1</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="cobble-style-2.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/cobble-style-2.svg"
                                                                alt="/"
                                                            />
                                                            <span>Cobble Style 2</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-thumbs-slider.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/portfolio-thumbs-slider.svg"
                                                                alt="/"
                                                            />
                                                            <span>Portfolio Thumbs Slider</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-film-strip.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/portfolio-film-strip.svg"
                                                                alt="/"
                                                            />
                                                            <span>Portfolio Film Strip</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="carousel-showcase.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/carousel-showcase.svg"
                                                                alt="/"
                                                            />
                                                            <span>Carousel Showcase</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-split-slider.html">
                                                            <img
                                                                src="/assets/images/portfolio/icons/portfolio-split-slider.svg"
                                                                alt="/"
                                                            />
                                                            <span>Portfolio Split Slider</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="side-right line-left">
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Portfolio Details
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="portfolio-details-1.html">
                                                            Portfolio Details 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-details-2.html">
                                                            Portfolio Details 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-details-3.html">
                                                            Portfolio Details 3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-details-4.html">
                                                            Portfolio Details 4
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="portfolio-details-5.html">
                                                            Portfolio Details 5
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="has-mega-menu sub-menu-down wide-width">
                                    <a href="javascript:void(0);">
                                        <span>Pages</span>
                                        <i className="fas fa-chevron-down tabindex" />
                                    </a>
                                    <div className="mega-menu">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Pages
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="about-us.html">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="about-me.html">About Me</a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing-table.html">Pricing Table</a>
                                                    </li>
                                                    <li>
                                                        <a href="our-gift-vouchers.html">Our Gift Vouchers</a>
                                                    </li>
                                                    <li>
                                                        <a href="what-we-do.html">What We Do</a>
                                                    </li>
                                                    <li>
                                                        <a href="faqs-1.html">Faqs 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="faqs-2.html">Faqs 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="our-team.html">Our Team</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Contact Us
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="contact-us-1.html">Contact Us 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-us-2.html">Contact Us 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="contact-us-3.html">Contact Us 3</a>
                                                    </li>
                                                </ul>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Web Pages
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="error-1.html">Error 404 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="error-2.html">Error 404 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">Coming Soon</a>
                                                    </li>
                                                    <li>
                                                        <a href="under-construction.html">
                                                            Under Construction
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Banner Style
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="banner-with-bg-color.html">
                                                            Banner with BG Color
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="banner-with-image.html">Banner with Image</a>
                                                    </li>
                                                    <li>
                                                        <a href="banner-with-video.html">Banner with Video</a>
                                                    </li>
                                                    <li>
                                                        <a href="banner-with-kanbern.html">
                                                            Banner with Kanbern
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="banner-small.html">Banner Small</a>
                                                    </li>
                                                    <li>
                                                        <a href="banner-medium.html">Banner Medium</a>
                                                    </li>
                                                    <li>
                                                        <a href="banner-large.html">Banner Large</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Header Style
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="header-style-1.html">Header Style 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-style-2.html">Header Style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-style-3.html">Header Style 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-style-4.html">Header Style 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-style-5.html">Header Style 5</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-style-6.html">Header Style 6</a>
                                                    </li>
                                                    <li>
                                                        <a href="header-style-7.html">Header Style 7</a>
                                                    </li>
                                                    <li className="w3menulink">
                                                        <a href="w3menu.html">Menu Styles</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Footer Style
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="footer-style-1.html">Footer Style 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="footer-style-2.html">Footer Style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="footer-style-3.html">Footer Style 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="footer-style-4.html">Footer Style 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="footer-style-5.html">Footer Style 5</a>
                                                    </li>
                                                    <li>
                                                        <a href="footer-style-6.html">Footer Style 6</a>
                                                    </li>
                                                    <li>
                                                        <a href="footer-style-7.html">Footer Style 7</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="menu-title">
                                                    Dashboard
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="account-dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="account-orders.html">Orders</a>
                                                    </li>
                                                    <li>
                                                        <a href="account-order-details.html">
                                                            Orders Details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="account-order-confirmation.html">
                                                            Orders Confirmation
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="account-downloads.html">Downloads</a>
                                                    </li>
                                                    <li>
                                                        <a href="account-return-request.html">
                                                            Return Request
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="account-return-request-detail.html">
                                                            Return Request Detail
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="account-refund-requests-confirmed.html">
                                                            Return Request Confirmed
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="dz-social-icon">
                                <ul>
                                    <li>
                                        <a
                                            className="fab fa-facebook-f"
                                            target="_blank"
                                            href="https://www.facebook.com/dexignzone"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            className="fab fa-twitter"
                                            target="_blank"
                                            href="https://twitter.com/dexignzones"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            className="fab fa-linkedin-in"
                                            target="_blank"
                                            href="https://www.linkedin.com/showcase/3686700/admin/"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            className="fab fa-instagram"
                                            target="_blank"
                                            href="https://www.instagram.com/dexignzone/"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* EXTRA NAV */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <ul className="header-right">
                                    <li className="nav-item login-link">
                                        <Link className="nav-link" href="/login">
                                            Login / Register
                                        </Link>
                                    </li>
                                    <li className="nav-item search-link">
                                        <a
                                            className="nav-link"
                                            href="javascript:void(0);"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasTop"
                                            aria-controls="offcanvasTop"
                                        >
                                            <i className="iconly-Light-Search" />
                                        </a>
                                    </li>
                                    <li className="nav-item wishlist-link">
                                        <a
                                            className="nav-link"
                                            href="javascript:void(0);"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight"
                                        >
                                            <i className="iconly-Light-Heart2" />
                                        </a>
                                    </li>
                                    <li className="nav-item cart-link">
                                        <a
                                            href="javascript:void(0);"
                                            className="nav-link cart-btn"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight"
                                        >
                                            <i className="iconly-Broken-Buy" />
                                            <span className="badge badge-circle">5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Header End */}
            {/* SearchBar */}
            <div
                className="dz-search-area dz-offcanvas offcanvas offcanvas-top"
                tabIndex={-1}
                id="offcanvasTop"
            >
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="container">
                    <form className="header-item-search">
                        <div className="input-group search-input">
                            <select className="default-select">
                                <option>All Categories</option>
                                <option>Clothes</option>
                                <option>UrbanSkirt</option>
                                <option>VelvetGown</option>
                                <option>LushShorts</option>
                                <option>Vintage</option>
                                <option>Wedding</option>
                                <option>Cotton</option>
                                <option>Linen</option>
                                <option>Navy</option>
                                <option>Urban</option>
                                <option>Business Meeting</option>
                                <option>Formal</option>
                            </select>
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Product"
                            />
                            <button className="btn" type="button">
                                <i className="iconly-Light-Search" />
                            </button>
                        </div>
                        <ul className="recent-tag">
                            <li className="pe-0">
                                <span>Quick Search :</span>
                            </li>
                            <li>
                                <a href="shop-list.html">Clothes</a>
                            </li>
                            <li>
                                <a href="shop-list.html">UrbanSkirt</a>
                            </li>
                            <li>
                                <a href="shop-list.html">VelvetGown</a>
                            </li>
                            <li>
                                <a href="shop-list.html">LushShorts</a>
                            </li>
                        </ul>
                    </form>
                    <div className="row">
                        <div className="col-xl-12">
                            <h5 className="mb-3">You May Also Like</h5>
                            <div className="swiper category-swiper2">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/1.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">SilkBliss Dress</a>
                                                </h6>
                                                <h6 className="price">$40.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/3.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">GlamPants</a>
                                                </h6>
                                                <h6 className="price">$30.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/4.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">ComfyLeggings</a>
                                                </h6>
                                                <h6 className="price">$35.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/2.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">ClassicCapri</a>
                                                </h6>
                                                <h6 className="price">$20.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/5.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">DapperCoat</a>
                                                </h6>
                                                <h6 className="price">$70.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/6.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">ComfyLeggings</a>
                                                </h6>
                                                <h6 className="price">$45.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/7.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">DenimDream Jeans</a>
                                                </h6>
                                                <h6 className="price">$40.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card">
                                            <div className="dz-media ">
                                                <img src="/assets/images/shop/product/4.png" alt="image" />
                                            </div>
                                            <div className="dz-content">
                                                <h6 className="title">
                                                    <a href="shop-list.html">SilkBliss Dress</a>
                                                </h6>
                                                <h6 className="price">$60.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SearchBar */}
            {/* Sidebar cart */}
            <div
                className="offcanvas dz-offcanvas offcanvas offcanvas-end "
                tabIndex={-1}
                id="offcanvasRight"
            >
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="offcanvas-body">
                    <div className="product-description">
                        <div className="dz-tabs">
                            <ul className="nav nav-tabs center" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="shopping-cart"
                                        data-bs-toggle="tab"
                                        data-bs-target="#shopping-cart-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="shopping-cart-pane"
                                        aria-selected="true"
                                    >
                                        Shopping Cart
                                        <span className="badge badge-light">5</span>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="wishlist"
                                        data-bs-toggle="tab"
                                        data-bs-target="#wishlist-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="wishlist-pane"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >
                                        Wishlist
                                        <span className="badge badge-light">2</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content pt-4" id="dz-shopcart-sidebar">
                                <div
                                    className="tab-pane fade show active"
                                    id="shopping-cart-pane"
                                    role="tabpanel"
                                    aria-labelledby="shopping-cart"
                                    tabIndex={0}
                                >
                                    <div className="shop-sidebar-cart">
                                        <ul className="sidebar-cart-list">
                                            <li>
                                                <div className="cart-widget">
                                                    <div className="dz-media me-3">
                                                        <img src="/assets/images/shop/shop-cart/pic1.jpg" alt="" />
                                                    </div>
                                                    <div className="cart-content">
                                                        <h6 className="title">
                                                            <a href="product-thumbnail.html">
                                                                Sophisticated Swagger Suit
                                                            </a>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <div className="btn-quantity light quantity-sm me-3">
                                                                <input
                                                                    type="text"
                                                                    defaultValue={1}
                                                                    name="demo_vertical2"
                                                                />
                                                            </div>
                                                            <h6 className="dz-price mb-0">$50.00</h6>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:void(0);" className="dz-close">
                                                        <i className="ti-close" />
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cart-widget">
                                                    <div className="dz-media me-3">
                                                        <img src="/assets/images/shop/shop-cart/pic2.jpg" alt="" />
                                                    </div>
                                                    <div className="cart-content">
                                                        <h6 className="title">
                                                            <a href="product-thumbnail.html">
                                                                Cozy Knit Cardigan Sweater
                                                            </a>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <div className="btn-quantity light quantity-sm me-3">
                                                                <input
                                                                    type="text"
                                                                    defaultValue={1}
                                                                    name="demo_vertical2"
                                                                />
                                                            </div>
                                                            <h6 className="dz-price mb-0">$40.00</h6>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:void(0);" className="dz-close">
                                                        <i className="ti-close" />
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cart-widget">
                                                    <div className="dz-media me-3">
                                                        <img src="/assets/images/shop/shop-cart/pic3.jpg" alt="" />
                                                    </div>
                                                    <div className="cart-content">
                                                        <h6 className="title">
                                                            <a href="product-thumbnail.html">
                                                                Athletic Mesh Sports Leggings
                                                            </a>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <div className="btn-quantity light quantity-sm me-3">
                                                                <input
                                                                    type="text"
                                                                    defaultValue={1}
                                                                    name="demo_vertical2"
                                                                />
                                                            </div>
                                                            <h6 className="dz-price  mb-0">$65.00</h6>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:void(0);" className="dz-close">
                                                        <i className="ti-close" />
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="cart-total">
                                            <h5 className="mb-0">Subtotal:</h5>
                                            <h5 className="mb-0">300.00$</h5>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="shipping-time">
                                                <div className="dz-icon">
                                                    <i className="flaticon flaticon-ship" />
                                                </div>
                                                <div className="shipping-content">
                                                    <h6 className="title pe-4">
                                                        Congratulations , you've got free shipping!
                                                    </h6>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar progress-animated border-0"
                                                            style={{ width: "75%" }}
                                                            role="progressbar"
                                                        >
                                                            <span className="sr-only">75% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a
                                                href="shop-checkout.html"
                                                className="btn btn-outline-secondary btn-block m-b20"
                                            >
                                                Checkout
                                            </a>
                                            <a
                                                href="shop-cart.html"
                                                className="btn btn-secondary btn-block"
                                            >
                                                View Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="wishlist-pane"
                                    role="tabpanel"
                                    aria-labelledby="wishlist"
                                    tabIndex={0}
                                >
                                    <div className="shop-sidebar-cart">
                                        <ul className="sidebar-cart-list">
                                            <li>
                                                <div className="cart-widget">
                                                    <div className="dz-media me-3">
                                                        <img src="/assets/images/shop/shop-cart/pic1.jpg" alt="" />
                                                    </div>
                                                    <div className="cart-content">
                                                        <h6 className="title">
                                                            <a href="product-thumbnail.html">
                                                                Sophisticated Swagger Suit
                                                            </a>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="dz-price  mb-0">$50.00</h6>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:void(0);" className="dz-close">
                                                        <i className="ti-close" />
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cart-widget">
                                                    <div className="dz-media me-3">
                                                        <img src="/assets/images/shop/shop-cart/pic2.jpg" alt="" />
                                                    </div>
                                                    <div className="cart-content">
                                                        <h6 className="title">
                                                            <a href="product-thumbnail.html">
                                                                Cozy Knit Cardigan Sweater
                                                            </a>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="dz-price  mb-0">$40.00</h6>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:void(0);" className="dz-close">
                                                        <i className="ti-close" />
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cart-widget">
                                                    <div className="dz-media me-3">
                                                        <img src="/assets/images/shop/shop-cart/pic3.jpg" alt="" />
                                                    </div>
                                                    <div className="cart-content">
                                                        <h6 className="title">
                                                            <a href="product-thumbnail.html">
                                                                Athletic Mesh Sports Leggings
                                                            </a>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <h6 className="dz-price  mb-0">$65.00</h6>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:void(0);" className="dz-close">
                                                        <i className="ti-close" />
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-auto">
                                            <a
                                                href="shop-wishlist.html"
                                                className="btn btn-secondary btn-block"
                                            >
                                                Check Your Favourite
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar cart */}
            {/* Sidebar finter */}
            <div
                className="offcanvas dz-offcanvas offcanvas offcanvas-end "
                tabIndex={-1}
                id="offcanvasLeft"
            >
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="offcanvas-body">
                    <div className="product-description">
                        <div className="widget widget_search">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        name="dzSearch"
                                        required="required"
                                        type="search"
                                        className="form-control"
                                        placeholder="Search Product"
                                    />
                                    <div className="input-group-addon">
                                        <button
                                            name="submit"
                                            value="Submit"
                                            type="submit"
                                            className="btn"
                                        >
                                            <i className="icon feather icon-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget">
                            <h6 className="widget-title">Price</h6>
                            <div className="price-slide range-slider">
                                <div className="price">
                                    <div className="range-slider style-1">
                                        <div id="slider-tooltips" className="mb-3" />
                                        <span className="example-val" id="slider-margin-value-min" />
                                        <span className="example-val" id="slider-margin-value-max" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget">
                            <h6 className="widget-title">Color</h6>
                            <div className="d-flex align-items-center flex-wrap color-filter ps-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel1"
                                        defaultValue="#000000"
                                        aria-label="..."
                                        defaultChecked=""
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel2"
                                        defaultValue="#9BD1FF"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel3"
                                        defaultValue="#21B290"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel4"
                                        defaultValue="#FEC4C4"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel5"
                                        defaultValue="#FF7354"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel6"
                                        defaultValue="#51EDC8"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel7"
                                        defaultValue="#B77CF3"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel8"
                                        defaultValue="#FF4A76"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabel9"
                                        defaultValue="#3E68FF"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="radioNoLabel"
                                        id="radioNoLabe20"
                                        defaultValue="#7BEF68"
                                        aria-label="..."
                                    />
                                    <span />
                                </div>
                            </div>
                        </div>
                        <div className="widget">
                            <h6 className="widget-title">Size</h6>
                            <div className="btn-group product-size">
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio11"
                                    defaultChecked=""
                                />
                                <label className="btn" htmlFor="btnradio11">
                                    4
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio21"
                                />
                                <label className="btn" htmlFor="btnradio21">
                                    6
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio31"
                                />
                                <label className="btn" htmlFor="btnradio31">
                                    8
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio41"
                                />
                                <label className="btn" htmlFor="btnradio41">
                                    10
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio51"
                                />
                                <label className="btn" htmlFor="btnradio51">
                                    12
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio61"
                                />
                                <label className="btn" htmlFor="btnradio61">
                                    14
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio71"
                                />
                                <label className="btn" htmlFor="btnradio71">
                                    16
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio81"
                                />
                                <label className="btn" htmlFor="btnradio81">
                                    18
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio1"
                                    id="btnradio91"
                                />
                                <label className="btn" htmlFor="btnradio91">
                                    20
                                </label>
                            </div>
                        </div>
                        <div className="widget widget_categories">
                            <h6 className="widget-title">Category</h6>
                            <ul>
                                <li className="cat-item cat-item-26">
                                    <a href="blog-category.html">Dresses</a> (10)
                                </li>
                                <li className="cat-item cat-item-36">
                                    <a href="blog-category.html">Top &amp; Blouses</a> (5)
                                </li>
                                <li className="cat-item cat-item-43">
                                    <a href="blog-category.html">Boots</a> (17)
                                </li>
                                <li className="cat-item cat-item-27">
                                    <a href="blog-category.html">Jewelry</a> (13)
                                </li>
                                <li className="cat-item cat-item-40">
                                    <a href="blog-category.html">Makeup</a> (06)
                                </li>
                                <li className="cat-item cat-item-40">
                                    <a href="blog-category.html">Fragrances</a> (17)
                                </li>
                                <li className="cat-item cat-item-40">
                                    <a href="blog-category.html">Shaving &amp; Grooming</a> (13)
                                </li>
                                <li className="cat-item cat-item-43">
                                    <a href="blog-category.html">Jacket</a> (06)
                                </li>
                                <li className="cat-item cat-item-36">
                                    <a href="blog-category.html">Coat</a> (22)
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget_tag_cloud">
                            <h6 className="widget-title">Tags</h6>
                            <div className="tagcloud">
                                <a href="blog-tag.html">Vintage </a>
                                <a href="blog-tag.html">Wedding</a>
                                <a href="blog-tag.html">Cotton</a>
                                <a href="blog-tag.html">Linen</a>
                                <a href="blog-tag.html">Navy</a>
                                <a href="blog-tag.html">Urban</a>
                                <a href="blog-tag.html">Business Meeting</a>
                                <a href="blog-tag.html">Formal</a>
                            </div>
                        </div>
                        <a
                            href="javascript:void(0);"
                            className="btn btn-sm font-14 btn-secondary btn-sharp"
                        >
                            RESET
                        </a>
                    </div>
                </div>
            </div>
            {/* filter sidebar */}
        </header>

    )
}