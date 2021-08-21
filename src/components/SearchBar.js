import React from "react";

class SearchBar extends React.Component {
  // create an event handler function to get what the user type into the search bar
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  // refactoring the event handler, we create a state and then update the state with the setState method whenever the user change the input text.

  state = {
    term: "",
  };

  // cancelling the default event for the form element
  // we need to make use of the arrow  function because of the 'this' keyword we used in calling the onFormSubmit in the onSubmit props.
  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
