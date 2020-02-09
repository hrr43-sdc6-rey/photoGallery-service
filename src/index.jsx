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
        this.setState({
          photos: res.data,
          heroPhoto: res.data[0].photoUrl
        });
      })
      .catch((err) => {
        console.log('Axios Error: ', err);
      });
  }

  openModal() {
    this.setState({
      isOpen: true,
    });
  }

  exitModal() {
    this.setState({
      isOpen: false,
    });
  }

  swipeToLast() {
    const currentPhotoIndex = this.state.heroPhotoIndex
    this.setState({
      heroPhotoIndex: currentPhotoIndex - 1,
      heroPhoto: this.props.photos[currentPhotoIndex - 1].photoUrl
    });
  }

  swipeToNext() {
    const currentPhotoIndex = this.state.heroPhotoIndex
    this.setState({
      heroPhotoIndex: currentPhotoIndex + 1,
      heroPhoto: this.props.photos[currentPhotoIndex + 1].photoUrl
    });
  }

  render() {
    return (
      <PhotoGalleryContainer className="photoGalleryContainer">
        <ContentContainer className="contentContainer">

          <div className="left">
            <div className="titleContainer">
              <h2>Guest photos</h2>
            </div>
          </div>

          <div className="right">
            <PhotoGrid photos={this.state.photos} />
            <button type="button" className="showAllPhotos" id="modalButton" >Show All Photos </button>
          </div>

          <div className="modal">
            <Modal photos={this.state.photos} exitModal={this.exitModal.bind(this)} swipeToLast ={this.swipeToLast.bind(this)} swipeToNext={this.swipeToNext.bind(this)} />
          </div>

         </ContentContainer>
       </PhotoGalleryContainer>
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
