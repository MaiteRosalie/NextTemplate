import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';

import { Button } from '../components';

const Wrapper = styled(Image)`
  position: relative;
`;

const Background = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const inputProps = {
  as: 'input' as 'input',
  my: 1,
  required: true,
  p: 1,
  width: 1,
  bg: 'white500',
  color: '#0f0b40',
};

export const CTA = () => (
  <Wrapper as="section">
    <Background src="./static/images/footer-image.jpg" alt="mountains background" />
    <Flex flexWrap="wrap" m="auto" maxWidth="1200px" py={[5, 8]} alignItems="center">
      <Text
        width={[1, 8 / 12, 9 / 12]}
        px={2}
        fontFamily="heading"
        textAlign={['center', 'left', 'left']}
      >
        <Text as="h1" fontSize={[4, 5, '44px']} mb={[1, 2]} color="white">
          An unforgettable experience
        </Text>
        <Text as="p" fontSize={[3, 4, '44px']} color="green500">
          Join the community.
        </Text>
      </Text>
      <Box width={[1, 4 / 12, 3 / 12]} p={2}>
        <Button width={1} my={1} minHeight="45px" maxWidth="300px" m="auto" rounded>
          CONTACT US
        </Button>
        <Text
          as="p"
          fontSize={[1, 2]}
          color="white500"
          textAlign="center"
          lineHeight="heading"
          mt={3}
          maxWidth="400px"
          mx="auto"
        >
          Do you have a question? <br />
          Contact Us.
        </Text>
      </Box>
    </Flex>
  </Wrapper>
);
