import "../styles/ShoppingItem.css";
import "../datas/sneakersList";
import CustomerReview from './CustomerReview';
import { useState } from "react";

function SneakerItem({sneakerData,onAddToCart}){
    const[showReviews,setShowReviews]=useState(false);
    const{nom, marque,prix,style,esthetique, confort, image,bestSeller=false}=sneakerData;

    const formatReview=(reviewType, scaleValue)=>{
        const scaleType=reviewType==='confort' ? '😌' : '💖';
        const icons=scaleType.repeat(scaleValue);
        return `${reviewType}: ${icons} (${scaleValue}/5`;
    };

    const handleToggleAvis=()=>{
        setShowReviews(!showReviews);
    };

    const handleAddToCart=()=>{
        console.log('🛒Donnee transmises:', sneakerData);
        onAddToCart(sneakerData);
    };

    return(
<div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
        {bestSeller && <span className="best-seller-badge">Top vente</span>}   
        <img src={image} className="sneaker-image"/>
            
            <h3>{nom}</h3>
            <p className="sneaker-brand">{marque}</p>
            <p className="sneaker-price">{prix}</p>
            <p className="sneaker-style">{style}</p>
            <div className="sneaker-review">
                <button onClick={handleToggleAvis}>
                    {showReviews ? 'Masquer les avis' : 'Voir les avis'}
                </button>
                {showReviews && (
                    <div className="avis-details">
                        <CustomerReview reviewType='esthetistme' scaleValue={esthetique} />
                        <CustomerReview reviewType='confort' scaleValue={confort}/>
                    </div>
                )}
            </div>

            <div className="sneaker-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    🛒Ajouter au panier
                </button>
            </div>    

        </div>
    );

}

export default SneakerItem;