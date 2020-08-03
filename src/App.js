import React, { Component } from 'react';
import './App.css';


 class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentNumber : '0',
      operatorflag: false,
      decimaflag:false
    };
    
  }
  
  handleClick=(buttName)=> {
    let currentNumber = this.state.currentNumber;
    let operatorflag = this.state.operatorflag;
    let decimaflag = this.state.decimaflag;
    switch(true){
      case buttName==='1'||buttName==='2'||buttName==='3'||buttName==='4'||buttName==='5'||buttName==='6'||buttName==='7'||buttName==='8'||buttName==='9'||buttName==='0':
        if(!(this.state.currentNumber === '0')){
          currentNumber = this.state.currentNumber;
          currentNumber += buttName;
          operatorflag = false;
          decimaflag = false
        }else {
          currentNumber = buttName;
        } 
        break
        case buttName==='+'||buttName==='-'||buttName==='/'||buttName==='*':
          if(!this.state.operatorflag){
            currentNumber += buttName;
            operatorflag = true
          }
          break
        case buttName === 'c':
          currentNumber = '0'
          operatorflag = false
          decimaflag = false
          break
        case buttName ==='.':
          if(!decimaflag){
            currentNumber += buttName;
          decimaflag = true
          }
        break
        case buttName ==='=':
          currentNumber = eval(currentNumber);
          operatorflag = false
          decimaflag = false
        }  
        this.setState({currentNumber});
        this.setState({operatorflag});
        this.setState({decimaflag});
  }
  render(){
    return (
      <div id ='content'>
        <Screen currentNumber ={this.state.currentNumber}/>
        <Button click={this.handleClick} name='0'/>
        <Button name='1' click={this.handleClick} />
        <Button name='2' click={this.handleClick} />
        <Button name='3' click={this.handleClick} />
        <Button name='4' click={this.handleClick} />
        <Button name='5' click={this.handleClick} />
        <Button name='6' click={this.handleClick} />
        <Button name='7' click={this.handleClick} />
        <Button name='8' click={this.handleClick} />
        <Button name='9' click={this.handleClick} />
        <Button name='+' click={this.handleClick} />
        <Button name='-' click={this.handleClick} />
        <Button name='*' click={this.handleClick} />
        <Button name='/' click={this.handleClick} />
        <Button name='.' click={this.handleClick} />
        <Button name='c' click={this.handleClick}/>
        <Button name='=' click={this.handleClick}/>
      </div>
    );
  }
  
}

class Screen extends React.Component{
 
  render(){
    return(
      <div>
        <div id = 'screen'>{this.props.currentNumber}</div>
      </div>
    )
  }
     
 
}

class Button extends React.Component{
  renderClick=()=>{
   this.props.click(this.props.name)
  }
  
  render(){
    return(
      <button onClick = {this.renderClick} id={this.props.id}>{this.props.name}</button>
    )
  }
}
export default App;
