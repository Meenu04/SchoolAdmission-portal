import React from 'react'
import "./gallery.css"
import { Link } from 'react-router-dom'
function Gallery() {
  return (
    <div>
    <div className="texter"><h1>Explore Our
ACADEMIC PROGRAMMES</h1></div>
        <div className="gall">
      <div class="gallery">
  <Link to="/prim">
    <img src="https://media.gettyimages.com/id/1148218795/photo/children-cheering-in-classroom.jpg?s=612x612&w=0&k=20&c=gDHpvQfL4-El6mAFCKSsg_OVke-Y_cQT1DEGMXzkuQk=" alt="Cinque Terre" width="600" height="400"></img>
  </Link>
  <div class="desc">PRIMARY</div>
</div>

<div class="gallery">
  <Link to="/high">
    <img src="https://media.gettyimages.com/id/1072472414/photo/male-student-in-classroom-writing-in-notebook-stock-image.jpg?s=612x612&w=0&k=20&c=cuQi67TN1tyuH5JhaDFW_O7AMabgDsGnQMAfaau4M1E=" alt="Forest" width="600" height="400"></img>
  </Link>
  <div class="desc">HIGH SCHOOL</div>
</div>

<div class="gallery">
  <Link to="/higher">
    <img src="https://media.gettyimages.com/id/1148232180/photo/teacher-holding-digital-tablet-in-classroom.jpg?s=612x612&w=0&k=20&c=0YOM9UETVjUELxDYfh7tyAvRhtwfJSkAMeU14ZAE5jw=" alt="Northern Lights" width="600" height="400"></img>
  </Link>
  <div class="desc">HIGHER SECONDARY</div>
</div>


    </div>
    </div>
  )
}

export default Gallery
