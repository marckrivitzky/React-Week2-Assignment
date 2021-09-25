import React from "react"
import ShutterIslandPic from "../pictures/ShutterIslandPic";
import Rating from "../buttons/Rating";
import CommentParent from "../CommentParent";

export default class ShutterIslandCard extends React.Component{
	render(){
		return(
			<div class="col-sm-3 d-flex justify-content-center scroll">
						<div className="card-background" id="shutter-island-card-background">
							<br />
			  				<div className="card" id="shutter-island-card">
								<br />
			    				<ShutterIslandPic />
			    				<div className="card-body">
			 					 	<h3 className="card-title">Shutter Island</h3>
			  						<p className="card-text">
									 In 1954, a U.S. Marshal investigates the disappearance of a 
									 murderer who escaped from a hospital for the criminally insane. 				
									</p>	
									<Rating />	
									<br />
									<div className="shutter-island-reviews">
										<CommentParent />
									</div>
			   				    </div>
			 				</div>
						</div>
					</div>
		);
	}
}




					