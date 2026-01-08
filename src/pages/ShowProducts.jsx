import { inputAdornmentClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { axiosInstance} from '../services/axios.config';
import Table from '../components/Table/Table'
import ItemTable from '../components/ItemTable/ItemTable';

const ShowProducts = () => {

    const [items, setItems] = useState([])

    useEffect (() => {
        axiosInstance.get('/')
            .then(r => {
                if(r.status=== 200){
                    setItems(r.data)
                }else{
                    throw new Error(`[${r.status}]Error en la solicitud`)
                }
                })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Productos en Sistema</h1>
            <div className='container mt-3'>
                {
                    items.length > 0 ?
                    <Table items={items} />
                    :
                    <h2 style={{textAlign:'center'}}>No hay productos en el sistema</h2>

                }
            </div>
        </div>
    );
}

export default ShowProducts;