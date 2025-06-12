'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Api({ data, searchParams }) {
  const router = useRouter();
  const params = useSearchParams();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});
  
  // Initialize selected filters from URL params
  useEffect(() => {
    const filters = {};
    for (const [key, value] of params.entries()) {
      if (key !== 'sort' && key !== 'page') {
        filters[key] = value.split(',');
      }
    }
    setSelectedFilters(filters);
  }, [params]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleFilterChange = (attributeSlug, valueSlug, isChecked) => {
    const newFilters = { ...selectedFilters };
    
    if (isChecked) {
      // Add filter
      if (newFilters[attributeSlug]) {
        if (!newFilters[attributeSlug].includes(valueSlug)) {
          newFilters[attributeSlug] = [...newFilters[attributeSlug], valueSlug];
        }
      } else {
        newFilters[attributeSlug] = [valueSlug];
      }
    } else {
      // Remove filter
      if (newFilters[attributeSlug]) {
        newFilters[attributeSlug] = newFilters[attributeSlug].filter(v => v !== valueSlug);
        if (newFilters[attributeSlug].length === 0) {
          delete newFilters[attributeSlug];
        }
      }
    }
    
    // Update URL with filter=1 always first
    const query = new URLSearchParams();
    if (Object.keys(newFilters).length > 0) {
      query.set('filter', '1');
    }
    
      Object.keys(newFilters).forEach(key => {
      query.set(key, newFilters[key].join(','));
    });
    
    // Preserve sort if exists
    if (searchParams.sort) {
      query.set('sort', searchParams.sort);
    }
    
    router.push(`?${query.toString()}`, { scroll: false });
  };

  const removeFilterTag = (attributeSlug, valueSlug) => {
    handleFilterChange(attributeSlug, valueSlug, false);
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    const query = new URLSearchParams(params.toString());
    
    if (sortValue) {
      query.set('sort', sortValue);
    } else {
      query.delete('sort');
    }
    
    router.push(`?${query.toString()}`, { scroll: false });
  };

  const category = data?.category?.title || 'Category';
  const attributes = data?.primary_attribute?.title || 'Attribute';
  const attributesValue = data?.primary_value?.name || 'Value';
  const filterAttrs = Array.isArray(data?.filter_attributes) ? data.filter_attributes : [];
  const products = Array.isArray(data?.products) ? data.products : [];
  const pagination = data?.pagination || {};
  console.log(category);
  // Get all selected filter values for display
  const activeFilters = [];
  Object.keys(selectedFilters).forEach(attrSlug => {
    const attribute = filterAttrs.find(attr => attr.slug === attrSlug);
    if (attribute) {
      selectedFilters[attrSlug].forEach(valueSlug => {
        const value = attribute.attributes_values.find(val => val.slug === valueSlug);
        if (value) {
          activeFilters.push({
            attributeSlug: attrSlug,
            attributeTitle: attribute.title,
            valueSlug: valueSlug,
            valueName: value.name
          });
        }
      });
    }
  });
  return (
    <>
      <div className="page-content">
        {/*Banner Start*/}
        <div
          className="dz-bnr-inr"
        >
          <div className="container">
            <div className="dz-bnr-inr-entry">
                  <h1>{category} - {attributesValue}</h1>
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
                      {filterAttrs.length > 0 && (
                        <div className="widget widget_categories">
                          <div className="accordion dz-accordion accordion-sm filter-accordian" id="categoryAccordion">
                            {filterAttrs.map((filter, index) => (
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
                                      {filter.attributes_values?.map((value, valueIndex) => {
                                        const isChecked = selectedFilters[filter.slug]?.includes(value.slug) || false;
                                        return (
                                          <li className="cat-item" key={valueIndex}>
                                            <div className="form-check">
                                              <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id={`filter_${index}_${valueIndex}`}
                                                checked={isChecked}
                                                onChange={(e) => handleFilterChange(filter.slug, value.slug, e.target.checked)}
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor={`filter_${index}_${valueIndex}`}
                                              >
                                                {value.name} ({value.product_attributes_values_count})
                                              </label>
                                            </div>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </aside>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-12">
                <div className="filter-wrapper">
                  <div className="filter-left-area">
                    <ul className="filter-tag">
                      {activeFilters.map((filter, index) => (
                        <li key={index}>
                          <button className="tag-btn">
                            {filter.valueName}
                            <i 
                              className="icon feather icon-x tag-close" 
                              onClick={() => removeFilterTag(filter.attributeSlug, filter.valueSlug)}
                            />
                          </button>
                        </li>
                      ))}
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
                      <select 
                        className="default-select" 
                        value={searchParams.sort || 'new-arrivals'}
                        onChange={handleSortChange}
                      >
                        <option value="new-arrivals">Latest</option>
                        <option value="price-low-to-high">Price: Low to High</option>
                        <option value="price-high-to-low">Price: High to Low</option>
                        <option value="a-to-z-order">A to Z Order</option>
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
                                        <Image width={400} height={400}
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
                          {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map(page => (
                            <li className="page-item" key={page}>
                              <Link 
                                href={`?${new URLSearchParams({
                                  ...selectedFilters,
                                  sort: searchParams.sort || 'new-arrivals',
                                  page: page.toString()
                                }).toString()}`}
                                className={`page-link ${pagination.current_page === page ? 'active' : ''}`}
                              >
                                {page}
                              </Link>
                            </li>
                          ))}
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
}