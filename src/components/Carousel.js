import { Carousel } from "react-bootstrap";
import Viking from "../assets/banner/vikingsbanner.jpg";
import SteinGate from "../assets/banner/Steingatebanner.jpg";
import Northman from "../assets/banner/northmanbanner.jpg";
import OverLord from "../assets/banner/overlordbanner.jpg";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img className="imgBanner d-block w-100" src={Viking} alt="Vikings" />
        <Carousel.Caption className="textH">
          <h3>Vikings (2013)</h3>
          <p>Kisah seorang petani yang menjadi Raja legendaris</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="imgBanner d-block w-100" src={SteinGate} alt="Stein Gate" />
        <Carousel.Caption className="textH">
          <h3>Steins Gate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="imgBanner d-block w-100" src={OverLord} alt="Third slide" />
        <Carousel.Caption className="textH">
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="imgBanner d-block w-100" src={Northman} alt="Northman" />
        <Carousel.Caption className="textH">
          <h3>fourth slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
