import Carousel from 'react-bootstrap/Carousel'

// IMAGES
import ovenBefore from '../images/ovenBefore.jpg'
import ovenAfter from '../images/ovenAfter.jpg'
import stoveBefore from '../images/stoveBefore.jpg'
import stoveAfter from '../images/stoveAfter.jpg'


export default function GalleryPage(props) {
    return (
        <main className="GalleryPage">
            <h1>Gallery</h1>
            <Carousel >

                <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={ ovenBefore }
                        alt="First slide"
                        />
                </Carousel.Item>

                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ ovenAfter }
                        alt="Second slide"
                        />
                </Carousel.Item>

                <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={ stoveBefore }
                        alt="First slide"
                        />
                </Carousel.Item>

                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={ stoveAfter }
                        alt="Second slide"
                        />
                </Carousel.Item>

            </Carousel>
        </main>
    )
}