import React, { Fragment } from "react";
import Test from "./Test";
/*

Types of React Components
1) RCC react class  based components
2) RFC react functional components


*/
// RCC it is a class
class App extends React.Component {
  
  
    render() {
    return (
      <Fragment>
        <h1>Hello Walter</h1>
        <h2>testing RCC which is a class based components</h2>
        <Test />
      </Fragment>
    );
  }
}

// RFC   it is a functional
// function App(){
//     return(
//         <Fragment>
//         <h1>Hello World {5+5}</h1>
//         <h2>testing</h2>
//         <h3>testing 2</h3>
//         <h4>hi</h4>
//         </Fragment>
//     )
// }

export default App;
