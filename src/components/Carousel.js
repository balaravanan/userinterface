import React from 'react'
import "../components/Carousel.css"

function Carousel() {
    return (
        <div>
            <h3>Jai Carousel</h3>
<div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://www.w3schools.com/bootstrap4/la.jpg" alt="Los Angeles" width="1100" height="300"/>
  </div>
  <div class="carousel-item">
    <img src="https://www.w3schools.com/bootstrap4/chicago.jpg" alt="Chicago" width="1100" height="300"/>
  </div>
  <div class="carousel-item">
    <img src="https://www.w3schools.com/bootstrap4/ny.jpg" alt="New York" width="1100" height="300"/>
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
        </div>
    )
}

export default Carousel
