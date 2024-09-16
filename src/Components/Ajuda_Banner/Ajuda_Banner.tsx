import './Ajuda_Banner.css'

interface Propriedades {
  titulo: string;
  link: string;
  image: string;
}

const Ajuda_Banner = (props: Propriedades) => {
  return (
    <figure className='ajuda_Banner'> 
      <div>
        <h2>{props.titulo}</h2>
        <a href={props.link} aria-label={`Visitar o site ${props.titulo}`} tabIndex={3}>Visitar site</a> 
      </div>
      <img src={props.image} alt={props.titulo} />
    </figure>
  )
}

export default Ajuda_Banner