import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';
import { FaStar } from 'react-icons/fa';

import { Card } from '../../../components';

const content = [
  {
    photo: './images/josephine.jpg',
    name: 'Kashif Wheatley',
    description: `Fusce justo lorem, finibus ut suscipit in, consectetur in diam. Vestibulum ante ipsum primis in faucibus orci.`,
  },
  {
    photo: './images/anas.jpg',
    name: 'Aariz Montoya',
    description: `Morbi at laoreet leo. Ut in pulvinar ex, vitae tempor nibh. Donec ullamcorper libero non lacus porttitor ultrices.`,
  },
  {
    photo: './images/allina.jpg',
    name: 'Rueben Childs',
    description: `Nulla convallis fringilla placerat. Duis imperdiet efficitur efficitur. Duis vel dolor lacus.`,
  },
  {
    photo: './images/albert.jpg',
    name: 'Lukasz Knapp',
    description: `Proin blandit convallis mi, sit amet efficitur nisl sagittis id. Proin maximus sed nisl vitae consequat.`,
  },
];

const Thumbnail = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 !important;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
`;

export const Testimonials = () => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };

  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
      <Box as="section" py={[5, '5rem']}>
        <Box
          m="auto"
          maxWidth="1200px"
          p={2}
          css={{
            transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 300ms cubic-bezier(0.4, 0, 0.2, 1) `,
            opacity: animated ? '1' : '0',
            transform: animated ? 'translateX(0px)' : 'translateX(20px)',
          }}
        >
          <Text
            as="h4"
            textAlign="center"
            fontSize={[5, 6]}
            fontFamily="heading"
            color="gray500"
            mb={2}
          >
            Donec dignissim {` `}
            <Text as="span" color="blue500">
              rutrum diam
            </Text>
          </Text>
          <Text as="p" fontSize={[2, 3]} textAlign="center" maxWidth="800px" m="auto">
            Vivamus faucibus neque at velit lobortis dapibus. Proin sit amet libero quis dolor
            maximus varius. Proin blandit convallis mi,.
          </Text>
        </Box>

        <Flex flexWrap="wrap" m="auto" maxWidth="1200px" p={2} mt={5}>
          {content.map((el, i) => (
            <Box
              key={el.name}
              width={[1, 1 / 2]}
              py={5}
              pl={[4, 5]}
              pr={[2, 5]}
              css={{
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                `,
                opacity: animated ? '1' : '0',
                transform: animated ? 'scale(1)' : 'scale(0.95)',
              }}
            >
              <Card width={1} height="100%" p={[3, 5]}>
                <Thumbnail
                  alt={el.name}
                  src={el.photo}
                  width={['50px', '70px']}
                  height={['50px', '70px']}
                />

                <Flex justifyContent="space-between" alignItems="center" mb={1}>
                  <Text as="h6" fontSize={[2, 3]} fontFamily="heading" mb={[1, 2]} color="gray800">
                    {el.name}
                  </Text>
                  <Box as="span" color="yellow300" fontSize={1}>
                    {[1, 2, 3, 4, 5].map(el => (
                      <Box as={FaStar} mx="0.1em" key={el} />
                    ))}
                  </Box>
                </Flex>

                <Text as="p" fontSize={2} lineHeight={['auto', 'heading']}>
                  <em>“{el.description}”</em>
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>
    </VisibilitySensor>
  );
};
