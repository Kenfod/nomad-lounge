import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: cyan;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Nomad Lounge</H1>
        <Button onClick={() => alert("Check-In details")}>Check In</Button>
        <Button onClick={() => alert("Check-Out details")}>Check Out</Button>

        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
