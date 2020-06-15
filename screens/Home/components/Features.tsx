import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Box, Text, Flex } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';

import { themeProptypes } from '../../../theme';
import { IconCard, IconPaper, IconMoney, IconTimer } from './Icons';

const dash = keyframes`
  0%{
    stroke-dashoffset: 37px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
`;

const Icon = styled(Box)<{ theme: themeProptypes }>`
  box-shadow: 0 17px 30px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ${({ theme }) => `
  color: ${theme.colors.blue500};
`}

  & svg {
    stroke-dasharray: 36px, 38px;
    transition: opacity 300ms;
    stroke: CurrentColor;
    fill: none;
    stroke-width: 0.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    paint-order: markers fill stroke;
    z-index: 4;
    stroke-dashoffset: 0px;
  }
  &:hover:before {
    opacity: 0.7;
  }
  &:hover {
    ${({ theme }) => `
    color: white;
  `}
  }
  &:hover svg {
    animation: ${dash} 450ms linear 0s 1 alternate;
  }

  &:before {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: opacity 450ms;
    ${({ theme }) => `
    background: linear-gradient(
      45deg,
      ${theme.colors.blue200} 0%,
      ${theme.colors.green500} 100%
    );
    color: ${theme.colors.gray200};
  `}
  }
`;

const svgProps = {
  width: ['40px', '40px', '50px'],
  height: ['40px', '40px', '50px'],
  viewBox: '0 0 13.229166 13.229166',
};
const content = [
  {
    title: 'Time Icon',
    description: 'Praesent accumsan consectetur eros. Pellentesque non.',
    icon: <IconTimer {...svgProps} />,
  },
  {
    title: 'Money Icon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <IconMoney {...svgProps} />,
  },
  {
    title: 'Credit Card Icon',
    description: 'Pellentesque nec cursus metus. Nunc quis urna sapien',
    icon: <IconCard {...svgProps} />,
  },
  {
    title: 'Document Icon',
    description: 'Morbi vestibulum aliquam blandit. Donec faucibus tellus quis erat.',
    icon: <IconPaper {...svgProps} />,
  },
];

export const Features = withTheme(({ theme, ...etc }, { theme: themeProptypes }) => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };
  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={150}>
      <Box as="section" {...etc}>
        <Flex flexWrap="wrap" m="auto" className="container" py={[5, '5rem']}>
          {content.map((el, i) => (
            <Box key={el.title} width={[1 / 2, 1 / 4]} p={2}>
              <Icon
                width={['70px', '70px', '125px']}
                height={['70px', '70px', '125px']}
                bg="white"
                mb={4}
                mx="auto"
                theme={theme}
              >
                {el.icon}
              </Icon>
              <Text
                as="h4"
                color="gray500"
                fontFamily="heading"
                width={1}
                fontSize={[2, 2, 3]}
                textAlign="center"
              >
                {el.title}
              </Text>
              <Text
                fontSize={[1, 1, 2]}
                mt={1}
                width={1}
                textAlign="center"
                css={{
                  transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                  transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s`,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'translateX(0px)' : 'translateX(20px)',
                }}
              >
                {el.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </VisibilitySensor>
  );
});
