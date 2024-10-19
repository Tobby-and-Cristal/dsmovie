import { ReactComponent as GithubIcon } from 'assents/img/github.svg';
import './styles.css';

function NavBar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Tobby-and-Cristal/dsmovie">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p>/devsuperor</p>
                        </div>

                    </a>
                </div>
            </nav>
        </header>
    );

}

export default NavBar;