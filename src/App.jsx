import { useState } from 'react';
import './App.css';
import './css/animate.css';
import AboutMe from './components/about_me';
import Contact from './components/contact';
import Nav from './components/nav';
import Projects from './components/projects';
import Skills from './components/skills';
import { ThemeProvider } from 'styled-components';
import { Themes } from './components/styled/themes';
import Footer from './components/footer';
import Whatsapp from './components/whatsapp';
import MenuMobile from './components/menuMobile';
import Home from './components/home';

function App() {

  const [changes, setChanges] = useState("not-active");
  const [dissemble, setDissemble] = useState('dissemble');
  const urlLink = window.location.pathname;
  // document.addEventListener("scroll",(function(){window.scrollY>=window.innerHeight/2? setActive('') : setActive('dissemble')}));

  const swap = () => {
    if (dissemble === 'dissemble') {
      setChanges('active');
      setDissemble('');
    } else {
      setDissemble('dissemble');
      setChanges('not-active');
    }
  }

  const [switchTheme, setSwitchTheme] = useState('LightTheme');

  return (
    <ThemeProvider
      theme={Themes[switchTheme]}>
      <div className={`App ${switchTheme}`} >
        <header className='App__header' id='main'>
          <Nav
            urlLink={urlLink}
            diss={dissemble}
            dissemble={swap}
            setDissemble={setDissemble}
            theme={switchTheme}
            changes={changes}
            setChanges={setChanges} />
          <Home
            theme={switchTheme}
            setTheme={setSwitchTheme}
          />
          <MenuMobile
            dissemble={dissemble}
            swap={swap}
            theme={switchTheme}
          />
        </header>
        <main>
          <AboutMe
            dissemble={dissemble}
            theme={switchTheme} />
          <Skills
            theme={switchTheme} />
          <Projects
            theme={switchTheme} />
          <Contact
            theme={switchTheme} />
        </main>
        <Footer />
        <Whatsapp />
      </div>
    </ThemeProvider>
  );
}

export default App;
