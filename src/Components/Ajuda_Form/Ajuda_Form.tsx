import './Ajuda_Form.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";


const Ajuda_Form = () => {
    return (
        <>
            <form action="https://formsubmit.co/rclauson141@gmail.com" method="POST" className='ajuda_Form' role="form">
                <div>
                    <img src="https://res.cloudinary.com/dr0nki74e/image/upload/v1724891744/lerami/Images/projects/cdirmlnad3k1jrwesngq.jpg"/>
                    <label>
                        <div>
                            <input type="text" id="name" name="name" placeholder='Nome' required role="textbox" aria-label="Digite seu nome" aria-required="true" tabIndex={3}/>
                            <input type="email" id='email' name='email' placeholder='Email' required role="textbox" aria-label="Digite seu email" aria-required="true" tabIndex={3}/>
                        </div>
                        <textarea name="pergunta" id="pergunta" placeholder='Pergunta' tabIndex={3}></textarea>
                    </label>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="mailto:vaptvuptchallenge@gmail.com" tabIndex={3}><MdOutlineEmail size={20} /></a>
                            <a tabIndex={3}><FaWhatsapp size={18} /></a>
                            <a tabIndex={3}><FaInstagram size={18} /></a>
                            <a href="https://youtu.be/ZoeoYKEFKxc?si=5JMdihVcnd5PidSc" tabIndex={3}><AiOutlineYoutube size={22} /></a>
                        </li>
                    </ul>
                    <button type="submit" role="textbox" aria-label="Digite seu email" tabIndex={3}>Enviar</button>
                </div>
            </form>
        </>
    )
}

export default Ajuda_Form