// import React from 'react';
// import ReactDOM from 'react-dom';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import axios from 'axios';
// // import PhotoGrid from './components/PhotoGrid.js';
// //import Photos from './components/Photos.js';

// Enzyme.configure({ adapter: new Adapter() });

// console.log('testing');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       photos: []
//     }
//   }

//   componentDidMount() {
//     let url = "http://localhost:3003/2";
//     axios.get(url)
//       .then(res => {
//         this.setState({photos: res.data });
//         console.log('PRINT RES.DATA: ',res.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }


//   render() {

//     if (!this.state.photos.length) {
//       return <div><p>No guest photos from this experience</p></div>
//     }

//     const photoGrid =
//       this.state.photos.map(photo => (
//         <div key={photo.photo_id}>
//           <img src={photo.photo_url}></img>
//           <div>{photo.username}</div>
//         </div>
//     ));

//     return (
//       <div>
//         <div className="gridContainer">
//           {photoGrid}
//         </div>
//       </div>
//       );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));