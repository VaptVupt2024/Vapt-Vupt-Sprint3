import './MeuCarro_Servico.css'

interface Propriedades {
    link: string;
    imagem: string;
    titulo: string;
    desc: string;
}

const MeuCarro_Servico = (props: Propriedades) => {
    return (
        <>
        <a href={props.link} className='MeuCarro_Servico' tabIndex={3} aria-label={props.titulo}>
            <img src={props.imagem} alt={props.titulo} className='MeuCarro_Servico_img'/>
            <h2>{props.titulo}</h2>
            <p className='MeuCarro_Servico_desc'>{props.desc}</p>
        </a>
        </>
    )
}

export default MeuCarro_Servico