import React from "react";
import styles from "./Searchbar.module.css"
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
        <form onSubmit={this.handleSubmit} className={styles.searchBar}>
            <input
              onChange={this.handleChange}
              className={styles.searchInput}
              name="video-search"
              aria-label="Search"
              type="search"
              placeholder="Search Term"
              value={this.state.term}
            />
            <button type="submit" class={styles.searchBtn}>
              <img src="magnify.svg" />
            </button>
        </form>
    );
  }
}
export default Searchbar;
