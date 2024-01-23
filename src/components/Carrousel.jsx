import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import voluntario1 from '../assets/voluntario1.jpg'
import voluntari2 from '../assets/voluntario2.jpg'
import caroussel1 from '../assets/carrousel1.jpg'
import caroussel2 from '../assets/caroussel2.jpg'
import voluntario3 from '../assets/voluntario3.jpg'

const Carrousel = () => {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

        const containerStyle = {
          width: '35%',
          height:'50%',
          margin: '20px 0px 20px',
        };

        const imageStyle = {
            margin: '0 auto',
            width: '70%',
            height:'750px', // Garante que a imagem ocupa 100% da largura do contêiner
            borderRadius: '8px', // Adidciona bordas arredondadas (opcional)
          };
        return (
          <div style={containerStyle}>
            <Slider {...settings}>
              <div>
               <img src={voluntario1} alt="" style={imageStyle}/>
              </div>
              <div>
              <img src={caroussel1} alt="" style={imageStyle}/>
              </div>
              <div>
               <img src={caroussel2} alt="" style={imageStyle}/>
              </div>
              <div>
               <img src={voluntari2} alt="" style={imageStyle}/>
              </div>
              <div>
               <img src={voluntario3} alt="" style={imageStyle}/>
              </div>
            </Slider>
            </div>
          );
        };
        
export default Carrousel;
