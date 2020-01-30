import React from 'react';
import ReactDOM from 'react-dom';

function Photo(props) {
  return (
    <div>
        <img className="photo" src={props.photos.photo_url}></img>
        <p className="user">{props.photos.username}</p>
        <p className="photoID">{props.photos.photo_id}</p>
    </div>
  )
}

export default Photo;