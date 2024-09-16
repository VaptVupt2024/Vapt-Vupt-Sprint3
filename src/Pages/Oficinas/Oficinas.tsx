import './Oficinas.css'
import Cabecalho from "../../Components/Cabecalho/Cabecalho"
import Oficina_Barra_Busca from '../../Components/Oficina_Barra_Busca/Oficina_Barra_Busca'
import Oficina_Oficina from "../../Components/Oficina_Oficina/Oficina_Oficina";
import Oficina_titulo_filtro from '../../Components/Oficina_titulo_filtro/Oficina_titulo_filtro'
import { useState } from 'react';
import Oficina_Oficina_Detalhes from '../../Components/Oficina_Oficina_Detalhes/Oficina_Oficina_Detalhes';
import React from 'react';

const Oficinas = () => {
  const [selectedOficinaId, setSelectedOficinaId] = useState<string | null>(null);
    const oficinaData = [
      {
        id: "1",
        imagem1: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/oficinas/ce9ultwqzla5jjn04n7g',
        nome: 'CENTRO AUTOMOTIVO - BELA VISTA - RUA PEDROSO',
        localizacao: 'R PEDROSO, 394 - BELA VISTA - SAO PAULO - SP',
        referência: 'AO LADO DO SUPERMERCADO MASTER',
        telefone: '(11) 2364-5797',
        CEP: '01322-010',
        atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS',
        oficinaServices: [
          {
            services: ['ALINHAMENTO DE DIREÇÃO', 'AR-CONDICIONADO (LIMPEZA E ASSEPSIA)', 'BALANCEAMENTO DE RODAS', 'BATERIA', 'CABOS', 'CALIBRAGEM DE PNEUS', 'CAMBAGEM/CÁSTER', 'CHECK-UP CENTRO AUTOMOTIVO', 'CORREIAS DO MOTOR', 'CRISTALIZAÇÃO DO PÁRA-BRISA*', 'DIAGNÓSTICO DA BATERIA E ALTERNADOR*', 'DIAGNÓSTICO DA INJEÇÃO ELETRÔNICA*', 'DIAGNÓSTICO DA SUSPENSÃO E DIREÇÃO*', 'DIAGNÓSTICO DE ÓLEO DE MOTOR', 'DIAGNÓSTICO DO SISTEMA DE ARREFECIMENTO*', 'DIAGNÓSTICO DO SISTEMA DE FREIO*', 'DIAGNÓSTICO E RODÍZIO DE PNEUS*', 'EMBREAGEM', 'ESCAPAMENTOS', 'EXTINTOR', 'FILTROS', 'PALHETAS LIMPADOR PÁRA-BRISA', 'PNEUS', 'REGULAGEM DO FOCO DOS FARÓIS*', 'REPARO DE PNEUS', 'REVISÃO DE LUZES*', 'TROCA DE LÂMPADAS EXTERNAS', 'TROCA DE PASTILHA DE FREIO DIANTEIRO']
          }
        ],
      },
      {
        id: "2",
        imagem1: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/oficinas/yrb6s1yhvfdl4mwbfewz',
        nome: 'CENTRO AUTOMOTIVO - RIO BRANCO',
        localizacao: 'AV RIO BRANCO, 1448 - CAMPOS ELISEOS - SAO PAULO - SP',
        referência: '',
        telefone: '(11) 3221-6562',
        CEP: '01205-001',
        atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS',
        oficinaServices: [
          {
            services: ['ALINHAMENTO DE DIREÇÃO', 'AR-CONDICIONADO (LIMPEZA E ASSEPSIA)', 'BALANCEAMENTO DE RODAS', 'BATERIA', 'CALIBRAGEM DE PNEUS', 'CHECK-UP CENTRO AUTOMOTIVO', 'CORREIAS DO MOTOR', 'CRISTALIZAÇÃO DO PÁRA-BRISA*', 'DIAGNÓSTICO DA BATERIA E ALTERNADOR*', 'DIAGNÓSTICO DA INJEÇÃO ELETRÔNICA*', 'DIAGNÓSTICO DA SUSPENSÃO E DIREÇÃO*', 'DIAGNÓSTICO DO AMORTECEDOR E MOLAS*', 'DIAGNÓSTICO DO SISTEMA DE ARREFECIMENTO*', 'DIAGNÓSTICO DO SISTEMA DE FREIO*', 'DIAGNÓSTICO DO ÓLEO DO MOTOR E FILTROS*', 'DIAGNÓSTICO E RODÍZIO DE PNEUS*', 'EMBREAGEM', 'ESCAPAMENTOS', 'EXTINTOR', 'FILTROS', 'PALHETAS LIMPADOR PÁRA-BRISA', 'PNEUS', 'REGULAGEM DO FOCO DOS FARÓIS', 'REPARO DE PNEUS', 'TROCA DE LÂMPADAS EXTERNAS', 'TROCA DE PASTILHA DE FREIO DIANTEIRO']
          }
        ],
      },
      {
        id: "3",
        imagem1: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/oficinas/dmt507oubejpefwakdfo',
        nome: 'CENTRO AUTOMOTIVO - CANINDE GLOBAL',
        localizacao: 'AV CRUZEIRO DO SUL, 607 - CANINDE - SAO PAULO - SP',
        referência: '',
        telefone: '(11) 3313-5005',
        CEP: '01109-000',
        atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS',
        oficinaServices: [
          {
            services: ['ALINHAMENTO DE DIREÇÃO', 'AR-CONDICIONADO (LIMPEZA E ASSEPSIA)', 'BALANCEAMENTO DE RODAS', 'BATERIA', 'CABOS', 'CALIBRAGEM DE PNEUS', 'CAMBAGEM/CÁSTER', 'CHECK-UP CENTRO AUTOMOTIVO', 'CORREIAS DO MOTOR', 'CRISTALIZAÇÃO DO PÁRA-BRISAS', 'DIAGNÓSTICO DA BATERIA E ALTERNADOR*', 'DIAGNÓSTICO DA INJEÇÃO ELETRÔNICA*', 'DIAGNÓSTICO DA SUSPENSÃO E DIREÇÃO*', 'DIAGNÓSTICO DO SISTEMA DE ARREFECIMENTO*', 'DIAGNÓSTICO DO SISTEMA DE FREIO*', 'DIAGNÓSTICO DO ÓLEO DO MOTOR E FILTROS*', 'DIAGNÓSTICO E RODÍZIO DE PNEUS*', 'EMBREAGEM', 'ESCAPAMENTOS', 'EXTINTOR', 'FILTROS', 'PALHETAS LIMPADOR PÁRA-BRISA', 'PNEUS', 'REGULAGEM DO FOCO DOS FARÓIS*', 'REPARO DE PNEUS', 'REVISÃO DE LUZES*', 'TROCA DE LÂMPADAS EXTERNAS', 'TROCA DE PASTILHA DE FREIO DIANTEIRO']
          }
        ],
      },
      {
        id: "4",
        imagem1: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/oficinas/qgsk4liselx8yy2qlcv9',
        nome: 'CENTRO AUTOMOTIVO - JARDINS',
        localizacao: 'AV BRIGADEIRO LUIZ ANTONIO, 3383 - JARDIM PAULISTANO - SAO PAULO - SP',
        referência: '',
        telefone: '(11) 3051-8468',
        CEP: '01402-001',
        atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS',
        oficinaServices: [
          {
            services: ['ALINHAMENTO DE DIREÇÃO', 'AR-CONDICIONADO (LIMPEZA E ASSEPSIA)', 'BALANCEAMENTO DE RODAS', 'BATERIA', 'CABOS', 'CALIBRAGEM DE PNEUS', 'CAMBAGEM/CÁSTER', 'CORREIAS DO MOTOR', 'CRISTALIZAÇÃO DO PÁRA-BRISA*', 'DIAGNÓSTICO DA BATERIA E ALTERNADOR*', 'DIAGNÓSTICO DA INJEÇÃO ELETRÔNICA*', 'DIAGNÓSTICO DA SUSPENSÃO E DIREÇÃO*', 'DIAGNÓSTICO DO SISTEMA DE ARREFECIMENTO*', 'DIAGNÓSTICO DO SISTEMA DE FREIO*', 'DIAGNÓSTICO DO ÓLEO DO MOTOR E FILTROS*', 'DIAGNÓSTICO E RODÍZIO DE PNEUS*', 'EMBREAGEM', 'ESCAPAMENTOS', 'EXTINTOR', 'FILTROS', 'PALHETAS LIMPADOR PÁRA-BRISA', 'PNEUS', 'REGULAGEM DO FOCO DOS FARÓIS*', 'REPARO DE PNEUS', 'REPARO VIDRO ELÉTRICO', 'REVISÃO DE LUZES*', 'TROCA DE LÂMPADAS EXTERNAS', 'TROCA DE PASTILHA DE FREIO DIANTEIRO']
          }
        ],
      },
      {
        id: "5",
        imagem1: 'https://res.cloudinary.com/dr0nki74e/image/upload/f_auto,q_auto/v1/vapt-vupt/oficinas/ezadedshphsiuciedfeh',
        nome: 'CENTRO AUTOMOTIVO - VILA MARIANA',
        localizacao: 'AV LINS DE VASCONCELOS, 2474 - VILA MARIANA - SAO PAULO - SP',
        referência: 'PRÓXIMO AO SUPERMERCADO DIA',
        telefone: '(11) 3294-1040',
        CEP: '04112-001',
        atendimento: 'DE SEG. A SEX. DAS 08:00 ÀS 18:00, SÁB. DAS 08:00 ÀS 12:00, EXCETO DOM. E FERIADOS',
        oficinaServices: [
          {
            services: ['ALINHAMENTO DE DIREÇÃO', 'AR-CONDICIONADO (LIMPEZA E ASSEPSIA)', 'BALANCEAMENTO DE RODAS', 'BATERIA', 'CABOS', 'CALIBRAGEM DE PNEUS', 'CAMBAGEM/CÁSTER', 'CHECK-UP CENTRO AUTOMOTIVO', 'CORREIAS DO MOTOR', 'CRISTALIZAÇÃO DO PÁRA-BRISA*', 'DIAGNÓSTICO DA BATERIA E ALTERNADOR*', 'DIAGNÓSTICO DA INJEÇÃO ELETRÔNICA*', 'DIAGNÓSTICO DA SUSPENSÃO E DIREÇÃO*', 'DIAGNÓSTICO DE SUSPENSÃO', 'DIAGNÓSTICO DO AMORTECEDOR E MOLAS*', 'DIAGNÓSTICO DO SISTEMA DE ARREFECIMENTO*', 'DIAGNÓSTICO DO SISTEMA DE FREIO*', 'DIAGNÓSTICO DO ÓLEO DO MOTOR E FILTROS*', 'DIAGNÓSTICO E RODÍZIO DE PNEUS*', 'DIREÇÃO', 'EMBREAGEM', 'ESCAPAMENTOS', 'EXTINTOR', 'FILTROS', 'PALHETAS LIMPADOR PÁRA-BRISA', 'PNEUS', 'REGULAGEM DO FOCO DOS FARÓIS*', 'REPARO DE PNEUS', 'REPARO VIDRO ELÉTRICO', 'REVISÃO DE LUZES*', 'TROCA DE LÂMPADAS EXTERNAS', 'TROCA DE PASTILHA DE FREIO DIANTEIRO']
          }
        ],
      },
      // ... outras oficinas
    ];
    const handleOficinaClick = (id: string) => {
      setSelectedOficinaId(prevId => (prevId === id ? null : id));
    };
    
    return (
        <>
            <section>
                <Cabecalho titulo='Oficinas' />
                <div className='dentro_section'>
                    <Oficina_Barra_Busca />
                    <Oficina_titulo_filtro />
                    <div className="oficinas">
                      {oficinaData.map(oficina => (
                        <React.Fragment key={oficina.id}>
                          <Oficina_Oficina
                            oficina={oficina}
                            onOficinaClick={handleOficinaClick}
                          />
                          {selectedOficinaId === oficina.id && (
                            <Oficina_Oficina_Detalhes
                              key={`${oficina.id}-detalhes`}
                              oficina={oficina}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Oficinas