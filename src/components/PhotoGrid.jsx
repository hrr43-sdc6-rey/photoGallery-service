import React from 'react';
import Proptype from 'prop-types';
import Photo from './Photo.jsx';


function PhotoGrid({ photos }) {
  return (
    <div>
      {photos.map((photo) => {
        const key = photo.photoId;
        const photoUrl = photo.photoUrl;
        const alt = photo.alt;
        return (
          <Photo key={key} photoUrl={photoUrl} alt={alt} />
        );
      })}
    </div>
  );
}

PhotoGrid.propType = {
  photos: Proptype.exact({
    map: Proptype.array.isRequired,
    photoId: Proptype.number,
    photoUrl: Proptype.string.isRequired,
    alt: Proptype.string.isRequired,
    username: Proptype.string,
    experienceId: Proptype.number,
  }),
};


export default PhotoGrid;
