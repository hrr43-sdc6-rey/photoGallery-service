import React from 'react';
import PropTypes from 'prop-types';

function Close({ isOpen, exitModal }) {
  return (
    <div>
      <button type="button" className="exit" onClick={() => { this.exitModal}}>
        &times;
      </button>
    </div>
  );
}

// does that work when you use the onClick that way? I would have just used {() => { exitModal() }}

export default Close;
