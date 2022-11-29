import Carousel from 'react-bootstrap/Carousel';
import figma from '../img/figma.png';
import bootstrap from '../img/bootstrap.png';
import ts from '../img/typescript.png';
import angularjs from '../img/angular.png';
import git from '../img/git.png';
import java from '../img/java.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/carousel.css';
import mongodb from '../img/mongodb.png';

function CarouselSecond() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={figma}
          alt="slide two"
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
          alt="slide two"
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
          alt="slide two"
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
          alt="slide two"
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
          alt="slide two"
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
          alt="slide two"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mongodb}
          alt="slide two"
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