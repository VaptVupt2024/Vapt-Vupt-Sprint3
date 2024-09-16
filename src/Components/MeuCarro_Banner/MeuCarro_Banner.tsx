import './MeuCarro_Banner.css'

interface Propriedades {
    titulo: string;
    link: string;
    image: string;
}

const MeuCarro_Banner = (props: Propriedades) => {
    return (
        <>
            <figure className='MeuCarro_Banner' tabIndex={3}>
                <img src={props.image} alt={props.titulo}/>
                <div>
                    <h2>{props.titulo}</h2>
                    <a href={props.link}>Visitar site</a>
                </div>
            </figure>
        </>
    )
}

export default MeuCarro_Banner