import "./App.css";
import WeatherPanel from "./Components/WeatherPanel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 7em;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 900px;
  height: 550px;
  background-color: white;
  border-radius: 15px;
`;

function App() {
  return (
    <Container>
      <WeatherPanel />
    </Container>
  );
}
export default App;
