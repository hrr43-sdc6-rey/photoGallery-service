import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components';
import CompletePhotoList from './completePhotoList.jsx';


function Modal({ photos })  {
    return (
      // <div>


        <div className="modalPhotoContainer">
          {/* <CompletePhotoList /> */}
          <button
            type="button"
            className="showAllPhotos"
            >

          </button>
        </div>



      //     <div className="modal">

      //       <div className="closeModal">
      //         <button type="button" className="exitButton" onClick={this.exitModal()}>
      //           $times;
      //         </button>
      //       </div>

      //       <div
      //         className="toTheLeft"
      //         onClick={this.swipeToLast()}
      //         onKeyPress={this.swipeToLast()}
      //         role="button"
      //         tabIndex={0}
      //         >
      //         TO THE LEFT
      //       </div>

      //       <div>
      //         <img className="heroPhoto" src={this.state.heroPhoto} alt={alt} />
      //       </div>

      //       <div
      //         className="toTheRight"
      //         onClick={this.swipeToNext()}
      //         onKeyPress={this.swipeToNext()}
      //         role="button"
      //         tabIndex={0}
      //       >
      //         TO THE RIGHT
      //       </div>

      //       <div className="modalSideBar">
      //         <div className="thumbnails">thumbnail photos will go here</div>
      //       </div>
      //       <div className="nameAndCount">
      //         <p>1/20</p>
      //         <p>
      //           Photo by
      //           `
      //           ${username}`
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
  );
}

// Modal.propsTpes = {
//   photos: PropTypes.array.isRequired,
// };

export default Modal;
