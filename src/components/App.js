import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };

// Refactoring the App function component into a Class component

class App extends React.Component {
  // NB: recall that props can only be pass from the parent to child component. But with a little trick we can pass props both ways. and thats what we want to do here.

  // we define a call back method to pass as props to the child component. With this call back  method  we will be able to pass back props from the child component to back to the App component(i.e parent component).

  async onSearchSubmit(term) {
    // console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 4uEw4gkT5NYQK8LAHWUj5O-X3sVtwrNQA_i_USjGMIE",
      },
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
