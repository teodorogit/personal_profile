import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import escritorio from '../assets/capa.jpg'

const Carrousel = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        const imageStyle = {
            width: '40%', // Garante que a imagem ocupa 100% da largura do contêiner
            height: 'auto', // Mantém a proporção original da imagem
            borderRadius: '8px', // Adiciona bordas arredondadas (opcional)
          };
        return (
            <Slider {...settings}>
              <div>
               <img src={escritorio} alt="" style={imageStyle}/>
              </div>
              <div>
                <h3>Slide 2</h3>
              </div>
              <div>
                <h3>Slide 3</h3>
              </div>
            </Slider>
          );
        };
        
export default Carrousel;
