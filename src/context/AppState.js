import { useState, useEffect } from 'react'
import AppContext from './AppContext'
import { dataProductos } from '../api/Data'

const AppState = ({children}) => {
    const [articulos, guardarArticulo] = useState([])
    const [ carrito, guardarCarrito ] = useState([])
    useEffect(()=> {
        guardarArticulo(dataProductos)
    }, [])
    
    const agregarAlCarro = (producto) => {
        if (carrito.find(x => x.id === producto.id)) {
          const carritoCopia = carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
          guardarCarrito(carritoCopia)
          
          return
        }
    
        guardarCarrito([...carrito, {...producto, cantidad: 1}])
      }
    
    const eliminarDelCarro = producto => {
        const nuevaLista = carrito.filter(item => item.id !== producto.id)
        guardarCarrito(nuevaLista)
    }

    return (
        <AppContext.Provider value={{articulos: articulos, carrito: carrito, agregarAlCarro, eliminarDelCarro}}>{children}</AppContext.Provider>
    )
}

export default AppState
