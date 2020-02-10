import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Proptype from 'prop-types';
import PhotoGrid from './components/PhotoGrid.jsx';
import Modal from './components/Modal.jsx';
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

  openModal() {
    let openOrClose= !!(true);
    this.setState({
      isOpen: openOrClose,
    });
  }

  //conditional render
    //if isOpen is false show regular
    //if true, just show modal

  exitModal() {
    let openOrClose= !!(true);
    this.setState({
      isOpen: openOrClose,
    });
  }

  swipeToLast() {
    const newIndex = this.state.heroPhotoIndex - 1;

    const newHeroPhoto = this.state.photos[newIndex];

    this.setState({
      heroPhotoIndex: newIndex,
      heroPhoto: newHeroPhoto,
    });
    console.log('NEW INDEX: ', newIndex);
  }

  swipeToNext() {
    const currentPhotoIndex = this.state.heroPhotoIndex + 1;
    const lastHeroPhoto = this.state.photos[currentPhotoIndex];
    this.setState({
      heroPhotoIndex: currentPhotoIndex,
      heroPhoto: lastHeroPhoto,
    });
  }

  render() {
//conditional render
 //if modal is open is true do this
 //if this.state == false
//  return
//     show everything but the modal
//     if it is, show just the modal and nothing else

    if (!(this.isOpen)) {
      return (
        <div>
          <PhotoGalleryContainer className="photoGalleryContainer">
            <ContentContainer className="contentContainer">

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
    } if (this.isOpen) {
      return (
        <div>
          <PhotoGalleryContainer className="photoGalleryContainer">
            <ContentContainer className="contentContainer">

              <div className="fullPageModal">


                <div className="modalPhotoContainer">
                  <Modal heroPhoto={this.state.heroPhoto}
                  isOpen={this.state.isOpen} exitModal={this.state.exitModal} swipeToLast={this.swipeToLast.bind(this)}
                  swipeToNext={this.swipeToNext.bind(this)} />

                  {/* include exit modal */}
                </div>

              </div>

            </ContentContainer>
          </PhotoGalleryContainer>

        </div>
      );
    }
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
