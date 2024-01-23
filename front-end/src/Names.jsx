import React, { useEffect, useState } from 'react'
import dataArray from '../../data/data'

const processData = (data) => {
    return data;
}

function Names() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const processedData = processData(dataArray);
        setData(processedData);
    }, []);

    if (!data) {
        return <div>Cargando Datos.....</div>
    }
  return (
    <div>{data.map((item) => (
        <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    ))}</div>
  )
}

export default Names