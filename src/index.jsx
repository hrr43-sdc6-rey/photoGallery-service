import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Proptype from 'prop-types';
import PhotoGrid from './components/PhotoGrid.jsx';
import '../public/styles.css';


const PhotoGalleryContainer = styled.div`
  justifyContent: center;
  flexDirection: row;
`;

const ContentContainer = styled.div`
  flexDirection: row;
  justifyContent: center;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }


  componentDidMount() {

    const urlSplit = window.location.href.split('/');
    console.log('THIS IS THE SPLIT UP ARRAY FOR THE URL: ', urlSplit);
    const experienceId = parseInt(urlSplit[urlSplit.length - 1], 10);

    const { photos } = this.state;


    axios.get(`/photos/${experienceId}`)
      .then((res) => {

        this.setState({
          photos: res.data,
        });  //setting state


        console.log('THIS IS PHOTOS ARRAY OF OBJS for this experience: ', photos);
      })
      .catch((err) => {
        console.log('HEY Axios Error: ', err);
      });
  }


  render() {
    const { photos } = this.state;
    console.log('What data am I getting here: ', photos);
    return (
      <PhotoGalleryContainer className="photoGalleryContainer">
        <ContentContainer className="contentContainer">

          <div className="left">
            <div>Guest photos</div>
          </div>

          <div className="right">
            <PhotoGrid photos={photos} />
            <div className="showAllPhotos">Show All Photos</div>
          </div>

        </ContentContainer>
      </PhotoGalleryContainer>
    );
  }
}

App.propType = {
  photos: Proptype.exact({
    map: Proptype.array.isRequired,
    photoUrl: Proptype.string.isRequired,
    alt: Proptype.string.isRequired,
    username: Proptype.string,
    experienceId: Proptype.number,
  }),
};


ReactDOM.render(<App />, document.getElementById('app'));
