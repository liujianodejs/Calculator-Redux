/**
 * Created by liujia on 17/1/3.
 */
import Constants from '../Constants/Constants';

const calculator = (state = 0,action = {}) => {
    switch (action.type) {
        case Constants.PLUS:
            return action.param1 + action.param2;
        case Constants.MINUS:
            return action.param1 - action.param2;
        case Constants.MULTIPLY:
            return action.param1 * action.param2;
        case Constants.DIVIDE:
            return action.param1 / action.param2;
        default:
            return state;
    }
}

export default calculator;
