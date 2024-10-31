// import PropTypes from 'prop-types'
import Offer from '../Offer/Offer';

// В компоненте Listing
interface ListingProps {
    items: {
        listing_id: number;
        url: string;
        MainImage: string;
        title: string;
        currency_code: string;
        price: string;
        quantity: number;
    }[];
}

function Listing(props: ListingProps) {
    const { items } = props;
    const processedItems = items.map(item => {
        const title = item.title && item.title.length > 50 ? item.title.substring(0, 50) + "…" : item.title;
        return {
            ...item,
            title,
        };
    });

    return (
        <div className='item-list'>
            {processedItems.map(item => <Offer key={item.listing_id} item={item} />)}
        </div>
    )
}

// Listing.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       currency_code: PropTypes.string,
//       price: PropTypes.string,
//       url: PropTypes.string,
//       listing_id: PropTypes.number,
//       quantity: PropTypes.number,
//       MainImage: PropTypes.string,
//     })
//   ).isRequired,
// }

export default Listing;
