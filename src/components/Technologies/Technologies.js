import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills & Technologies</SectionTitle>
    <SectionText>
      I am always searching for new ways to push boundaries of website interactivity and design.  
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Technogies</ListTitle>
          <ListParagraph>
          React/Redux, JavaScript ES6, Node.js, Html/CSS<br />
          Express.js, VUE.js, TypeScript, Next.js<br />
          C++, RESTful API’s, AJAX
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IDE’S & DATABASES</ListTitle>
          <ListParagraph>
          SQL, Git, Github, Visual Studio Code <br />
          Notepad++, Sublime Text <br />
          MySQL, MongoDB 
          
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SOFT SKILLS</ListTitle>
          <ListParagraph>
          Bilingual Proficiency:  <br />
          English(Professional) & Hindi(Native)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
