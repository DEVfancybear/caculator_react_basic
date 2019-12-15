import React from 'react';
import FormInput from './components/Forms/From';

class CheckingNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: "", val: 0}
  }

  handleOnchangeInput = (event) => {
    let val = event.target.value;
    this.setState({val: val});
  }

  chekNumber = () => {
    let number = this.state.val;

    if(number <= 1){
      this.setState({
        message: "Khong phai so nguyen to"
      });
    } else if(number == 2){
      this.setState({
        message: "La  so nguyen to"
      });
    } else {
      let flag = true;
      for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i == 0){
          flag = false;
          break;
        }
      }
      if(flag){
        this.setState({
          message: "La so nguyen to"
        });
      } else {
        this.setState({
          message: "Khong phai so nguyen to"
        });
      }
    }
  }



  render() {
    //console.log(this.state.val);
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-6 col-xl-6 offset-xl-3">
              <h2 className="text-center my-3">Kiem tra so nguyen to</h2>
              <FormInput 
                value={this.state.val} 
                hanldeChange={this.handleOnchangeInput} 
                hanldeCheck={this.chekNumber}
              />
              <h3 className="text-center my-3">{this.state.message}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CheckingNumber;