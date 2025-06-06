"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';


export default function page() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    const categories = [
        {
            title: "Clothing",
            items: [
                { name: "Top & Blouses", count: 5 },
                { name: "Jacket", count: 6 },
                { name: "Coat", count: 22 }
            ]
        },
        {
            title: "Footwear",
            items: [
                { name: "Boots", count: 17 }
            ]
        },
        {
            title: "Accessories",
            items: [
                { name: "Jewelry", count: 13 }
            ]
        },
        {
            title: "Beauty",
            items: [
                { name: "Makeup", count: 6 },
                { name: "Fragrances", count: 17 },
                { name: "Shaving & Grooming", count: 13 }
            ]
        }
    ];
    return (
        <>
            <div className="page-content">
                {/*Banner Start*/}
                <div
                    className="dz-bnr-inr bg-secondary overlay-black-light"
                >
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Shop Sidebar</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Shop Sidebar</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/*Banner End*/}
                <section className="content-inner-3 pt-3 z-index-unset">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-12">
                                <div className="sticky-xl-top">
                                    <a href="javascript:void(0);" className="panel-close-btn">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 51 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M37.748 12.5L12.748 37.5"
                                                stroke="white"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.748 12.5L37.748 37.5"
                                                stroke="white"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                    <div className="shop-filter mt-xl-2 mt-0">
                                        <aside>
                                            <div className="d-flex align-items-center justify-content-between m-b30">
                                                <h6 className="title mb-0 fw-normal d-flex">
                                                    <i className="flaticon-filter me-3" />
                                                    Filter
                                                </h6>
                                            </div>
                                            <div className="widget widget_categories">
                                                <div className="accordion dz-accordion accordion-sm filter-accordian" id="categoryAccordion">
                                                    {categories.map((category, index) => (
                                                        <div className="accordion-item" key={index}>
                                                            <h2 className="accordion-header">
                                                                <a
                                                                    className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'}`}
                                                                    type="button"
                                                                    onClick={() => toggleAccordion(index)}
                                                                >
                                                                    {category.title}
                                                                    <span className="toggle-close"></span>
                                                                </a>
                                                            </h2>
                                                            <div
                                                                className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                                            >
                                                                <div className="accordion-body">
                                                                    <ul>
                                                                        {category.items.map((item, itemIndex) => (
                                                                            <li className="cat-item" key={itemIndex}>
                                                                                <a href="blog-category.html">{item.name}</a> ({item.count})
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-12">
                                <div className="filter-wrapper">
                                    <div className="filter-left-area">
                                        <ul className="filter-tag">
                                            <li>
                                                <a href="javascript:void(0);" className="tag-btn">
                                                    Dresses
                                                    <i className="icon feather icon-x tag-close" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" className="tag-btn">
                                                    Tops
                                                    <i className="icon feather icon-x tag-close" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-right-area">
                                        <a href="javascript:void(0);" className="panel-btn">
                                            <svg
                                                className="me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 25 25"
                                                width={20}
                                                height={20}
                                            >
                                                <g id="Layer_28" data-name="Layer 28">
                                                    <path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z" />
                                                    <path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z" />
                                                    <path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z" />
                                                </g>
                                            </svg>
                                            Filter
                                        </a>
                                        <div className="form-group">
                                            <select className="default-select">
                                                <option>Latest</option>
                                                <option>Popularity</option>
                                                <option>Average rating</option>
                                                <option>Latest</option>
                                                <option>Low to high</option>
                                                <option>high to Low</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 tab-content shop-" >

                                        <div
                                            className="tab-pane fade show active"
                                            id="tab-list-grid"
                                            role="tabpanel"
                                            aria-labelledby="tab-list-grid-btn"
                                        >
                                            <div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
                                                <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
                                                    <div className="shop-card style-1">
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
                                                                    <span className="d-md-block d-none">
                                                                        Quick View
                                                                    </span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart" />
                                                                    <i className="icon feather icon-heart-on dz-heart-fill" />
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket" />
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h5 className="title">
                                                                <a href="shop-list.html">
                                                                    Cozy Knit Cardigan Sweater
                                                                </a>
                                                            </h5>
                                                            <h5 className="price">$80</h5>
                                                        </div>
                                                        <div className="product-tag">
                                                            <span className="badge ">Get 20% Off</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
                                                    <div className="shop-card style-1">
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
                                                                    <span className="d-md-block d-none">
                                                                        Quick View
                                                                    </span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart" />
                                                                    <i className="icon feather icon-heart-on dz-heart-fill" />
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket" />
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h5 className="title">
                                                                <a href="shop-list.html">
                                                                    Sophisticated Swagger Suit
                                                                </a>
                                                            </h5>
                                                            <h5 className="price">$80</h5>
                                                        </div>
                                                        <div className="product-tag">
                                                            <span className="badge ">Get 20% Off</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
                                                    <div className="shop-card style-1">
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
                                                                    <span className="d-md-block d-none">
                                                                        Quick View
                                                                    </span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart" />
                                                                    <i className="icon feather icon-heart-on dz-heart-fill" />
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket" />
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h5 className="title">
                                                                <a href="shop-list.html">
                                                                    Classic Denim Skinny Jeans
                                                                </a>
                                                            </h5>
                                                            <h5 className="price">$80</h5>
                                                        </div>
                                                        <div className="product-tag">
                                                            <span className="badge ">Get 20% Off</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row page mt-0">

                                    <div className="col-md-6">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination style-1">
                                                <li className="page-item">
                                                    <a className="page-link active" href="javascript:void(0);">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:void(0);">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="javascript:void(0);">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link next" href="javascript:void(0);">
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
