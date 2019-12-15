import React from 'react';
import './Caculator.css';

import Input from './components/Inputs/Input';
import Button from './components/Buttons/Button';
import ClearButton from './components/Buttons/ClearButton';
import RemoveButton from './components/Buttons/RemoveButton';
import * as math from 'mathjs';

class AppCaculator extends React.Component {
  constructor(props) {
    //props cua class cha  React.Component
    super(props);
    // khai bao state hien thi phep tinh
    this.state = {input: ''};
  }

  addToValueInput = (val) => {
    // lay du lieu nguoi dung bam chon cac button de hien thi phep tinh
    // set lai gia tri cho state da khai bao
    // + phep noi chuoi trong js
    // {input: this.state.input + val}  {input: ''}
    //  this.state.input + val: ''
    this.setState({input: this.state.input + val});
  }

  hanldeMul = (val) => {
    // chuyen ky tu "x" thanh "*"
    this.setState({input: this.state.input + val.replace('x','*')});
  }

  hanldeResult = () => {
    let result = math.eval(this.state.input);
    this.setState({input: result});
  }

  clearCaculator = () => {
    this.setState({input: ''});
  }

  removeOperator = () => {
    let operator = this.state.input;
    // xoa ky tu cuoi cung trong "operator"
    operator = operator.substring(0, operator.length-1);
    this.setState({input: operator}); 
  }

  render() {
    // hien thi view ra ngoai trinh duyet
    // tat ca cac ma code hien thi ra view goi la jsx
    return(
      <>
        <div className="App-wrapper">
          <div className="App-main">
            <div className="row">
              <Input value={this.state.input} />
            </div>
            <div className="row">
              <Button handleClick={this.addToValueInput}>7</Button>
              <Button handleClick={this.addToValueInput}>8</Button>
              <Button handleClick={this.addToValueInput}>9</Button>
              <Button handleClick={this.hanldeMul}>x</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToValueInput}>4</Button>
              <Button handleClick={this.addToValueInput}>5</Button>
              <Button handleClick={this.addToValueInput}>6</Button>
              <Button handleClick={this.addToValueInput}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToValueInput}>1</Button>
              <Button handleClick={this.addToValueInput}>2</Button>
              <Button handleClick={this.addToValueInput}>3</Button>
              <Button handleClick={this.addToValueInput}>+</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToValueInput}>0</Button>
              <Button handleClick={this.addToValueInput}>.</Button>
              <Button handleClick={()=>this.hanldeResult()}>=</Button>
              <Button handleClick={this.addToValueInput}>/</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={()=>this.clearCaculator()} />
              <RemoveButton handleRemove={()=>this.removeOperator()} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
// de co the import tu cac noi khac
export default AppCaculator;