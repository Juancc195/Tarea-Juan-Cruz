import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import { Contenedor, Button, ListaArticulos, UL, LI, DeleteButton } from './styles'

export const Carro = ({
    cantidad,
    productos,
    eliminarDelCarro
}) => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto
    
    const eliminar = (x) => {
        if(window.confirm('¿Desea eliminar el producto?')){
            eliminarDelCarro(x)
        }
    }

    return (
        <Contenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Button onClick={handleMostrarCarro}>Carro</Button>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos>
                        <UL >
                            {
                                productos.map(x => {
                                    return (
                                        <LI
                                            key={x.id}
                                        >
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><DeleteButton onClick={()=> eliminar(x)}>X</DeleteButton> {x.nombre}</span>
                                            <span>({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong></span>
                                        </LI>
                                    )
                                })
                            }
                            <LI>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </LI>
                            <LI>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </LI>
                            <LI>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </LI>
                        </UL>
                    </ListaArticulos>
            }
        </Contenedor>

    )
}