import './App.scss';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { IoIosPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <section className='home'>
        <div className='home-container'>
          <h1>Olá, eu sou a Raiane Fox</h1>
          <p>Transformo projetos em soluções digitais únicas.</p>
          <div className='btns'>
            <button style={{ background: 'transparent', borderStyle: 'solid', borderWidth: 2, borderColor: '#678e1d', color: '#678e1d' }}>MOSTRAR PERFIL</button>
            <button>SAIBA MAIS</button>
          </div>
          <div className='btns-links'>
            <button style={{ backgroundColor: '#1f2328' }}>
              <FaGithub />
            </button>
            <button style={{ backgroundColor: '#0a66c2' }}>
              <FaLinkedinIn />
            </button>
            <button style={{ backgroundColor: '#008069' }}>
              <FaWhatsapp />
            </button>
            <button style={{ backgroundColor: '#f60161' }}>
              <FaInstagram />
            </button>
          </div>
          <SlArrowDown className='arrow-bottom' />
        </div>
      </section>
      <section className='contato'>
        <div className='contato-container'>
          <div className='contato-container-card'>
            <div className='card'>
              <span className='span-icone'><IoIosPin /></span>
              <div>
                <span>Endereço</span>
                <span className='span-n'>Rua Sapotí - 104, Brasil</span>
              </div>
            </div>
            <div className='card'>
              <span className='span-icone'><FaPhoneAlt /></span>
              <div>
                <span>Número de telefone</span>
                <span className='span-n'>+5567982143134</span>
              </div>
            </div>
            <div className='card'>
              <span className='span-icone'><MdEmail /></span>
              <div>
                <span>E-mail</span>
                <span className='span-n'>rainefox@gmail.com</span>
              </div>
            </div>
          </div>
          <h1>Vamos trabalhar juntos</h1>
          <form>
            <div className='input-group'>
              <input type='text' placeholder='Nome' />
              <input type='text' placeholder='Sobrenome' />
            </div>
            <div className='input-group'>
              <input type='email' placeholder='Endereço de email' />
            </div>
            <div className='input-group'>
              <input type='text' placeholder='Assunto' />
            </div>
            <div className='input-group'>
              <textarea placeholder='Sua mensagem'>
              </textarea>
            </div>
            <button>Enviar Formulário</button>
          </form>
        </div>
      </section>
      <footer>
        <p>2024 Raiane Fox copyright todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
