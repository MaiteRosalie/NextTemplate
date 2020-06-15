import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Text, Image } from 'rebass';
import { AiOutlineCheck, AiOutlineAudit, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

import { Layout, PageTitle, Card } from '../components';

const features = [
  {
    icon: <MdAttachMoney />,
    title: 'Money Icon',
    description: 'Proin luctus tincidunt erat condimentum feugiat.',
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    title: 'People Icon',
    description: 'Nunc vestibulum pharetra egestas. Phasellus ut condimentum ligula.',
  },
  {
    icon: <AiOutlineAudit />,
    title: 'History Icon',
    description: 'Etiam ornare mauris eu diam laoreet vestibulum. ',
  },
];
const list = [
  'Nullam suscipit eu dui quis volutpat.',
  'Mauris vehicula dignissim sapien ac auctor.',
  'Vivamus ac est sit amet lectus sagittis dignissim.',
  'Praesent quis lobortis nisi.',
  'Cras a nunc tincidunt, condimentum dui ut.',
];
export const How = () => {
  const [animated, setAnimated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setAnimated(true);
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <Layout>
      <PageTitle src="how" title="How it works" />
      <Box
        m="auto"
        className="container"
        p={2}
        css={{
          transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 300ms cubic-bezier(0.4, 0, 0.2, 1)
        `,
          opacity: animated ? '1' : '0',
          transform: animated ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        <Card
          p={2}
          py={4}
          css={{
            transform: 'translateY(-4rem)',
          }}
        >
          <Flex flexWrap="wrap" width={1} my={4}>
            <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2} className="hide-sm">
              <Image
                src="./images/startup.png"
                alt="startup"
                height="367px"
                ref={imageRef}
                onLoad={onLoad}
                width={1}
                css={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 8px 50px rgba(22,39,47,0.2)',
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1)
                  `,
                  opacity: loaded ? '1' : '0',
                  transform: loaded ? 'scale(1)' : 'scale(0.95)',
                }}
              />
            </Flex>
            <Box width={[1, 1, 1 / 2]} p={2}>
              <Text
                as="h4"
                fontSize={[4, 5]}
                fontFamily="heading"
                color="gray500"
                mb={2}
                maxWidth={600}
                mx="auto"
                width={1}
              >
                Mauris eu sapien consectetur
              </Text>
              <Text as="p" fontSize={2} lineHeight="heading" mb={2}>
                Nulla sollicitudin justo quis turpis tincidunt imperdiet. Proin elementum quis nisl
                vitae rutrum. Praesent sed pharetra ligula, nec porta justo. Fusce vestibulum
                porttitor ante, sed mattis lectus venenatis sit amet.
              </Text>
              {list.map(el => (
                <Text fontSize={2} key={el} my={2}>
                  <Box as={AiOutlineCheck} color="green500" verticalAlign="middle" mr={1} /> {el}
                </Text>
              ))}
            </Box>
          </Flex>
          <Flex flexWrap="wrap" width={1} my={4}>
            {features.map((el, i) => (
              <Box
                key={el.title}
                width={[1, 1, 'calc(33% - 1rem)']}
                p={2}
                m={1}
                css={{
                  border: '1px solid #eaeaea',
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                  `,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'scale(1)' : 'scale(1.05)',
                }}
              >
                <Text fontSize="50px" color="blue500" textAlign="center">
                  {el.icon}
                </Text>
                <Text
                  as="h4"
                  fontSize={3}
                  lineHeight="heading"
                  color="gray500"
                  fontFamily="heading"
                  textAlign="center"
                >
                  {el.title}
                </Text>
                <Text as="p" fontSize={2} lineHeight="heading" textAlign="center">
                  {el.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Card>
      </Box>
    </Layout>
  );
};
export default How;
