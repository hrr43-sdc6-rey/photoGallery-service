// import React from 'react';
// import Proptype from 'prop-types';
// import Photo from './Photo.jsx';


// function CompletePhotoList({ photos }) {
//   return (
//     <div>
//       {(photos.slice(0, 6)).map((photo) => {
//         const photoId = photo.photoId;
//         const photoUrl = photo.photoUrl;
//         const alt = photo.alt;
//         return (
//           <Photo photoId={photoId} photoUrl={photoUrl} alt={alt} key={photoId} />
//         );
//       })}
//     </div>
//   );
// }

// CompletePhotoList.propType = {
//   photos: Proptype.exact({
//     map: Proptype.array.isRequired,
//     photoId: Proptype.number,
//     photoUrl: Proptype.string.isRequired,
//     alt: Proptype.string.isRequired,
//     username: Proptype.string,
//     experienceId: Proptype.number,
//   }),
// };


// export default CompletePhotoList;
