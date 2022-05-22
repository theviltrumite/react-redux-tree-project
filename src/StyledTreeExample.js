// /** @jsxRuntime classic */
// /** @jsx jsx */
// import { css, jsx } from '@emotion/react'
// import styled from "@emotion/styled";
// import React from "react";
import 'antd/dist/antd.min.css';
import { Tree, TreeNode } from "react-organizational-chart";
// import "./style/profile-card.css"
import "./style/style.css";
// import pic from "./static/img/pp-avatar.png";
import StyledNode from './StyledNode';

// import { Row, Col, Input, Menu, Dropdown, Button, message, Space } from 'antd';

const StyledTreeExample = () => (
    <Tree
        lineWidth={"2px"}
        lineColor={"black"}
        lineBorderRadius={"10px"}
        label={<StyledNode></StyledNode>}>

        {/* <TreeNode label={<StyledNode></StyledNode>}> */}
        <TreeNode>
            <TreeNode label={<StyledNode></StyledNode>} />
        </TreeNode>
        {/* <TreeNode label={<StyledNode></StyledNode>}>
            <TreeNode label={<StyledNode></StyledNode>}>
                <TreeNode label={<StyledNode></StyledNode>} />
            </TreeNode>
            <TreeNode label={<StyledNode></StyledNode>} />
        </TreeNode>
        <TreeNode label={<StyledNode></StyledNode>}>
            <TreeNode label={<StyledNode></StyledNode>} />
            <TreeNode label={<StyledNode></StyledNode>} />
        </TreeNode> */}
    </Tree>
);

export default StyledTreeExample;
