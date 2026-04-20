import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';
import { FaHome,FaPhoneAlt,FaFolder,FaGithub,FaLinkedin  } from "react-icons/fa";
import { Link, Button, Element, Events,animateScroll  } from 'react-scroll';
import { PiReadCvLogoFill } from "react-icons/pi";
import resume from './assets/CV.pdf';


const links = [
  { link: '/about', label:FaHome,class:"linkEdge" },
  { link: '/projects', label: FaFolder,class:"link"},
  { link: '/contact', label: FaPhoneAlt,class:"link"},
  { link: '/github', label: FaGithub,class:"link"},
  { link: '/linkedin', label: FaLinkedin,class:"link"},
  { link: '/resume', label:PiReadCvLogoFill,class:"linkEdge2"}
];

export function HeaderSimple() {
  const [active, setActive] = useState(links[0].link);

  const options = {
    duration: 2500,
    smooth: 'easeOutQuad',
  };
  const scrollTo = (link) => {
    switch(link){
      case "/about":
        animateScroll.scrollToTop(options);
        break;
      case "/projects":
          animateScroll.scrollTo(700); 
          break;
      case "/contact":
        animateScroll.scrollToBottom(options);
        break;

      case "/github":
        window.open("https://github.com/Kubax1", "_blank");
        break;
      case "/linkedin":
        window.open("https://www.linkedin.com/in/jakub-kubisa-8150012b8/", "_blank");
        break;
      case "/resume":
        window.open(resume);
        break;
    }
  };
  //set scroll proper values
  const items = links.map((link) => (
    
    <a
      key={link.label}
      href={link.link}
      className={classes[link.class]}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        
        event.preventDefault();
        setActive(link.link);
        scrollTo(link.link) ;
      }}
    >
      <link.label/>
    </a>
  ));

  return (
    
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          <div className={classes.headerItems}>
          {items} &nbsp;
          </div>

        </Group>
      </Container>
    </header>
  );
}
export default HeaderSimple