import React from "react";
import 'antd/dist/antd.min.css';
import { Input } from 'antd';
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";
// import "./style/profile-row.css"
import "./style/style.css";
import pic from "./static/img/pp-avatar.png";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid red;
  background-color: rgb(230,230,230);
  width: 200px;
  height: 150px;
  border: 0px solid ;
  display: inline-block;
  margin: 0px;
`;

const StyledTreeExample = () => (
    <Tree
        lineWidth={"2px"}
        lineColor={"black"}
        lineBorderRadius={"10px"}
        label={<StyledNode>
            {/* <div className="site-row-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <row title="row title" bordered={false}>
                            row content
                        </row>
                    </Col>
                    <Col span={8}>
                        <row title="row title" bordered={false}>
                            row content
                        </row>
                    </Col>
                    <Col span={8}>
                        <row title="row title" bordered={false}>
                            row content
                        </row>
                    </Col>
                </Row>
            </div> */}
            <div className="card">
                <div className="row">
                    <img alt="profile" src={pic} />
                    <Input placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="sef">Self  :  </label>
                    <Input placeholder="Your money" />
                </div>
                <div className="row">
                    <label htmlFor="total">Total:  </label>
                    <Input placeholder="Family money" />
                </div>
            </div>
        </StyledNode>}>

        <TreeNode label={<StyledNode>
            <div className="card">
                <div className="row">
                    <img alt="profile" src={pic} />
                    <Input placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="sef">Self  :  </label>
                    <Input placeholder="Your money" />
                </div>
                <div className="row">
                    <label htmlFor="total">Total:  </label>
                    <Input placeholder="Family money" />
                </div>
            </div>
        </StyledNode>}>
            <TreeNode label={<StyledNode>
                <div className="card">
                    <div className="row">
                        <img alt="profile" src={pic} />
                        <Input placeholder="Name" />
                    </div>
                    <div className="row">
                        <label htmlFor="sef">Self  :  </label>
                        <Input placeholder="Your money" />
                    </div>
                    <div className="row">
                        <label htmlFor="total">Total:  </label>
                        <Input placeholder="Family money" />
                    </div>
                </div>
            </StyledNode>} />
        </TreeNode>
        <TreeNode label={<StyledNode>
            <div className="card">
                <div className="row">
                    <img alt="profile" src={pic} />
                    <Input placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="sef">Self  :  </label>
                    <Input placeholder="Your money" />
                </div>
                <div className="row">
                    <label htmlFor="total">Total:  </label>
                    <Input placeholder="Family money" />
                </div>
            </div>
        </StyledNode>}>
            <TreeNode label={<StyledNode>
                <div className="card">
                    <div className="row">
                        <img alt="profile" src={pic} />
                        <Input placeholder="Name" />
                    </div>
                    <div className="row">
                        <label htmlFor="sef">Self  :  </label>
                        <Input placeholder="Your money" />
                    </div>
                    <div className="row">
                        <label htmlFor="total">Total:  </label>
                        <Input placeholder="Family money" />
                    </div>
                </div>
            </StyledNode>}>
                <TreeNode label={<StyledNode>
                    <div className="card">
                        <div className="row">
                            <img alt="profile" src={pic} />
                            <Input placeholder="Name" />
                        </div>
                        <div className="row">
                            <label htmlFor="sef">Self  :  </label>
                            <Input placeholder="Your money" />
                        </div>
                        <div className="row">
                            <label htmlFor="total">Total:  </label>
                            <Input placeholder="Family money" />
                        </div>
                    </div>
                </StyledNode>} />
                <TreeNode label={<StyledNode>
                    <div className="card">
                        <div className="row">
                            <img alt="profile" src={pic} />
                            <Input placeholder="Name" />
                        </div>
                        <div className="row">
                            <label htmlFor="sef">Self  :  </label>
                            <Input placeholder="Your money" />
                        </div>
                        <div className="row">
                            <label htmlFor="total">Total:  </label>
                            <Input placeholder="Family money" />
                        </div>
                    </div>
                </StyledNode>} />
            </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode>
            <div className="card">
                <div className="row">
                    <img alt="profile" src={pic} />
                    <Input placeholder="Name" />
                </div>
                <div className="row">
                    <label htmlFor="sef">Self  :  </label>
                    <Input placeholder="Your money" />
                </div>
                <div className="row">
                    <label htmlFor="total">Total:  </label>
                    <Input placeholder="Family money" />
                </div>
            </div>
        </StyledNode>}>
            <TreeNode label={<StyledNode>
                <div className="card">
                    <div className="row">
                        <img alt="profile" src={pic} />
                        <Input placeholder="Name" />
                    </div>
                    <div className="row">
                        <label htmlFor="sef">Self  :  </label>
                        <Input placeholder="Your money" />
                    </div>
                    <div className="row">
                        <label htmlFor="total">Total:  </label>
                        <Input placeholder="Family money" />
                    </div>
                </div>
            </StyledNode>} />
            <TreeNode label={<StyledNode>
                <div className="card">
                    <div className="row">
                        <img alt="profile" src={pic} />
                        <Input placeholder="Name" />
                    </div>
                    <div className="row">
                        <label htmlFor="sef">Self  :  </label>
                        <Input placeholder="Your money" />
                    </div>
                    <div className="row">
                        <label htmlFor="total">Total:  </label>
                        <Input placeholder="Family money" />
                    </div>
                </div>
            </StyledNode>} />
        </TreeNode>
    </Tree>
);

export default StyledTreeExample;
