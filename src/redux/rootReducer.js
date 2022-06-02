import { combineReducers } from 'redux'
import nodeReducer from './node/nodeReducer'
import treesReducer from './trees/treesReducer'

const rootReducer = combineReducers({
    nodes: nodeReducer,
    trees: treesReducer
    // incomes: incomeReducer
})

export default rootReducer
