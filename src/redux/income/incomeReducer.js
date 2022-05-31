import { ADD_INCOME, DELETE_INCOME } from './incomeActionTypes'

// let lastId = 1;

const initialState = [
    {
        tree_id: 1,
        node_id: 1,
        name: "",
        self_income: 0,
        total_income: 0
    }
]

const incomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INCOME:
            return [
                ...state,
                {
                    tree_id: action.payload.tree_id,
                    node_id: action.payload.node_id,
                    name: action.payload.name,
                    self_income: action.payload.self_income,
                    total_income: action.payload.total_income
                }
            ]
        case DELETE_INCOME:
            if (action.payload.node_id === 1) {
                return (state.filter(node => node.tree_id !== action.payload.tree_id));
            }
            else if (action.payload.node_id !== 1) {
                return (
                    state.filter(node => node.tree_id !== action.payload.tree_id || node.node_id !== action.payload.node_id)
                );
            }
        default: return state
    }
}

export default incomeReducer