import React, { useState, useEffect } from 'react';
import { GoShield } from 'react-icons/go';
import { Box, Flex, Text } from 'rebass';

import { Layout, Card, Button, PageTitle, Input } from '../components';
import { phoneMask } from '../constants';

const inputs = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Mobile No.',
    name: 'phone',
    tag: 'masked',
    mask: phoneMask,
    inputMode: 'tel' as 'tel',
  },
];
const fieldProps = {
  mb: [1, 1, 3],
  mt: 1,
  required: true,
};
const columnProps = {
  width: [1, 'calc(50% - 1rem)'],
  flexDirection: 'column' as 'column',
};
export const Contact = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <Layout>
      <PageTitle src="contact" title="Contact Us" />
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
          as="form"
          p={2}
          py={4}
          css={{
            transform: 'translateY(-4rem)',
          }}
        >
          <Flex width={1} mx="auto" maxWidth="1000px" flexDirection="column">
            <Flex width={1} flexWrap="wrap" p={2} justifyContent="space-between">
              <Text as="h4" fontSize={[5, 6]} fontFamily="heading" color="gray500" width={1} mb={1}>
                Drop us a line
              </Text>
              <Text as="p" fontSize={2} width={1} mb={2}>
                We are here to answer any question you may have.
              </Text>
              <Flex {...columnProps}>
                {inputs.map((el, i) => (
                  <Input {...el} key={el.name} {...fieldProps} />
                ))}
              </Flex>
              <Flex {...columnProps}>
                <Input
                  tag="textarea"
                  name="message"
                  label="Message"
                  placeholder="I would like to know more about your services..."
                  css={{ flexGrow: 1 }}
                  {...fieldProps}
                />
              </Flex>
            </Flex>
            <Flex
              flexWrap="wrap"
              width={1}
              mt={1}
              justifyContent="flex-end"
              p={2}
              css={{
                borderTop: '1px solid #e6e6e6;',
              }}
            >
              <Flex width={[1, 1 / 2]} px={1} alignItems="center" className="hide-sm">
                <Text as="p" fontSize={2}>
                  <Box as={GoShield} verticalAlign="middle" mr={1} size={18} /> Your information is
                  always be safe with us.
                </Text>
              </Flex>
              <Flex width={[1, 1 / 2]} justifyContent="flex-end" px={1}>
                <Button rounded variant="solid">
                  Send Message
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </Layout>
  );
};
export default Contact;
