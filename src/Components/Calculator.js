/**
 * Created by liujia on 17/1/3.
 */

import  React , { Component } from 'react';
import ReactDOM from 'react-dom';
import CalculatorActions from '../Actions/CalculatorActions';
import { connect } from 'react-redux';


class Calculator extends Component {

    render(){
        return(
            <div>
                <input
                    type="text"
                    defaultValue="0"
                    ref="firstParam"
                />
                <select ref="operator">
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <input
                    type="text"
                    defaultValue="0"
                    ref="secondParam"
                />
                <button
                    onClick={ () => this.caculate()}
                >=</button>
                <span>{this.props.calculator}</span>
            </div>
        )
    }
    caculate(){
        let param1 = Number(ReactDOM.findDOMNode(this.refs.firstParam).value);
        let param2 = Number(ReactDOM.findDOMNode(this.refs.secondParam).value);
        if(isNaN(param1)||isNaN(param2)){
            alert("请正确输入参数");
            ReactDOM.findDOMNode(this.refs.firstParam).value = 0;
            ReactDOM.findDOMNode(this.refs.secondParam).value = 0;
            return;
        }
        let operator = ReactDOM.findDOMNode(this.refs.operator).value;
        switch (operator){
            case '+' :
                console.log(this.props)
                this.props.plus(param1,param2);
                break;
            case '-' :
                this.props.minus(param1,param2);
                break;
            case '*' :
                this.props.multiply(param1,param2);
                break;
            case '/' :
                this.props.divide(param1,param2);
                break;
            default:
                break;
        }
    }
}
export default Calculator = connect(
    (state) => ({calculator: state.calculator}),
    {
        plus: CalculatorActions.plus,
        minus: CalculatorActions.minus,
        multiply: CalculatorActions.multiply,
        divide: CalculatorActions.divide
    }
)(Calculator);