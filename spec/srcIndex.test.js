//import React from 'react';
// const renderItem = require('../src/index.js');
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const appTest = require('../src/index.js')

describe('Each photo', () => {
const containerDiv = shallow(<App.photoGrid.photos={[]} />)

  it('should have a url path', () => {
    const photo = containerDiv.find('img')
    expect(photo.length > 0).toBeTruthy();
  })
});