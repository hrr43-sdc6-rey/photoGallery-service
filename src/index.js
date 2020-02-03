import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Photo from './components/Photo.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [],
      alt: [],
      username: []
      photos: {}
    }
  }

  componentDidMount() {
    let url = window.location.href.split('/');
    let expId = parseInt(url[url.length - 1]);

    axios.get(`/photos/${expId}`)
      .then(res => {
        let expObj = res.data;

        this.setState({
          imageUrl: expObj.photoUrl,
          alt: expObj.alt,
          username: expObj.username,
          photos: expObj
        })

      })
      .catch(err => {
        console.log('Axios Error: ', err);
      })
  }


  render() {
    return (
      <div className="main-container">
        <Container>
          <Photo imageUrl={this.state.imageUrl} />
        </Container>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));