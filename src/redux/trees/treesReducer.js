import { ADD_TREE, DELETE_TREE } from "./treeActionTypes"

// let parent_id = 1;
let lastTreeId = 1;
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

// const initialState = [
//     {
//         tree_id: 1,
//         // parent_id: 1,
//         // node_id: 1
//     }
// ]

const initialState = [
    {
        tree_id: 1,
        // parent_id: 1,
        // node_id: 1
    }
]

const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TREE:
            return [
                ...state,
                {
                    tree_id: ++lastTreeId
                    // parent_id: action.payload.parent_id,
                }
            ];
        case DELETE_TREE: return (
            // ...state,
            // numOfCakes: state.numOfCakes - action.payload 
            state.filter(tree => tree.tree_id !== action.payload.tree_id)
        );
        default: return state
    }
}

export default nodeReducer
