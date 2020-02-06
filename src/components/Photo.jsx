import React from 'react';
import Proptype from 'prop-types';

function Photo({ photoUrl, alt }) {
  return (
    <div className="gridPhoto">
      <div className="gridImage">
        <img src={photoUrl} alt={alt} />
      </div>
    </div>
  );
}

Photo.propType = {
  photos: Proptype.exact({
    photoId: Proptype.number,
    photoUrl: Proptype.string,
    alt: Proptype.string.isRequired,
    username: Proptype.string,
    experienceId: Proptype.number,
  }),
  photoUrl: Proptype.string.isRequired,
  alt: Proptype.string.isRequired,
};


export default Photo;
