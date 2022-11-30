import './item-card.css';

const ItemCard = ({product, setDeleteEvent, setEditEvent}) => {
    
    const  deleteMe = () => {
        setDeleteEvent(product)
    }

    const editMe = () => {
        setEditEvent(product)
    }


    return (
        <div className='canvas'>
            <div className='dynamic-row'>
                <div className='flex-item-column'>
                    <span>{product.name}</span>
                </div>
                <div className='flex-item-column'>
                    <span> {product.sku}</span>
                </div>
            </div>
            <div className='dynamic-row'>
                <div className='flex-item-row'>
                        <p>{product.description}</p>
                </div>
            </div>
            <div className='dynamic-row'>
                <div className='flex-item-column'>
                    <button onClick={() => deleteMe()}>
                        Delete
                    </button>
                </div>
                <div className='flex-item-column'>
                    <button onClick={() => editMe()}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;