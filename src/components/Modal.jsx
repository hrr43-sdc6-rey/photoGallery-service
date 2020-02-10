import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.jsx';
import Close from './ExitButton.jsx';

// maybe consider using a conditional render here and not show the previous button on the first picture and not show the next button on the last picture.

function Modal({ heroPhoto, swipeToLast, swipeToNext, exitModal, isOpen}) {
  return (

    <div className="modal">


    <Close></Close>
      <button type="button" className="scrollButtons" id="leftB" onClick={() => { swipeToLast(); }}>
        &lt;
      </button>

      <div className="displayPhotoContainer">
        <div className="displayPhoto">

          <Photo photoUrl={heroPhoto.photoUrl}
          alt={heroPhoto.alt} username={heroPhoto.username} photoId={heroPhoto.photoId}
          />

        </div>
      </div>

      <button type="button" className="scrollButtons" id="rightB" onClick={() => { swipeToNext(); }}>
        &gt;
      </button>

    </div>

  );
}


export default Modal;
