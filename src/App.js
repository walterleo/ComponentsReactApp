import React from "react";
import Test from "./Test";
import Users from "./Users";
/*

Types of React Components
1) RCC react class  based components
2) RFC react functional components


*/
// RCC it is a class
class App extends React.Component {
    constructor(){
        super();
        this.state = [
            {
                "login": "mojombo",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo",
                "followers_url": "https://api.github.com/users/mojombo/followers",
                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                "repos_url": "https://api.github.com/users/mojombo/repos",
                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                "type": "User",
                "site_admin": false
              },
              {
                "login": "defunkt",
                "id": 2,
                "node_id": "MDQ6VXNlcjI=",
                "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "type": "User",
                "site_admin": false
              },
              {
                "login": "pjhyett",
                "id": 3,
                "node_id": "MDQ6VXNlcjM=",
                "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/pjhyett",
                "html_url": "https://github.com/pjhyett",
                "followers_url": "https://api.github.com/users/pjhyett/followers",
                "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
                "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
                "organizations_url": "https://api.github.com/users/pjhyett/orgs",
                "repos_url": "https://api.github.com/users/pjhyett/repos",
                "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
                "received_events_url": "https://api.github.com/users/pjhyett/received_events",
                "type": "User",
                "site_admin": false
              }
        ]
    }
  
    render() {
    return (
      <>
         {this.state.map(ele => <Users data={ele} />)}
      </>
    )
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
