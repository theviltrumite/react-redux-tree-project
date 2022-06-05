import { ADD_NODE, CHANGE_INCOME_INFO, UNREG_NODE, DELETE_NODE, REG_NODE } from './actionTypes'

let lastId = 1;

const initialState = [
    {
        tree_id: 1,
        parent_id: 1,
        node_id: 1,
        username: "",
        self_income: 0,
        total_income: 0,
        registered: true
    }
]

const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NODE:
            return [
                ...state,
                {
                    tree_id: action.payload.tree_id,
                    parent_id: action.payload.parent_id,
                    node_id: action.payload.node_id,
                    username: "",
                    self_income: 0,
                    total_income: 0,
                    registered: true
                }
            ]
        case DELETE_NODE:
            if (action.payload.node_id === 1) {
                return (state.filter(node => node.tree_id !== action.payload.tree_id));
            }
            else if (action.payload.node_id !== 1) {
                return (
                    state.filter(node => node.tree_id !== action.payload.tree_id || node.node_id !== action.payload.node_id)
                );
            }
        case CHANGE_INCOME_INFO:
            return state.map(node => (node.tree_id === action.payload.tree_id && node.node_id === action.payload.node_id) ?
                { ...node, username: action.payload.username, self_income: action.payload.self_income, total_income: action.payload.self_income + action.payload.sumOfYourChildsTotals, registered: action.payload.registration } : node);
        case UNREG_NODE:
            return state.map(node => (node.tree_id === action.payload.tree_id && node.node_id === action.payload.node_id) ? { ...node, registered: false } : node);
        case REG_NODE:
            return state.map(node => (node.tree_id === action.payload.tree_id && node.node_id === action.payload.node_id) ? { ...node, registered: true } : node);
        default: return state
    }
}

export default nodeReducer
