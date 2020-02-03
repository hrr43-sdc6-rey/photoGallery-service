import React from 'react';


class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="gridphoto">
          <img src={this.props.images[0]} alt={this.props.alt[0]} />
        </div>

        <div className="gridphoto">
          <img src={this.props.images[1]} alt={this.props.alt[1]} />
        </div>

        <div className="gridphoto">
          <img src={this.props.images[2]} alt={this.props.alt[2]} />
        </div>

        <div className="gridphoto">
          <img src={this.props.images[3]} alt={this.props.alt[3]} />
        </div>

        <div className="gridphoto">
          <img src={this.props.images[4]} alt={this.props.alt[4]} />
        </div>

        <div className="gridphoto">
          <img src={this.props.images[5]} alt={this.props.alt[5]} />
        </div>
      </div>
    )
  }
};

export default Photo;