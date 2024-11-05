import './App.scss';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

function App() {
  return (
    <div className="App">
      <section className='home'>
        <div className='home-container'>
          <h1>Olá, eu sou a Meguinha Fox</h1>
          <p>Transformo projetos em soluções digitais únicas.</p>
          <div className='btns'>
            <button>SHOW PROFILE</button>
            <button>KNOW MORE</button>
          </div>
          <div className='btns-links'>
            <button style={{backgroundColor: '#1f2328'}}>
              <FaGithub />
            </button>
            <button style={{backgroundColor: '#0a66c2'}}>
              <FaLinkedinIn />
            </button>
            <button style={{backgroundColor: '#008069'}}>
              <FaWhatsapp />
            </button>
            <button style={{backgroundColor: '#f60161'}}>
              <FaInstagram />
            </button>
          </div>
          <SlArrowDown className='arrow-bottom'/>
        </div>
      </section>
    </div>
  );
}

export default App;
