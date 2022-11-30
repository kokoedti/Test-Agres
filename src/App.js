import ItemCard from './components/item-card/item-card';
import EditItemCard from './components/edit-item-card/edit-item-card';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  let array = [
    {
      id: 1,
      name: 'nama',
      sku: 'SKU',
      description :'description',
    },
    {
      id: 2,
      name: 'nama2',
      sku: 'SKU2',
      description :'description2',
    },
  ]

  let dataEdit = null

  const [listData, setListData] = useState(array)
  const [removeData, setRemoveData] = useState([])
  const [isEdited, setIsEdited] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [editForm, setFormEdit] = useState()
  const navigate = useNavigate()
  
  const AddProduct = (param) => {
    const data =  {
      id: param,
      name: `Nama ${param}`,
      sku: `SKU ${param}`,
      description : `Description ${param}`,
    }

    setListData([
      ...listData,
      data
    ])

    array = listData
  }

  const deleteData = (item) => {
    console.log(item)
    setRemoveData([
      ...removeData,
      item
    ])

    let index = listData.findIndex((data) => data.id === item.id)
    setListData([
      ...listData.slice(0, index),
      ...listData.slice(index + 1)
    ])
  }

  const editData = (item) => {
    
    setIsEdited(true)
    dataEdit = item
    setFormEdit(dataEdit)
    console.log(dataEdit)

  }

  const saveChanges = (editItem) => {
    if(!isSaved){
      setIsEdited(false)
      dataEdit = null
      setFormEdit(dataEdit)
      console.log(editItem)
      array.map(item => {
        if(item.id === editItem.id){
          item.name = editItem.formValue.name ? editItem.formValue.name: item.name
          item.sku = editItem.formValue.sku ? editItem.formValue.sku : item.sku
          item.description = editItem.formValue.description ? editItem.formValue.description : item.description
        }
        return item
      })
      setListData(array)
    }



  }

  const cancelChanges = () => {
    if(!isSaved){
      setIsEdited(false)
      dataEdit = null
      setFormEdit(dataEdit)
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => AddProduct(listData.length + 1)}>
          Tambah
        </button>

        <button onClick={() => navigate('/' , { replace: true })}>
          Keluar
        </button>
      </header>
      <div>
        {   
          listData.map((item) => {
            return  <ItemCard key={item.id} product={item} setDeleteEvent={deleteData} setEditEvent={editData}></ItemCard>
          })
        }
      </div>
      {
        isEdited && <EditItemCard items={editForm} setSaveEvent={saveChanges} setCancelEvent={cancelChanges}></EditItemCard>
      }

    </div>
  );
}

export default App;
