import React from 'react'
import Table from '../Table/Table';

const ItemTable = ({ item }) => {
    const {name, price, stock, id} = item
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td style={{display: 'flex', justifyContent:'space-evenly'}}><i style={{cursor:'pointer'}}class="bi bi-trash-fill"></i> <i style={{cursor:'pointer'}}class="bi bi-pencil-square"></i></td>
        </tr>

    );
}

export default ItemTable

