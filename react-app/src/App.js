import React, { Component } from 'react';
// import logo from './logo.svg';
import Layout from './Components/Layout';
import BurgerBuilder from './Containers/BurgerBuilder'


class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BurgerBuilder />
        </Layout>


      
      </div>
    );
  }
}

export default App;
