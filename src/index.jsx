import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Photo from './components/Photo.jsx';
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }


  componentDidMount() {
    const url = window.location.href;
    console.log('THE URL: ', url);
    const urlSplit = window.location.href.split('/');
    console.log('THIS IS THE URL SPLIT UP: ', urlSplit);
    const experienceId = parseInt(url[url.length - 1], 10);
    console.log('HEYYY: ', experienceId);

    axios.get(`/photos/${experienceId}`)
      .then((res) => {
        console.log('PRINT RES: ', res);
        this.setState({ photos: res.data });
      })
      .catch((err) => {
        console.log('HEY Axios Error: ', err);
      })
  }


  render() {
    return (
      <div>
        <div> Is index Mounting? Yes.</div>
          <Photo imageUrl={this.state.imageUrl} />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));