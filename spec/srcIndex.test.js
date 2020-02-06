import React from 'react';
import App from '../src/index.jsx';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


const appTest = require('../src/index.js')

//want to test that the array of objects has more than 9 objects for each experience
describe('Experience Photo List ', () => {
  const containerDiv = shallow(<App.photoGrid={[]} />)

  it("should have > 9 photos", () => {
    const photos = shallow(<PhotoGrid.photos />);
    expect(photos.length > 9).toBeTruthy();
  })
});
