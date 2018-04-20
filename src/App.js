import React, { Component } from 'react';
import logo from './logo.svg';
import imgg1 from'./images/imgg1.jpg';
import imgg2 from'./images/imgg2.jpg';
import imgg3 from'./images/imgg3.jpg';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit.js';

var firstImage= {

        backgroundImage: "url("+imgg1+")",

}

var secondImage= {

    backgroundImage: "url("+imgg2+")",

}

var thirdImage= {

    backgroundImage: "url("+imgg3+")",

}

class App extends Component {
  render() {
    return (

      <div className="App">

        <div className="uk-container uk-padding">
            <div className="uk-flex uk-flex-center">
                <div className="uk-width-5-6@m">
                    <div className="uk-grid-small uk-grid uk-grid-stack">

                        <div className="uk-width-3-5@m uk-first-column each-image first-image
                        uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle" style={firstImage}>
                            <a href="">Transforming to one enterprise culture</a>
                        </div>

                        <div className="uk-width-2-5@m uk-padding">
                            <div className="second-image each-image second-image
                            uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle" style={secondImage}>
                            <a href=""></a>
                            </div>
                            <div className="second-columm each-image third-image
                            uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle" style={thirdImage}>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
      </div>

    );
  }
}

export default App;
