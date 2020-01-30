import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// function Welcome(props) {
//   return <h3>Hello, {props.name}</h3>
// }

// const element = <Welcome name="Katie" />;

// ReactDOM.render(element, document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3003/2')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <ul>
            {items.map(item => (
              <li key={item.photo_id}>
                user: {item.username}  |  photo id: {item.photo_id}
                <img src={item.photo_url} />
              </li>
            ))};
          </ul>

      );
    }
  }
}

  ReactDOM.render(<App/>, document.getElementById('app'));