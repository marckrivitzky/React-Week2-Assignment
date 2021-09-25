import React from "react";
import ShutterIslandCard from "./Movie Cards/ShutterIslandCard";
import TheTownCard from "./Movie Cards/TheTownCard";
import LifeOfPiCard from "./Movie Cards/LifeOfPiCard";
import WreckItRalphCard from "./Movie Cards/WreckItRalphCard";

export default class MovieList extends React.Component{
	render(){
		return(
			<div className="page-container">
				<div className="heading" id="heading">
					<img id="cartoon-cam" src="https://lh3.googleusercontent.com/proxy/x00fOpi-tvjgWREBg7ouu_O3cYUSb82FGVEQ0FkziHphEy8Li_MAiwA8P5IblDvUhqiRBDVI0waIe6Y706FZDztnTa8lVnnS1Q65bDzegeT-W-vk2skAPVFLN7SVK05LfWlUfr1f-WjHObPw28RsRKIUOUs" width="100px"/>
					<h1>Marc's Favorite Movies</h1> 
				</div>
				
					<div class="container-fluid" id="container">
						<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
		  				<div class="row" id="row-cards">
		    				<ShutterIslandCard />
							<TheTownCard />
		    				<LifeOfPiCard />
							<WreckItRalphCard />
						</div>
					</div>
				<br />
				<br />
			</div>
		);
	}
}

		






