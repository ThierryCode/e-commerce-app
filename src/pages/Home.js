import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                className="img-fluid rounded-3" 
                src="images/main-banner-1.jpg" 
                alt="Main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img 
                  className="img-fluid rounded-3" 
                  src="images/catbanner-01.jpg" 
                  alt="Main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sales</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br/>or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                  className="img-fluid rounded-3" 
                  src="images/catbanner-02.jpg" 
                  alt="Main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>But Ipad Air</h5>
                    <p>From $999.00 <br/>or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                  className="img-fluid rounded-3" 
                  src="images/catbanner-03.jpg" 
                  alt="Main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br/>or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                  className="img-fluid rounded-3" 
                  src="images/catbanner-04.jpg" 
                  alt="Main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Free engraving</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br/>or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2"></section>
    </>
  )
}

export default Home