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
            let thisNode = state_nodes[k];
            let childsOfThisNodeIDinThisTree = [];
            for (let n = 0; n < state_nodes.length; n++) {
                if (thisNode["node_id"] === state_nodes[n].parent_id && thisNode["tree_id"] === state_nodes[n]["tree_id"]) {
                    childsOfThisNodeIDinThisTree.push(state_nodes[n].node_id);
                }
            }
            parentChildList.push({ thisNode: childsOfThisNodeIDinThisTree });
        }
    }

    // function isYourNode(dual) {
    //     return dual.thisNode === 
    // }

    let numberOfNodesThatHasRootAsParent = 0;
    let rootTreesOfThisTree = [];

    function outputChilds(tree_id) {
        let arrayOfKeysOfObjects;
        for (let obje in liste) {
            // let index = parentChildList.find(element,);
            parentChildList.forEach(element => {

                if (element.childsOfThisNodeIDinThisTree !== []) {

                    for (let t = 0; t <= childsOfThisNodeIDinThisTree.length; t++) {
                        return (
                            <TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNodeIDinThisTree[c]} />}>
                                {outputChilds()}
                            </TreeNode>
                        )
                    }


                } else if (element.childsOfThisNodeIDinThisTree === []) {
                    return (
                        <TreeNode label={<StyledNode tree_id={tree_id} node_id={childsOfThisNodeIDinThisTree[c]} />}></TreeNode>
                    );
                }

            });
            //     if (Object.hasOwnProperty.call(object, object)) {
            //         const element = object[object];

            //     }
        }
        // if (parentChildList[]) { //eğer daha fazla childı kalmadıysa yap burayı
        //     for (let i = 0; i < thisLayersNodeNumber; i++) {
        //         return (<TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNode[c]}></StyledNode>}>

        //         </TreeNode>)
        //     }
        // }
        // outputChilds();
    }

    {/* <TreeNode label={<StyledNode tree_id={prop} node_id={thisNode}></StyledNode>}>
<TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNode[c]}></StyledNode>}>
outputChilds();
</TreeNode>
</TreeNode>

<TreeNode label={<StyledNode tree_id={prop} node_id={childsOfThisNode[c]}></StyledNode>}>

</TreeNode> */}

    return (
        // <TreeNode label={<StyledNode tree_id={state_trees[i].tree_id} node_id={state_nodes[j].parent_id}></StyledNode>}>

        // </TreeNode>
        outputChilds(prop.tree_id)
    );
}

export default TreeNodes;