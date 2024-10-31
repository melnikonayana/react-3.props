import Listing from '../Listing/Listing';
import etsy from '../data/etsy.json';
import '../css/main.css';

function LIstOffers() {
    const processedItems = etsy.map(item => ({
        listing_id: item.listing_id || 0,
        url: item.url || "#",
        MainImage: item.MainImage ? item.MainImage.url_570xN : 'https://серебро.рф/img/placeholder.png',
        title: item.title || "No description",
        currency_code: item.currency_code || "-",
        price: item.price || "-",
        quantity: item.quantity || 0,
    }));

    return (
        <div className='container'>
            <Listing items={processedItems}></Listing>
        </div>
    );
}

export default LIstOffers;
