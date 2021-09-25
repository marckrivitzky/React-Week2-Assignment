import React from "react";


export default class CommentParent extends React.Component {
	constructor(props){
		super(props);
		 this.state = {
		    reviews: [],
			input: "",
		  };
	}
  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
	  let { reviews, input } = this.state;
	  reviews.push(input);
	  this.setState({reviews: reviews});
  };

  reviewList = () => {
	 let { reviews } = this.state;
	this.setState({reviews: reviews});

  };
  
  render() {
    return (
      <div>
			<form>
	        <input
	          type="text"
	          onChange={this.saveInput}
			  placeholder="write a review"
			  id="review-line"
	        />
			</form>
			<br />
	        <button 
				onClick={this.addNewItem}
				className="btn btn-success"> 
				Add Review 
			</button>
			<br />
			<br />
			<ol>
	      		{this.state.reviews.map((subItems) => {
	        	return <li> {subItems} </li>
	     		 })}
     		</ol>	
      </div>
    );
  }
}







