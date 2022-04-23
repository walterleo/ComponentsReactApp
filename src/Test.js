import React from "react";

class Test extends React.Component {
    constructor(){
        super();
        this.state = {
            image : "https://www.w3schools.com/w3images/sandwich.jpg",
            title : "The perfect sandwich, A Real NYC Classic",
            description: "Just some random text, lorem"
        }
    }
  render() {
    return (
      <div class="abc">
        <img
          src={this.state.image}
          alt="Sandwich"
          style={{width:'20%'}}
        />
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

// function Test(){
//     return(
//         <div class="abc">
//             <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="Sandwich" style="width:100%" />
//             <h3>The perfect sandwich, A Real NYC Classic</h3>
//             <p>Just some random text, lorem</p>
//         </div>
//     )
// }

export default Test;
