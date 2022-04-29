// import logo from './logo.svg';
import './App.css';
import styled from "@emotion/styled";
import StyledTreeExample from "./StyledTreeExample";
// import BasicTreeExample from "./BasicTreeExample";

const Title = styled.h2`
  margin-top: 5rem;
  :first-of-type {
    margin-top: 0;
  }
`;

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Title>Redux Tree Project</Title>
      <StyledTreeExample />
    </div>
  );
}

export default App;
