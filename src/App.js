import React from "react";
import SearchBar from "./components/Searchbar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import Login from "./components/Login";

import youtubeService from "./services/YoutubeService";

import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    accessToken: null,
  };
  handleLogin = (userData) => {
    loginService
      .post("/login", {
        data: {
          username: userData,
        },
      })
      .then((response) => {
        console.log(response);
      });
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
    if (!this.state.accessToken)
      return <Login handleLogin={this.handleLogin} />;
    return (
      <div className="ui container">
        <header className="header">
          <a
            href="#"
            onClick={() => {
              this.resetState();
            }}
          >
            <img src="logo.png" alt="YouTube Logo" className="youtube-logo" />
          </a>
          <SearchBar handleFormSubmit={this.handleSubmit} />

          <div className="menu-icons">
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
                className="menu-channel-icon"
                src="https://yt3.ggpht.com/yti/APfAmoG43GcseFdOCv2gJ2YxxlQPAbiTtE2Qb0aZRQ=s88-c-k-c0x00ffffff-no-rj-mo"
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
