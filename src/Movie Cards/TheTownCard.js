import React from "react"
import TheTownPic from "../pictures/TheTownPic";
import CommentParent from "../CommentParent";
import Rating from "../buttons/Rating";

export default class TheTownCard extends React.Component{
	render(){
		return(
			<div class="col-sm-3 d-flex justify-content-center">
				<div className="card-background" id="the-town-card-background">
					<br />
	  				<div className="card" id="the-town-card">
						<br />
	    				<TheTownPic />
	    				<div className="card-body">
	 					 	<h3 className="card-title">The Town</h3>
	  						<p className="card-text">
							 A proficient group of four Boston notorious bank robbers, rob a bank and hold the assistant manager, hostage.  
							
							</p>
							<Rating />	
							<br />
							<div className="life-of-pi-reviews">
								<CommentParent />
							</div>
						</div>
	 				</div>
				</div>
			</div>
		);
	}
}