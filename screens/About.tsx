import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from 'rebass';
import { AiOutlineExperiment, AiOutlineSmile, AiOutlineCrown } from 'react-icons/ai';

import { Layout, PageTitle, Card } from '../components';

const features = [
  {
    icon: <AiOutlineExperiment />,
    title: 'Science Icon',
    description: 'Duis aliquet arcu dignissim arcu volutpat tincidunt. ',
  },
  {
    icon: <AiOutlineCrown />,
    title: 'Excellence Icon',
    description: 'Maecenas at consequat diam. Proin est ipsum, luctus id dolo.',
  },
  {
    icon: <AiOutlineSmile />,
    title: 'Service Icon',
    description: 'Duis non lobortis erat. Nulla at nibh nunc. Praesent urna nunc.',
  },
];
export const About = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <Layout>
      <PageTitle src="about" title="About Us" />
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
          <Flex width={1} p={2} flexWrap="wrap">
            <Text
              as="h4"
              fontSize={[4, 5]}
              fontFamily="heading"
              color="gray500"
              mb={1}
              textAlign="center"
              maxWidth={600}
              mx="auto"
              width={1}
            >
              We provide solutions that are easier, faster, smarter and better.
            </Text>
          </Flex>

          <Flex flexWrap="wrap" width={1} my={4}>
            <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2}>
              <Text as="p" fontSize={2} lineHeight="heading">
                Vivamus pretium tellus in nulla rutrum pulvinar. Donec dapibus, nisl sed finibus
                dapibus, mi justo gravida est, nec semper ante metus sit amet urna. Cras nec
                consequat orci. Proin blandit lorem pulvinar odio suscipit, eget rutrum ligula
                sagittis. Aenean malesuada lacus et aliquet lacinia. Praesent bibendum nec quam id
                mollis. Vestibulum accumsan dolor eu libero auctor hendrerit. Aenean luctus
                pellentesque eleifend.
              </Text>
            </Flex>
            <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2}>
              <Text as="p" fontSize={2} lineHeight="heading">
                Mauris lobortis vel sem sed pretium. Sed nec lobortis diam, vel porttitor felis.
                Aenean augue sem, porta sed neque vitae, luctus suscipit lectus. Mauris porttitor
                velit lorem, ut volutpat velit pulvinar ut. In a ex eu eros semper luctus ut sed
                tellus. Phasellus lacinia dolor ac dictum faucibus,{' '}
                <Box as="strong" color="gray500">
                  in faucibus ex efficitur quis.
                </Box>
              </Text>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={1} my={4}>
            {features.map((el, i) => (
              <Box
                key={el.title}
                width={[1, 1, 'calc(33% - 1rem)']}
                p={2}
                m={1}
                css={{
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                `,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'scale(1)' : 'scale(1.05)',
                  border: '1px solid #eaeaea',
                }}
              >
                <Text textAlign="center" fontSize="50px" color="blue500">
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
export default About;
