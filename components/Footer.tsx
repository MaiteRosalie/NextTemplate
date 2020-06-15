import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Box, Image, Flex } from 'rebass';

import { mainLinks, loginLink } from '../constants';
import { Link } from './';

const Wrapper = styled(Box)`
  border-top: 1px solid rgb(76, 81, 90);
`;

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com',
    name: 'instagram',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com',
    name: 'facebook',
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com/',
    name: 'twitter',
  },
  {
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/',
    name: 'youtube',
  },
];

const SocialLinks = (props: any) => (
  <Flex {...props}>
    {socialLinks.map(el => (
      <Link href={el.href} p={1} fontSize={2} key={el.name}>
        {el.icon}
      </Link>
    ))}
  </Flex>
);

export const Footer = (props: any) => (
  <Wrapper bg="gray800">
    <Flex flexWrap="wrap" margin="auto" p={2} className="container">
      <Flex
        width={[1, 1, 1, 10 / 12]}
        alignItems="center"
        flexWrap="wrap"
        justifyContent={['unset', 'unset', 'center', 'unset']}
      >
        <Image
          src="./images/mcafee.png"
          alt="McAfee SECURE"
          maxHeight="32px"
          css={{
            objectFit: 'contain',
            verticalAlign: 'middle',
            opacity: '0.7',
          }}
          width={[1, 1, 1, 'auto']}
          mb={[4, 4, 1, 0]}
          px={[1, 2]}
        />
        {mainLinks.map(el => (
          <Link
            href={el.href}
            key={el.name}
            local
            p={1}
            fontSize={2}
            width={[1 / 2, 1 / 3, 'auto']}
          >
            {el.name}
          </Link>
        ))}
        <Link href={loginLink.href} p={1} fontSize={2} color="white" width={[1 / 2, 1 / 3, 'auto']}>
          {loginLink.name}
        </Link>
        <SocialLinks className="show-md" />
      </Flex>
      <SocialLinks justifyContent="flex-end" className="hide-md" width={[1, 1, 2 / 12]} />
    </Flex>
  </Wrapper>
);
