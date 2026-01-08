import React from 'react';
import TableBs from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';

const Table = ({items}) => {
    console.log(items); //x6 [{name: 'Buzo nike', description: 'buzo comodo ideal para invierno', stock: 8, price: 65000}]
    return (
        <TableBs striped bordered hover>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th style={{textAlign:'center'}}>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <ItemTable item={item} key={i}/>
                ))}
            </tbody>
        </TableBs>



    );
}

export default Table;