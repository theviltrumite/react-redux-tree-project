import 'antd/dist/antd.min.css';
import { Tree, TreeNode } from "react-organizational-chart";
import "../style/style.css";
import StyledNode from '../StyledNode';
import { useSelector } from 'react-redux'


const TreeNodes = (prop) => {
    let state_nodes = useSelector(state => state.nodes);
    let nodeIDsOfYourTree = [];
    let parentChildList = [];
    // console.log(idOfTreeIBelong);
    for (let a = 0; a <= state_nodes.length; a++) {
        if (state_nodes[a] !== undefined) {
            if (state_nodes[a]["tree_id"] === prop.tree_id) {
                let element = state_nodes[a].node_id;
                nodeIDsOfYourTree.push(element);
            }
        }
    }

    for (let k = 0; k <= state_nodes.length; k++) {
        if (state_nodes[k] !== undefined) {
            let thisNode = state_nodes[k].node_id;
            let childsOfThisNode = [];
            for (let n = 0; n < state_nodes.length; n++) {
                if (thisNode === state_nodes[n].parent_id) {
                    childsOfThisNode.push(state_nodes[n].node_id);
                }
            }
            parentChildList.push({ thisNode: childsOfThisNode });
        }
    }

    function isYourNode(dual) {
        return dual.thisNode === 
    }

    let numberOfNodesThatHasRootAsParent = 0;
    function outputChilds(tree_id, node_id) {
        let arrayOfKeysOfObjects;
        for (let obje in liste) {
            let index = parentChildList.find(element, );
            parentChildList.forEach(element => {
                
            });
        //     if (Object.hasOwnProperty.call(object, object)) {
        //         const element = object[object];
                
        //     }
        }
        if (parentChildList[]) { //eğer daha fazla childı kalmadıysa yap burayı
            for(let i = 0; i < thisLayersNodeNumber; i++) {
                return (<TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNode[c]}></StyledNode>}>
                    
                </TreeNode>)
            }
        }
        outputChilds();
    }

<TreeNode label={<StyledNode tree_id={prop} node_id={thisNode}></StyledNode>}>
<TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNode[c]}></StyledNode>}>
outputChilds();
</TreeNode>
</TreeNode>

<TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNode[c]}></StyledNode>}>

</TreeNode>

    return (
        <TreeNode label={<StyledNode tree_id={state_trees[i].tree_id} node_id={state_nodes[j].parent_id}></StyledNode>}>

        </TreeNode>
    );
}

export default TreeNodes;