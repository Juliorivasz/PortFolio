import Carousel from 'react-bootstrap/Carousel';
import html5 from '../img/html5.png';
import css3 from '../img/css3.png';
import javascript from '../img/js.png';
import reactjs from '../img/react-js.png';
import github from '../img/github.png';
import photoshop from '../img/photoshop.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/carousel.css';
import nodexpress from '../img/nodeExpress.png';

function CarouselFirst() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={html5}
          alt="slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={css3}
          alt="slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={javascript}
          alt="slide"
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
          src={reactjs}
          alt="slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={github}
          alt="slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photoshop}
          alt="slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nodexpress}
          alt="slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFirst;