import React from "react";
import WreckItRalphPic from "../pictures/WreckItRalphPic";
import Rating from "../buttons/Rating";
import CommentParent from "../CommentParent";

export default class WreckItRalphCard extends React.Component{
	render(){
		return(
			<div class="col-sm-3 d-flex justify-content-center">
				<div className="card-background" id="wreck-it-ralph-background">
					<br />
	  				<div className="card" id="wreck-it-ralph-card">
						<br />
	    				<WreckItRalphPic />
	    				<div className="card-body">
	 					 	<h3 className="card-title">Wreck it Ralph</h3>
	  						<p className="card-text">
							 Ralph embarked on a game-jumping adventure across Litwak's Arcade 
							 in hopes of earning a medal and becoming a "good-guy". 
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