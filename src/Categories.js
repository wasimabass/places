import React from 'react'
const Categories = (props) => {

	fetch ('https://api.covid19api.com/').then (
		(apidata) =>{
			console.log (apidata);
			return apidata.json();
		}
	).then (
		(result)=> {
		console.log (result);
		}
	).catch(
		(error)=>{
		console.log (error);
	});

	return(
		<div className="categories-tabs">

			<ul className="nav nav-border-tabs mb-3 justify-content-around" id="pills-tab" role="tablist">
			  <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    {props.cats.one}
			    </a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			   <li className="nav-item">
			    <a className="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
			    Hostel</a>
			  </li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
			  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
			  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
			  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
			</div>
		</div>
	)


}
export default Categories
