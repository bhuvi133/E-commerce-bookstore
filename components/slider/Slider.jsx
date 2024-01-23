import "./slider.css";
import firstbook from "../../images/x.png";
import secondbook from "../../images/f.jpg";
import thirdbook from "../../images/g.jpg";
import { useState } from "react";


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };


    return ( 
    <div className="slider-container">
{slideIndex !==0 &&
  <i onClick={()=> handleClick("left")} class="bi bi-chevron-double-left arrow-left"></i>
}

<div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className="slider-wrapper">
<div className="slide first-slide">
<div className="slide-img-wrapper">
<img src={firstbook} alt="" />
</div>
<div className="slide-info-wrapper">
<h1 className="slide-info-title">Shop at Bookly.</h1>
<p className="slide-info-desc">
Find Your Favorite Book and Get Hooked.
</p>
</div>
</div>
<div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={secondbook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books of all Genre</h1>
            <p className="slide-info-desc">
            Get all your Favourite Books at you Door step
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={thirdbook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Arraivals</h1>
            <p className="slide-info-desc">
            Where Every Book Has a Home.
            </p>
          </div>
        </div>
      </div>
      {slideIndex !==2 &&<i onClick={()=> handleClick("right")} class="bi bi-chevron-double-right arrow-right"></i>}
</div>

    );
}
 
export default Slider;