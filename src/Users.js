import React from "react";


class Users extends React.Component {
   
    render() {
      return (
        <div>
        <img src={this.props.data.avatar_url} alt="Sandwich" style={{ width: '20%' }} />
        <h2> {this.props.data.login}</h2>
        <h3>Link to my <a href={this.props.data.html_url}>Profile</a></h3>
    </div>
      );
    }
  }

// function Users() {
//     return (
//         <div>
//             <img src={this.props.data.avatar_url} alt="Sandwich" style={{ width: '20%' }} />
//             <h2> {this.props.data.login}</h2>
//             <h3>Link to my <a href={this.props.data.html_url}>Profile</a></h3>
//         </div>
//     )
// }

export default Users;
