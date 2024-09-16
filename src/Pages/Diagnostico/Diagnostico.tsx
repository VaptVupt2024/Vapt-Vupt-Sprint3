import Cabecalho from "../../Components/Cabecalho/Cabecalho"
/* import Diagnostico_Input from '../../Components/Diagnostico_Input/Diagnostico_Input'
import Diagnostico_Exemplos from '../../Components/Diagnostico_Exemplos/Diagnostico_Exemplos'  */
import DiagnosticoChat from "../../Components/Diagnostico_Chat/Diagnostico_Chat" 

const Diagnostico: React.FC = () => {
    return (
        <>
        <section style={{overflow: 'visible'}}>
            <Cabecalho titulo='Diagnóstico'/>
{/*             <Diagnostico_Exemplos/>
            <Diagnostico_Input/>  */}
            <DiagnosticoChat />
        </section>
        </>
    )
}

export default Diagnostico