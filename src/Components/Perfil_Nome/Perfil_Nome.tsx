import './Perfil_Nome.css'

interface Propriedades {
  nome: string;
  image?: string;
}

const Perfil_Nome = (props: Propriedades) => {

  return (
    <div className="perfil_Nome" aria-label={`Nome do usuário: ${props.nome}`}>
        <img src={props.image ? props.image : "https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/perfil/pwg87n8iulpln7z6xdhg"} alt={`Foto de perfil de ${props.nome}`}/>
        {props.nome}
    </div>
  );
};

export default Perfil_Nome;