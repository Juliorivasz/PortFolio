import { ThemeType } from './styled/themes';

interface MenuMobileProps {
  dissemble: string;
  theme: ThemeType;
  swap: () => void;
}

function MenuMobile({ dissemble, swap, theme }: MenuMobileProps) {
    return ( 
        <section className={`menu__mobile ${dissemble} ${theme === 'LightTheme' ? 'gradient__top' : 'gradient__bot'}`}>
            <ul className='list__nav'>
              <a href={`${window.location.pathname + '#about-me'}`} onClick={swap} ><li className={`item__list ${theme === "LightTheme" ? "w" : "b"}`}>About Me</li></a>
              <a href={`${window.location.pathname + '#skills'}`} onClick={swap}><li className={`item__list ${theme === "LightTheme" ? "w" : "b"}`}>Skills</li></a>
              <a href={`${window.location.pathname + '#projects'}`} onClick={swap}><li className={`item__list ${theme === "LightTheme" ? "w" : "b"}`}>Projects</li></a>
              <a href={`${window.location.pathname + '#contact'}`} onClick={swap}><li className={`item__list ${theme === "LightTheme" ? "w" : "b"}`}>Contact me</li></a>
            </ul>
          </section>
     );
}

export default MenuMobile;