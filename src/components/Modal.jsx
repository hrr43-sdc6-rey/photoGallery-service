import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.jsx';


function Modal({ heroPhoto, swipeToLast, swipeToNext}) {
  return (

    <div>
      <button type="button" onClick={()=>{swipeToLast()}}>&lt;
      </button>

      <div className="displayPhoto">
        <div className="displayPhotoContainer">
          <div className="displayPhoto">
            <Photo photoUrl={heroPhoto.photoUrl} alt={heroPhoto.alt} username={heroPhoto.username} photoId={heroPhoto.photoId} />
          </div>
        </div>
      </div>

      <button type="button" onClick={() => {swipeToNext()}}>&gt;
        </button>

    </div>
  );
}


export default Modal;
