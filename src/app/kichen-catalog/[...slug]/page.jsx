// "use client";
export default async function page({params}) {
    const { slug } = params;
    const pathSegments = slug.join('/');
    const apiUrl = `https://www.gdsons.co.in/api/catalog/${pathSegments}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (!data.success) {
            throw new Error('Failed to fetch data');
        }

        const { category, primary_attribute, primary_value, products } = data.data;
        // const {slug} = await params;
        // console.log(slug);  
        return (
            <>
                <div className="page-content">
                    {/*Banner Start*/}
                    <div
                        className="dz-bnr-inr"
                    >
                        <div className="container">
                            <div className="dz-bnr-inr-entry">
                                {/*     <h1>{category?.title} - {primaryVal}</h1> */}
                                {/* <nav aria-label="breadcrumb" className="breadcrumb-row">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html"> Home</a>
                                        </li>
                                        <li className="breadcrumb-item">Shop Sidebar</li>
                                    </ul>
                                </nav> */}
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
                                                {/* {filters.length > 0 && (
                                                    <div className="widget widget_categories">
                                                        <div className="accordion dz-accordion accordion-sm filter-accordian" id="categoryAccordion">
                                                            {filters.map((filter, index) => (
                                                                <div className="accordion-item" key={index}>
                                                                    <h2 className="accordion-header">
                                                                        <button
                                                                            className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'}`}
                                                                            type="button"
                                                                            onClick={() => toggleAccordion(index)}
                                                                        >
                                                                            {filter.title}
                                                                            <span className="toggle-close"></span>
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                                                    >
                                                                        <div className="accordion-body">
                                                                            <ul>
                                                                                {filter.values?.map((value, valueIndex) => (
                                                                                    <li className="cat-item" key={valueIndex}>
                                                                                        <div className="form-check">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="form-check-input"
                                                                                                id={`filter_${index}_${valueIndex}`}
                                                                                            />
                                                                                            <label
                                                                                                className="form-check-label"
                                                                                                htmlFor={`filter_${index}_${valueIndex}`}
                                                                                            >
                                                                                                {value.name}
                                                                                            </label>
                                                                                        </div>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )} */}
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
                                                    {products.map((product) => (
                                                        <div key={product.id} className="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-3 m-md-b15 m-sm-b0 m-b30">
                                                            <div className="shop-card style-1 product-box">
                                                                <div className="dz-media">
                                                                    <div className="product-header">
                                                                        <div className="product-image">
                                                                            <div className="product-img">
                                                                                {product.images?.length > 0 && (
                                                                                    <img 
                                                                                        src={`https://www.gdsons.co.in/public/images/product/thumb/${product.images[0].image_path}`} 
                                                                                        alt={product.title} 
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                                                                        <a href={`/product/${product.slug}`}>
                                                                            {product.title}
                                                                        </a>
                                                                    </h5>
                                                                    <h5 className="price">
                                                                        {product.offer_rate ? (
                                                                            <>
                                                                                <span className="text-primary">₹{product.offer_rate}</span>
                                                                                {product.mrp && (
                                                                                    <span className="text-decoration-line-through text-muted ms-2">₹{product.mrp}</span>
                                                                                )}
                                                                            </>
                                                                        ) : (
                                                                            product.mrp ? `₹${product.mrp}` : 'Price not available'
                                                                        )}
                                                                    </h5>
                                                                </div>
                                                                {product.offer_rate && product.mrp && (
                                                                    <div className="product-tag">
                                                                        <span className="badge">
                                                                            {Math.round(((product.mrp - product.offer_rate) / product.mrp) * 100)}% Off
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
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
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        return (
            <div className="page-content">
                <div className="container py-5 text-center">
                    <h2>Error loading products</h2>
                    <p>{error.message}</p>
                </div>
            </div>
        );
    }
}
