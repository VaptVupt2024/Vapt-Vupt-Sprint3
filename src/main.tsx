import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Indicador_Desenvolvimento from './Pages/Indicador_Desenvolvimento/Indicador_Desenvolvimento.tsx'

createRoot(document.getElementById('root')!).render(
    <Indicador_Desenvolvimento>
        <App />
    </Indicador_Desenvolvimento>
)
