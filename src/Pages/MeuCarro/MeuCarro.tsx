import './MeuCarro.css'
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import MeuCarro_Servico from "../../Components/MeuCarro_Servico/MeuCarro_Servico"
import MeuCarro_Tabela from '../../Components/MeuCarro_Tabela/MeuCarro_Tabela'
import MeuCarro_Banner from '../../Components/MeuCarro_Banner/MeuCarro_Banner'
import Logo_icon_porto from '../../assets/Logo_icon_porto/Logo_icon_porto'

const MeuCarro = () => {
    const servicos = [
        {
          imagem: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/servicos_rapidos/akne6w1keqb7g2mylrro',
          titulo: 'Problemas no Veículo',
          desc: 'Seja elétrico, mecânico ou algum mau funcionamento que você não consegue identificar.',
          link: 'https://www.portoseguro.com.br/centros-automotivos-porto-seguro/servicos-para-o-carro',
        },
        {
          imagem: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/servicos_rapidos/imf6cqf1dtb5sboifplq',
          titulo: 'Antes de Viajar',
          desc: 'Na estrada, o automóvel é muito exigido. Por isso, fazer uma revisão é uma boa pedida antes de viajar.',
          link: 'https://www.portoseguro.com.br/centros-automotivos-porto-seguro/servicos-para-o-carro',
        },
        {
          imagem: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/servicos_rapidos/npx6kgknbsce83eafs5u',
          titulo: 'Manutenção Preventiva',
          desc: 'Cuidar do seu veículo é investir em segurança para você e sua família.',
          link: 'https://www.portoseguro.com.br/centros-automotivos-porto-seguro/servicos-para-o-carro',
        },
        {
          imagem: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/servicos_rapidos/rxo3ataexgglc90woibw',
          titulo: 'Revisões por KM',
          desc: 'Todos os veículos precisam fazer revisões periódicas. Aqui você pode contar e confiar nos nossos serviços.',
          link: 'https://www.portoseguro.com.br/centros-automotivos-porto-seguro/servicos-para-o-carro',
        },
    ]
    return (
        <>
        <section>
            <Cabecalho titulo='Meu Carro'/>
            <div className='dentro_section meucarro'>
              <MeuCarro_Tabela/>
              <p className="divide_titulo"><Logo_icon_porto width='34px' height='34px'/>Serviços Porto</p>
                <div className="servicos_rapidos">
                    {servicos.map(servico => 
                    <MeuCarro_Servico
                      key={servico.titulo} 
                      imagem={servico.imagem}
                      titulo={servico.titulo}
                      desc={servico.desc}
                      link={servico.link}
                    />)}
                </div>
                <MeuCarro_Banner 
                  titulo="Envie seu carro a um Centro Automotivo sem esforço." 
                  link="https://centrosautomotivosportoseguro.campanhaporto.com.br/?skin=leva_e_traz" 
                  image="https://centrosautomotivosportoseguro.campanhaporto.com.br/image/theme/banner-leva-e-traz2.png">
                </MeuCarro_Banner>
            </div>
        </section>
        </>
    )
}

export default MeuCarro