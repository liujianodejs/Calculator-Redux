/**
 * Created by liujia on 17/1/3.
 */
import CalculatorConstants from '../Constants/Constants'

const CalculatorActions = {

    plus(param1,param2){
        return {
            type: CalculatorConstants.PLUS,
            param1,
            param2
        };
    },
    minus(param1,param2){
        return {
            type: CalculatorConstants.MINUS,
            param1,
            param2
        };
    },
    multiply(param1,param2){
        return {
            type: CalculatorConstants.MULTIPLY,
            param1,
            param2
        };
    },
    divide(param1,param2){
        return {
            type: CalculatorConstants.DIVIDE,
            param1,
            param2
        };
    }
}


export default CalculatorActions;
