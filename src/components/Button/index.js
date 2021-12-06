import { useContext } from 'react'
import { ButtonStile } from './styles'
import AppContext from "../../context/AppContext";
export const Button = ({children, prod}) => {
    
    ///////////utilizamos el context para extraer la funcion
    const { agregarAlCarro } = useContext(AppContext)
    const clickAgregar = (prod) =>{
        agregarAlCarro(prod)
    }
    return (
        <ButtonStile onClick={() => clickAgregar(prod)} >{children}</ButtonStile>
    )
}
