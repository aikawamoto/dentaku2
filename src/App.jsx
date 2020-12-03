import React from 'react';
import ReactDOM from 'react-dom';
import  {Page, Button, Toolbar, Row, Col} from 'react-onsenui';
import {notification} from 'onsenui';

import './style.css';

export default class App extends React.Component {
  constructor(props) { 
    super(props);

    this.state = { count: 0, value: 0, op: "" };

    this.countUp=this.countUp.bind(this);
}

  alertPopup() {
    notification.alert('入力できないよ');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">電卓アプリ</div>
      </Toolbar>
    );
  }
  

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        
        <Row>
          <Col className="box" >{this.state.count}</Col>
          </Row>
        <Row>
          <Col  > </Col>
          <Col  > </Col>
          <Col  > </Col>
          <Col className="btn--yellow"  Button onClick={() => this.s()}>AC</Col>
          </Row>
        <Row>
          <Col className="btn--7 " Button onClick={() => this.countUp(7)}>7</Col>
          <Col className="btn--8"  Button onClick={() => this.countUp(8)}>8</Col>
          <Col className="btn--7"  Button onClick={() => this.countUp(9)}>9</Col>
          <Col className="btn--8"  Button onClick={() => this.waru()}>÷</Col>
        </Row>
        <Row>
          <Col className="btn--8"  Button onClick={() => this.countUp(4)}>4</Col>
          <Col className="btn--7"  Button onClick={() => this.countUp(5)}>5</Col>
          <Col className="btn--8"  Button onClick={() => this.countUp(6)}>6</Col>
          <Col className="btn--7"  Button onClick={() => this.kake()}>×</Col>
        </Row>
        <Row>
          <Col className="btn--7"  Button onClick={() => this.countUp(1)}>1</Col>
          <Col className="btn--8"  Button onClick={() => this.countUp(2)}>2</Col>
          <Col className="btn--7"  Button onClick={() => this.countUp(3)}>3</Col>
          <Col className="btn--8"  Button onClick={() => this.hiku()}>-</Col>
          </Row>
         <Row>
          <Col className="box" > </Col>
          <Col className="btn--7"  Button onClick={() => this.countUp(0)}>0</Col>
          <Col className="btn--8"  Button onClick={() => this.equal()}>=</Col>
          <Col className="btn--7"  Button onClick={() => this.plus()}>+</Col>
        </Row>
      </Page>
    );
  }

  countUp(value) { 
     var s = this.state;
        s.count = this.state.count * 10 + value;
        this.setState(s);
  }

  s() { 
    this.setState({count:0,p:0}); 
  }

  plus(){
    var s = this.state;
    s.op = "+";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
}

  hiku(){
    var s = this.state;
    s.op = "-";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
}
  
  kake(){
    var s = this.state;
    s.op = "×";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
}

   waru(){
    var s = this.state;
    s.op = "÷";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
}


  equal(){
    var s = this.state;
    if(s.op=="+") {
      s.count+=s.value;
    }

    else if(s.op=="-") {
      s.count=s.value-s.count;
    }

    else if(s.op=="×") {
      s.count*=s.value;
    }

    else if(s.op=="÷") {
      s.count=s.value/s.count;
    }
    
   s.op="";
   this.setState(s); 
  }

}

