import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './App.css';

let btn1 = "";
let btns = []
class App extends Component {
  // btn1 = document.getElementById('math-btn');
  // btns = [btn1];
  // getBtnId(btn) {
  //     btn.addEventListener('click', () => {
  //         console.log(this.id);
  //     });
  // }
  // btns.foreach(getBtnId);

  render() {
    return (
      <div className="App">
        <h2 className="heading col-12">I want to study...</h2>
        <div className="row">
            <div className="col-3">&nbsp;</div>
            <div className="body col-6">
                <Button onClick={this.handleClick} id="math-btn" className="col-4 btn btn-primary button" bsSize="large">Math</Button>
                <Button id="cs-btn" className="col-4 btn btn-primary button" bsSize="large">Computer Science</Button>
                <Button id="science-btn" className="col-4 btn btn-primary button" bsSize="large">Science</Button>
                <Button id="english-btn" className="col-4 btn btn-primary button" bsSize="large">English</Button>
                <Button id="art-btn" className="col-4 btn btn-primary button" bsSize="large">Art</Button>
                <Button id="spanish-btn"className="col-4 btn btn-primary button" bsSize="large">Spanish</Button>
            </div>
            <div className="col-3">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default App;
