import logo from '../assets/logosneaker.jpg';
import panier from '../assets/panier.png';
import '../styles/Banner.css';

function Banner()
{
return(
    <header className="banner">
               
        <img src={logo} className="banner-logo" alt="Logo Sneakers"/>
         
        <img src={panier} className="panier"/>
        
        <div className="banner-content">
            <h1>Sneakers store</h1>
            <p>Trouverz les sneakers de vos reves</p>
        </div>


    </header>
);
}
export default Banner;