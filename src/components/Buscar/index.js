import { Contenedor, Input, Button } from './styles'
import React, { useState, useRef } from 'react'

const Buscar = () => {
    const [buscar, Guardar] = useState('')
    const reference = useRef(null);

    const handleChange = () =>{
        Guardar(reference.current.value)
    }
    const haledClick= () =>{
        Guardar("")
    }
    return (
        <Contenedor>
            <Input type='text' name='buscar' value={buscar} onChange={handleChange} ref={reference} />
            <Button onClick={haledClick}>Buscar</Button>
        </Contenedor>
    )
}

export default Buscar
