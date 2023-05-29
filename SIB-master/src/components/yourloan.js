import React from "react";
import "../components/yourloanstyles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function YourLoan(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <button className="slick-prev">Previous</button>,
        nextArrow: <button className="slick-next">Next</button>
      };
    return(
        <div className="your-loan">
           <div className="your-loan-title">
                Your loans
           </div>
           <div className="your-loans">
                <Slider {...settings}>
                    <div className="loan-1">
                        <hhp2>Loan ID:1</hhp2>
                        <div class="circle-container">
                            <div class="circle-progress" data-progress="75">
                                 <span class="progress-text">$ 10,856 <br/> <pp4>Left to pay</pp4> </span>
                            </div>
                        </div>
                    </div>
                    <div className="loan-2">
                        <hhp2>Loan ID:2</hhp2>
                        <div class="circle-container">
                            <div class="circle-progress" data-progress="75">
                                 <span class="progress-text">$ 2,000 <br/> <pp4>Left to pay</pp4> </span>
                            </div>
                        </div>
                    </div>
                    <div className="loan-3">
                        <hhp2>Loan ID:3</hhp2>
                        Not approved yet
                    </div>
                </Slider>
           </div>
        </div>
    );
}
export default YourLoan;