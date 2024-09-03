import React from 'react'
import './Gallery.css'
import assets from '../../assets/assets'

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="gal-back">
        <div className="caption">
          <h1>Gallery</h1>
        </div>
        <div className="content-gallery">

          <section class="slide-option">
            <div id="infinite" class="highway-slider">
              <div class="container highway-barrier">
                <ul class="highway-lane">
                  <li class="highway-car"><span><img src={assets.room1} alt="" /></span></li>
                  <li class="highway-car"><span><img src={assets.room2} alt="" /></span></li>
                  <li class="highway-car"><span><img src={assets.room3} alt="" /></span></li>
                  <li class="highway-car"><span><img src={assets.back} alt="" /></span></li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>

    </div>
  )
}

export default Gallery