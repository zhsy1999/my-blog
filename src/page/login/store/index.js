
//只有一个export
import reducer from './reducer';

//有多个export *全部导出
import * as actionCreators from './actionCreators'
import * as constants from './constants'

export { reducer, actionCreators, constants };