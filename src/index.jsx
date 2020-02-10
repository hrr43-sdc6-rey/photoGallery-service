import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Proptype from 'prop-types';
import PhotoGrid from './components/PhotoGrid.jsx';
import Modal from './components/Modal.jsx';
// import Close from './components/ExitButton.jsx';
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
      heroPhoto: '',
      heroPhotoIndex: 0,
      isOpen: false,
    };
  }


  componentDidMount() {
    const urlSplit = window.location.href.split('/');
    let experienceId = parseInt(urlSplit[urlSplit.length - 1] || 1, 10);

    if (experienceId === NaN) {
      experienceId = 1;
    }

    axios.get(`/photos/${experienceId}`)
      .then((res) => {
        const photos = res.data;
        const heroPhoto = photos[0];
        this.setState({
          photos: photos,
          heroPhoto: heroPhoto,
        });
        console.log('HERO PHOTO: ', this.state.heroPhoto);
      })
      .catch((err) => {
        console.log('Axios Error: ', err);
      });
  }

  swipeToLast() {
    const currentIn = this.state.heroPhotoIndex;
    let newHeroIndex = this.state.heroPhotoIndex - 1;
    let newHeroPhoto = this.state.photos[newHeroIndex];

    if (newHeroIndex <= -1) {
      newHeroIndex = this.state.photos.length - 1;
      newHeroPhoto = this.state.photos[newHeroIndex];
    }
    this.setState({
      heroPhotoIndex: newHeroIndex,
      heroPhoto: newHeroPhoto,
    });
  }


  swipeToNext() {
    const currentIndex = this.state.heroPhotoIndex;
    let updatedIndex = this.state.heroPhotoIndex + 1;
    let newPhoto = this.state.photos[updatedIndex];

    if (updatedIndex > this.state.photos.length - 1) {
      updatedIndex = 0;
      newPhoto = this.state.photos[updatedIndex];
    }

    this.setState({
      heroPhotoIndex: updatedIndex,
      heroPhoto: newPhoto,
    });
  }


  render() {
    let modalOn = (
      <div>

        <div className="fullPageModal">
          <button type="button" className="exit" onClick={() => this.setState({ isOpen: false })}>&times;</button>


          <div className="modalPhotoContainer">
            <Modal heroPhoto={this.state.heroPhoto}
              exitModal={this.state.exitModal}
              swipeToLast={this.swipeToLast.bind(this)}
              swipeToNext={this.swipeToNext.bind(this)}
            />

          </div>

        </div>
      </div>
    );

    if (!(this.state.isOpen)) {
      modalOn = null;
    }

    return (
      <div>

        <PhotoGalleryContainer className="photoGalleryContainer">
          <ContentContainer className="contentContainer">
            <div>
              {modalOn}
            </div>

            <div className="left">
              <div>
                <div className="titleContainer">
                  <h2>Guest photos</h2>
                </div>
              </div>
            </div>

            <div className="right">
              <PhotoGrid photos={this.state.photos} />
              <button type="button" className="showAllPhotos" id="modalButton" onClick={() => this.setState({ isOpen: true })}>Show All Photos </button>
            </div>


          </ContentContainer>
        </PhotoGalleryContainer>

      </div>
    );
  }
}

// App.propType = {
//   photos: Proptype.exact({
//     map: Proptype.array.isRequired,
//     photoUrl: Proptype.string.isRequired,
//     alt: Proptype.string.isRequired,
//     username: Proptype.string,
//     experienceId: Proptype.number,
//   }),
//   photos: Proptype.object.isRequired,
// };


ReactDOM.render(<App />, document.getElementById('photo-gallery'));
