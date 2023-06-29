import "./App.css";
import WeatherPanel from "./Components/WeatherPanel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  width: 900px;
  height: 500px;
  background-color: rgb(242, 242, 242);
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
