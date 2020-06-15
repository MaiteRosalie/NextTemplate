import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { IoMdArrowForward as Arrow } from 'react-icons/io';

import { Button, FancyText, Input } from '../../../components';
import { themeProptypes } from '../../../theme';
import { currencyMask, applyLink } from '../../../constants';

const Wrapper = styled(Flex)`
  height: 89vh;
  position: relative;
  overflow: hidden;
`;

const Background = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Form = styled(Flex)`
  color: white;
  border-radius: 30px;
  border: 1px solid transparent;
  overflow: hidden;
  transition: border 300ms;
  &:focus-within {
    border-color: #00d0b3;
  }
  input {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0 1.5rem;
    border-radius: 0;
    border: none;
  }
  button {
    margin-left: -2rem;
    border-radius: 30px;
    font-size: inherit;
  }
`;

export const Header = withTheme(({ theme }: { theme: themeProptypes }) => {
  const [animated, setAnimated] = useState(false);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const imageRef = useRef<HTMLImageElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!!amount) {
      router.push(
        {
          pathname: applyLink.href,
          query: { amount },
        },
        applyLink.href,
        {
          getInitialProps: true,
        }
      );
    }
  };

  const onLoad = () => {
    setAnimated(true);
  };

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setAnimated(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <Wrapper as="header" alignItems="center" justifyContent="center" p={3} pt="7rem">
      <Background
        as="picture"
        css={{
          transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
          transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
          opacity: animated ? '1' : '0',
          transform: animated ? 'scale(1)' : 'scale(1.05)',
        }}
      >
        <source srcSet="./images/bg-3-1500.png" media="(min-width: 800px)" />
        <source srcSet="./images/bg-3-800.png" media="(max-width: 800px)" />
        <Image src="./images/bg-3-1500.png" alt="money background" onLoad={onLoad} ref={imageRef} />
      </Background>
      <Flex
        maxWidth={theme.breakpoints[3]}
        width={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 150ms,
          transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 150ms`,
          opacity: animated ? '1' : '0',
          transform: animated ? 'translateY(-1rem)' : 'translateY(0rem)',
        }}
      >
        <Text color="white300" fontSize={[3, 6]} mb={3} textAlign="center">
          Everything you need in one place
        </Text>
        <Text as="h1" color="white" fontSize={[5, 6]} fontFamily="heading" textAlign="center">
          Next-generation {` `}
          <FancyText words={['Landing', 'Blog']} animate={animated} />
        </Text>
        <Form as="form" mt={[3, 8]} fontSize={[2, 3]} onSubmit={handleSubmit}>
          <Input
            placeholder="Requested Amount"
            tag="masked"
            inputMode="numeric"
            name="amount"
            mask={currencyMask()}
            value={amount}
            onChange={handleChange}
          />
          <Button>
            Apply
            <Flex as="span" className="hide-md" alignItems="center" ml="0.2em">
              <Box as={Arrow} ml={1} size={30} />
            </Flex>
          </Button>
        </Form>
      </Flex>
    </Wrapper>
  );
});
