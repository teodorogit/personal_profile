import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import voluntario1 from '../assets/voluntario1.jpg'
import voluntari2 from '../assets/voluntario2.jpg'
import caroussel1 from '../assets/carrousel1.jpg'
import caroussel2 from '../assets/caroussel2.jpg'
import voluntario3 from '../assets/voluntario3.jpg'

import './Carrousel.css'

const Carrousel = () => {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

        return (
          <div className='containerStyle'>
            <Slider {...settings}>
              <div>
               <img src={voluntario1} alt="" className='imageStyle'/>
              </div>
              <div>
              <img src={caroussel1} alt="" className='imageStyle'/>
              </div>
              <div>
               <img src={caroussel2} alt="" className='imageStyle'/>
              </div>
              <div>
               <img src={voluntari2} alt="" className='imageStyle'/>
              </div>
              <div>
               <img src={voluntario3} alt="" className='imageStyle'/>
              </div>
            </Slider>
            </div>
          );
        };
        
export default Carrousel;
