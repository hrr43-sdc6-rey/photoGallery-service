import React from 'react';
import Proptype from 'prop-types';
import Photo from './Photo.jsx';


function CompletePhotoList({ photos }) {
  return (
    <div>
      {photos.map((photo) => {
        const key = photo.photoId;
        const photoUrl = photo.photoUrl;
        const alt = photo.alt;
        const username = photo.username;
        return (
          <Photo key={key} photoUrl={photoUrl} alt={alt} username={username} />
        );
      })}
    </div>
  );
}

// completePhotoList.propType = {
//   photos: Proptype.exact({
//     map: Proptype.array.isRequired,
//     photoId: Proptype.number,
//     photoUrl: Proptype.string.isRequired,
//     alt: Proptype.string.isRequired,
//     username: Proptype.string,
//     experienceId: Proptype.number,
//   }),
// };


export default CompletePhotoList;
