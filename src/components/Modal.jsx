import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.jsx';

//

function Modal(
  {
    photos,
    heroPhoto,
    heroPhotoIndex,
    username,
    swipeToLast,
    swipeToNext,
    isOpen,
  },
) {
  return (
    <div>
      <div className="modal">

        <button type="button" className="scrollButtons" id="leftB" onClick={() => { swipeToLast(); }}>
          &lt;
        </button>

        <div className="displayPhotoContainer">
          <div className="displayPhoto">

            <Photo
              photoUrl={heroPhoto.photourl}
              alt={heroPhoto.alt}
              username={heroPhoto.username}
              photoId={heroPhoto.photoid}
            />

          </div>
          <div className="photoInfo">
            <p id="photoNumber">
              {heroPhotoIndex + 1}
              /
              {photos.length}
            </p>
            <p id="photoAuthor">
              Photo by
              {heroPhoto.username}
            </p>
          </div>
        </div>

        <button type="button" className="scrollButtons" id="rightB" onClick={() => { swipeToNext(); }}>
          &gt;
        </button>

      </div>

    </div>

  );
}


export default Modal;
