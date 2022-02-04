import './css/homebanner.css'
import React from 'react'
const HomeBanner = () => {
	return(
		<>
		<section className="homebanner">
			<div className="homebanner_inner text-center">
				<h1>Discover the Best Places</h1>
				<p>Explore top-rate attractions activites and more</p>

				<div className="form__wraper p-3 bg-white rounded-pill">
					<div className="row g-3">
					  <div className="col-md-3">
					    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
					  </div>
					  <div className="col-md-3">
					  	<div className="input-group align-items-center">
					    <input type="text" className="form-control input-lg" placeholder="Location"/><i className="bi bi-geo-alt"></i>
					  	</div>
					  </div>
					  <div className="col-md-3">
					  	<div className="input-group align-items-center">
						  <select className="form-control" >
						  	<option>Hello</option>
						  	<option>Hello</option>
						  	<option>Hello</option>
						  	<option>Hello</option>
						  </select><i className="bi bi-chevron-down"></i>
						  </div>
						</div>  
					  <div className="col-md-3">
					    <button class="btn btn-primary w-100 rounded-pill">Search</button>
					  </div>
					</div> 
				</div>


			</div>
		</section>
		</>
	)	
}
export default HomeBanner;