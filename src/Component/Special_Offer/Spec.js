
import React from 'react'

export default function Spec() {
  return (
    <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="4000" data-pause="false">
    <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

        <div className="carousel-inner" id="homepage_cour">
            <div className="carousel-item active">
                <img className="home_img" src="Images\spec1.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="home_img" src="Images\spec2.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="home_img" src="Images\spec1.jpg" alt="Third slide"/>
            </div>

        </div>
        
        
     {/*    <div className="home_sec1">
               <button type="button" className="btn btn-light home_btn1">What we do</button>
  </div> */}
   </div>


</div>

  )
}
