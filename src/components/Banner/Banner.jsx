"use client";
import React, { useState } from 'react';
export default function Banner() {

    return (
        <>
            {/*Swiper Banner Start */}
            <div className="main-slider style-2">
                <div className="main-swiper2">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/assets/images/background/bg1.jpg" className="d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/background/bg2.jpg" className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="/assets/images/background/bg1.jpg" className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/*Swiper Banner End*/}
        </>

    )
}