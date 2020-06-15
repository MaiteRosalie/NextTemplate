import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';

import { Button } from '../../../components';

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
  z-index: 0;
`;

const text = ['An', 'unforgettable', 'experience', 'break', 'Join', 'the', 'community.'];

export const CTA = () => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };
  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={100}>
      <Wrapper as="section">
        <Background src="./images/footer-image.png" alt="mountains background" />
        <Flex
          flexWrap="wrap"
          m="auto"
          className="container"
          py={[5, 8]}
          alignItems="center"
          css={{ position: 'relative' }}
        >
          <Text
            width={[1, 8 / 12, 9 / 12]}
            px={2}
            fontFamily="heading"
            textAlign={['center', 'left', 'left']}
          >
            <Text as="h4" fontSize={[4, 5, '44px']} mb={[1, 2]}>
              {text.map((el, i) =>
                el === 'break' ? (
                  <br key={el} />
                ) : (
                  <Box
                    as="span"
                    key={el}
                    color={i > 3 ? 'green500' : 'white'}
                    css={{
                      transition: `opacity 300ms 0.${i}s`,
                      opacity: animated ? '1' : '0',
                    }}
                  >{`${el} `}</Box>
                )
              )}
            </Text>
          </Text>
          <Box
            width={[1, 4 / 12, 3 / 12]}
            p={2}
            css={{
              transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 300ms cubic-bezier(0.4, 0, 0.2, 1) `,
              opacity: animated ? '1' : '0',
              transform: animated ? 'translateX(0px)' : 'translateX(20px)',
            }}
          >
            <Button width={1} my={1} maxWidth="300px" m="auto" rounded href="/contact">
              Contact Us
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
              <a href="tel:1(877)498-4344" style={{ textDecoration: 'none' }}>
                +1 202 555 0164
              </a>
            </Text>
          </Box>
        </Flex>
      </Wrapper>
    </VisibilitySensor>
  );
};
