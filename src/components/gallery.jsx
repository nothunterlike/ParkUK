import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Parking Gallery</h2>
            <p class="galleryp">
              Explore available parking spaces, locations, and facilities you
              can book instantly through our platform.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {/* 1 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/01-large.jpg"
                      title="City Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>City Centre Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        alt="City Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/02-large.jpg"
                      title="Underground Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Underground Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Underground Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/03-large.jpg"
                      title="Secure Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Secure Parking Area</h4>
                      </div>
                      <img
                        src="img/portfolio/03-small.jpg"
                        className="img-responsive"
                        alt="Secure Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 4 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/04-large.jpg"
                      title="Street Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Street Parking Spots</h4>
                      </div>
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        alt="Street Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/05-large.jpg"
                      title="Airport Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Airport Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Airport Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 6 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/06-large.jpg"
                      title="EV Charging"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>EV Charging Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="EV Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 7 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/07-large.jpg"
                      title="Covered Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Covered Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Covered Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 8 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/08-large.jpg"
                      title="Residential Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Residential Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Residential Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* 9 */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="img/portfolio/09-large.jpg"
                      title="24/7 Parking"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>24/7 Access Parking</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="24/7 Parking"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
