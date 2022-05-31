import { combineReducers } from 'redux'
import nodeReducer from './node/nodeReducer'
import treesReducer from './trees/treesReducer'
import incomeReducer from './income/incomeReducer'

const rootReducer = combineReducers({
    nodes: nodeReducer,
    trees: treesReducer,
    incomes: incomeReducer
})

export default rootReducer
