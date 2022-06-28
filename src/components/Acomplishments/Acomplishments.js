import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text1: 'UDEMY', text: 'FULL REACT DEVELOPER'},
  { text1: 'EDUCATIVE', text: 'BECOME A FRONT-END DEVELOPER', },
  { text1: 'EDUCATIVE', text: 'LEARN Node.js', },
  { text1: 'COURSERA', text: 'OOPs in Java', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>CERTIFICATIONS</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text1}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
