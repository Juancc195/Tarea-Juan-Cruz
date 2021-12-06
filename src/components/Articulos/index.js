import { Articulo } from "../Articulo";
import { Container } from './styles';
import { useContext } from 'react'
import AppContext from "../../context/AppContext";
import Buscar from '../Buscar';

export const Articulos = () => {

    const { articulos } = useContext(AppContext)
    const buscar = useContext(Buscar)

    return (
        <Container >
            {
                articulos.map(prod => 
                    <Articulo key={prod.id} prod={prod} />
                )
            }
        </Container>
    )
}