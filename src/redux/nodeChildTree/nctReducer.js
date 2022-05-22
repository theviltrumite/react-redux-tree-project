import { ADD_TRIPLET, DELETE_TRIPLET } from './actionTypes'

// let parent_id = 1;
let lastId = 1;
// let username = "You";
// const initialState = {
//     child_parent_list: [

//     ]
// }

// const initialState = {
//     node: {
//         parent_id: 1,
//         node_id: 1,
//         // username: "You"
//     }
// }

const initialState = [
    {
        tree_id: 1,
        parent_id: 1,
        node_id: 1
    }
]

const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRIPLET:

            return [
                ...state,
                {
                    tree_id: action.payload.tree_id,
                    parent_id: action.payload.parent_id,
                    node_id: action.payload.node_id
                }
            ]

        // return {
        //     ...state,
        //     node: {
        //         parent_id: action.payload.parent_id,
        //         node_id: ++lastId,
        //     }
        // }

        case DELETE_TRIPLET:
            if (action.payload.node_id === 1) {
                return (state.filter(node => node.tree_id !== action.payload.tree_id));
            }
            else if (action.payload.node_id !== 1) {
                return (
                    // ...state,
                    // numOfCakes: state.numOfCakes - action.payload 
                    state.filter(node => node.tree_id !== action.payload.tree_id || node.node_id !== action.payload.node_id)
                );
            }
        default: return state
    }
}

export default nodeReducer
