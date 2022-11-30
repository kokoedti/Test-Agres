import { useEffect, useState } from 'react';
import './edit-item-card.css'

const EditItemCard = ({items, setSaveEvent, setCancelEvent}) => {
    const [formValue, setFormValue] = useState({
        id: 0,
        name: "",
        sku: "",
        description: ""
    })

    useEffect(() => {
        setFormValue({
            id: items.id,
            name: items.name,
            sku: items.sku,
            description: items.description
        })
    }, [items])

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormValue({
            [name]: value
        })
        console.log("form value", formValue)
    }

    const saveChange = () => {
        console.log(formValue)
        setSaveEvent({
            id: items.id,
            formValue
        })
    }

    const cancelChange = () => {
        setCancelEvent('cancel')
    }

    return (
        <form className='canvas'>
            <div className='dynamic-row'>
                <label>
                    Name:
                    <input
                        className='input'
                        name="name"
                        type="text"
                        value={formValue.name}
                        onChange={handleInputChange} />
                </label>
            </div>
            <div className='dynamic-row'>
                <label>
                    SKU:
                    <input
                        className='input'
                        name="sku"
                        type="text"
                        value={formValue.sku}
                        onChange={handleInputChange} />
                </label>
            </div>
            
            <div className='dynamic-row'>
                <label>
                    Description:
                    <input
                        className='input'
                        name="description"
                        type="text"
                        value={formValue.description}
                        onChange={handleInputChange} />
                </label>
            </div>
            <div className='dynamic-row'>
                <div className='flex-item-column'>
                    <button onClick={() => saveChange()}>
                        Edit
                    </button>
                </div>
                <div className='flex-item-column'>
                    <button onClick={() => cancelChange()}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditItemCard;