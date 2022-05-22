import { useSelector } from "react-redux";

const ChildInfoGiver = (prop) => {
    let state_nodes = useSelector(state => state.nodes);
    // console.log("Type of state_nodes is: " + typeof(state_nodes));
    // console.log("LETS SEE: " + state_nodes[0]["node_id"]);
    // const state_trees = useSelector(state => state.trees);
    // let theBiggestNumberInYourTree = 0;
    // console.log(state_nodes[0].tree_id);

    // console.log("This is tree_id prop: " + prop);

    // const node_id = props.id;
    // console.log(typeof(node_id));
    // console.log(node_id);
    // console.log(node_id);
    // const child_node = props.node_id + 1;

    // for (let i = 0; i < state_trees.length; i++) {
    //     const element = state_trees[i].tree_id;
    //     if (element === props.tree_id) {

    //     }
    // }

    let nodeIDsOfYourTree = [];
    // console.log(idOfTreeIBelong);
    for (let a = 0; a <= state_nodes.length; a++) {
        if (state_nodes[a] !== undefined) {
            if (state_nodes[a]["tree_id"] === prop) {
                let element = state_nodes[a].node_id
                nodeIDsOfYourTree.push(element);
            }
        }
    }

    // for (const node in state_nodes) {
    //     console.log("This is the node tree_id: " + node["tree_id"]);
    //     if (node["tree_id"] === prop) {
    //         let element = node["node_id"];
    //         console.log("This is the element: " + element);
    //         nodeIDsOfYourTree.push(element);
    //     }
    // }

    let large = nodeIDsOfYourTree[0];
    // console.log("THIS IS LARGE: " + large);

    for (let j = 1; j <= nodeIDsOfYourTree.length; ++j) {
        if (nodeIDsOfYourTree[j] > large) {
            large = nodeIDsOfYourTree[j];
        }
    }

    let child_node = large + 1;
    return child_node;
}

export default ChildInfoGiver;