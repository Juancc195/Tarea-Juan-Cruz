import { useContext } from 'react'
import { Carro } from '../Carro'
import Buscar from '../Buscar';
import {Nav} from './styles'
import AppContext from "../../context/AppContext";

export const Navbar = () => {
    /////utilizamos el context para extraer las funcionalidades
    const { carrito, eliminarDelCarro } = useContext(AppContext)
   
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    return (
        <Nav color='red'>
            <p>Logo</p>
            <Buscar/>
            <Carro cantidad={cantidad} productos={carrito} eliminarDelCarro={eliminarDelCarro} />
        </Nav>
    )
}