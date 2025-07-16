import "./index.css";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/index.jsx";
import DevLinks from "../assets/DevLinks.png";
import AgendaSemanal from "../assets/AgendaSemanal.png";
import CatalogoHoteis from "../assets/CatalogoHoteis.png";
import MoviePB from "../assets/MoviePB.png";
import CadastroLogin from "../assets/CadastroLogin.png";
import PortalNB from "../assets/PortalNB.png";

export default function Projetos() {
  return (
    <main>
      <Header />

      <div className="title-project">
        <h2>Meus Projetos</h2>
      </div>

      <div className="projects">
        <div className="DevLinks">
          <img src={DevLinks} alt="Projeto DevLinks" />

          <section>
            <h3>DevLinks</h3>
            <p>
              Um mini portfólio que eu fiz no curso da RocketSeat, muito útil
              para colocar links de projetos, redes sociais e portfólios.
            </p>

            <a
              href="https://nybertocco.github.io/minhasredes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ver Projeto</button>
            </a>
          </section>
        </div>

        <div className="AgendaSemanal">
          <img src={AgendaSemanal} alt="Projeto Agenda Semanal" />

          <section>
            <h3>Agenda Semanal</h3>
            <p>
              Cronograma de horários e dias da semana, pode ser usado para
              diversas empresas públicas como, academias, clínicas e etc.
            </p>
            <a
              href="https://nybertocco.github.io/Agenda/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ver Projeto</button>
            </a>
          </section>
        </div>

        <div className="CatalogoHoteis">
          <img src={CatalogoHoteis} alt="Projeto Catálogo de Hotéis" />

          <section>
            <h3>Catálogo de Hotéis</h3>
            <p>
              Projeto para cadastrar hotéis para aluguel, e ao mesmo tempo
              avaliação e classificação de hotéis.
            </p>
            <a
              href="https://nybertocco.github.io/hoteis-catalogo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ver Projeto</button>
            </a>
          </section>
        </div>

        <div className="MoviePB">
          <img src={MoviePB} alt="Projeto Catálogo de Filmes" />

          <section>
            <h3>MoviePB</h3>
            <p>
              Catálogo de filmes, para listar e visualizar filmes que estão em
              alta, sinopse, classificação e data.
            </p>
            <a
              href="https://nybertocco.github.io/moviepb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ver Projeto</button>
            </a>
          </section>
        </div>

        <div className="CadastroLogin">
          <img src={CadastroLogin} alt="Cadastro de Login" />

          <section>
            <h3>FormTest</h3>
            <p>
              Cadastro de Login, para entrar em sites, aplicativos, se cadastrar
              em alguma plataforma.
            </p>
            <a
              href="https://nybertocco.github.io/formtest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ver Projeto</button>
            </a>
          </section>
        </div>

        <div className="PortalNB">
          <img src={PortalNB} alt="PortalNB" />

          <section>
            <h3>PortalNB</h3>
            <p>
              Portal de notícias do mundo todo, implementando API gnews e com
              uma barra de pesquisa por palavras chave.
            </p>
            <a
              href="https://news-page-1kyh-nybertoccos-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Ver Projeto</button>
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
