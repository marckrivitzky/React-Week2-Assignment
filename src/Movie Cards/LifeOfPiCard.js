import React from "react"
import LifeOfPiPic from "../pictures/LifeOfPiPic";
import CommentParent from "../CommentParent";
import Rating from "../buttons/Rating";

export default class LifeOfPiCard extends React.Component{
	render(){
		return(
			<div class="col-sm-3 d-flex justify-content-center">
				<div className="card-background" id="life-of-pi-card-background">
					<br />
	  				<div className="card" id="life-of-pi-card">
						<br />
	    				<LifeOfPiPic />
	    				<div className="card-body">
	 					 	<h3 className="card-title">Life of Pi</h3>
	  						<p className="card-text">
							 A young man who survives a disaster at sea is hurtled into an epic journey of adventure 
							 and discovery where he meets a beautiful bengel tiger.			
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