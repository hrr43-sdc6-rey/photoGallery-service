import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photoUrl, alt, username, photoId}) {
  return (
    <div className="gridPhoto">
      <div className="gridImage">
        <img src={photoUrl} alt={alt} username={username}  photoid={photoId} />
      </div>
    </div>
  );
}

// Photo.propType = {
//   photos: Proptype.exact({
//     photoId: Proptype.number,
//     photoUrl: Proptype.string,
//     alt: Proptype.string.isRequired,
//     username: Proptype.string,
//     experienceId: Proptype.number,
//   }),
//   photoUrl: Proptype.string.isRequired,
//   alt: Proptype.string.isRequired,
// };

// Photo.propType = {
//   photos: Proptype.exact([
//     photoId: Proptype.number,
//     photoUrl: Proptype.string,
//     alt: Proptype.string.isRequired,
//     username: Proptype.string,
//     experienceId: Proptype.number,
//   ]),
//   photoUrl: Proptype.string.isRequired,
//   alt: Proptype.string.isRequired,
// };


export default Photo;
