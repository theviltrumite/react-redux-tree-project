import store from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addTree, addNode } from '../redux'

const downloadObjectAsJson = (exportObj, exportName) => {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    // var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.getState()));
    // var dlAnchorElem = document.getElementById('downloadAnchorElem');
    // dlAnchorElem.setAttribute("href", dataStr);
    // dlAnchorElem.setAttribute("download", "app-state.json");
    // dlAnchorElem.click();
}

const UtilityBtns = () => {
    const dispatch = useDispatch();

    // let state_trees = useSelector(state => state.trees);

    const addNodeAndTree = () => {
        dispatch(addTree());

        let state_trees = store.getState().trees;
        // console.log("second member of state_trees is: "+state_trees[4].tree_id);
        let large = state_trees[0]["tree_id"];
        // console.log(large);
        // console.log("Type od state_trees is: " + typeof (state_trees));

        for (let j = 0; j <= state_trees.length; j++) {
            // console.log(state_trees[j]["tree_id"]);
            if (state_trees[j] !== undefined) {
                if (state_trees[j]["tree_id"] > large) {
                    large = state_trees[j]["tree_id"];
                }
            }
        }
        dispatch(addNode(large));

        // console.log(typeof(state_trees[1]["tree_id"]));

        // for (const tree in state_trees) {
        //     // if (Object.hasOwnProperty.call(object, tree)) {
        //     //     const element = object[tree];
        //     // }
        //     // console.log("Tree Ids are: " + tree.tree_id);
        //     // console.log("this the tree_id"+tree["tree_id"]);
        //     // console.log(typeof(tree.tree_id));
        //     if (tree["tree_id"] > large) {
        //         // console.log(tree["tree_id"]);
        //         large = tree["tree_id"];
        //         console.log("This is the large shit:" + large);
        //     }
        // }
        // dispatch(addNode(large));
    }

    return (
        <div className='smdiv'>
            <button className='appbtn save' onClick={() => downloadObjectAsJson(store.getState(), "app-state")}>SAVE</button>
            <br />
            <br />
            <button className='appbtn download' onClick={addNodeAndTree}>ADD</button>
        </div >
    );
}

export default UtilityBtns;