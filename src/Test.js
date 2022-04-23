import React from "react";

class Test extends React.Component {
  render() {
    return (
      <div class="abc">
        <img
          src="https://www.w3schools.com/w3images/sandwich.jpg"
          alt="Sandwich"
          style={{width:'20%'}}
        />
        <h3>The perfect sandwich, A Real NYC Classic</h3>
        <p>Just some random text, lorem</p>
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
