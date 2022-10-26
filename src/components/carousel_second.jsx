import Carousel from 'react-bootstrap/Carousel';
import figma from '../img/figma.png';
import bootstrap from '../img/bootstrap.png';
import ts from '../img/typescript.png';
import angularjs from '../img/angular.png';
import git from '../img/git.png';
import java from '../img/java.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/carousel.css';

function CarouselSecond() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={figma}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bootstrap}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ts}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={angularjs}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={git}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={java}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSecond;