import React from 'react';
import Photo from './Photo.js';

function PhotoGrid(props) {
  return (
    <div>
      <div className="photoGrid">
        {Photo.map(photos, k =>
        <Photo key={k} photo={props.photos} />
        )};
      </div>
    </div>
  )
}

export default PhotoGrid;