import React from "react";

class Searchbar extends React.Component {
  state = {
    term: "",
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="search-bar">
            <input
              onChange={this.handleChange}
              className="search-input"
              name="video-search"
              aria-label="Search"
              type="search"
              placeholder="Search Term"
              value={this.state.term}
            />
            <button type="submit" class="search-btn">
              <img src="magnify.svg" />
            </button>
        </form>
    );
  }
}
export default Searchbar;
