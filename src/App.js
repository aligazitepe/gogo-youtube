import React from "react";
import SearchBar from "./components/Searchbar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import youtubeService from "./services/YoutubeService";

import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = (termFromSearchBar) => {
    youtubeService
      .get("/search", {
        params: {
          q: termFromSearchBar,
        },
      })
      .then((response) => {
        this.setState({
          videos: response.data.items,
        });
      });
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  resetState = () => {
    this.setState({ videos: [], selectedVideo: null });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <header class="header">
          <a
            href="#"
            onClick={() => {
              this.resetState();
            }}
          >
            <img src="logo.png" alt="YouTube Logo" class="youtube-logo" />
          </a>
          <SearchBar handleFormSubmit={this.handleSubmit} />

          <div class="menu-icons">
            <a href="#">
              <img src="video-plus.svg" alt="Upload Video" />
            </a>
            <a href="#">
              <img src="apps.svg" alt="Apps" />
            </a>
            <a href="#">
              <img src="bell.svg" alt="Notifications" />
            </a>
            <a href="#">
              <img
                class="menu-channel-icon"
                src="http:///unsplash.it/36/36?gravity=center"
                alt="Your Channel"
              />
            </a>
          </div>
        </header>
        <div className="grid-container">
          <div className="grid-item">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="grid-item">
            <VideoList
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
