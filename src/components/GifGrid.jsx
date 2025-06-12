import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); //usefetchgifs sirve para obtener las imagenes y el estado de carga
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )  // Si isLoading es true, muestra el mensaje de carga
            }
            
            
            <div className="card-grid">
                {
                    images.map( ( image ) => (   // Mapeamos las imagenes y las mostramos
                        // Cada imagen es un GifItem, pasamos las props necesarias
                        // Usamos key para identificar cada elemento de la lista

                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
