// import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      {/* navbar */}
      <div className="myBg">
        <NavigationBar />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
