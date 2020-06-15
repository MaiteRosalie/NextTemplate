import React, { useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Box, Image } from 'rebass';

import { themeProptypes } from '../theme';
import { Navigation, Footer, Link } from './';
import { ModalProvider } from '../context';

const TopBar = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: flex-end;
  align-items: center;
  grid-column-gap: 40px;
  width: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  z-index: 1;
`;

const Wrapper = styled(Box)<{ open: boolean }>`
  height: 100%;
  overflow-x: hidden;
  position: relative;
  ${({ open }) => `
    overflow-y: ${open ? 'hidden' : 'auto'}
  `}
`;
const Translated = styled(Box)<{ open: boolean; theme: themeProptypes }>`
  height: 100%;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  ${({ theme, open }) => `
    ${theme.mq[2]}{
      transform: ${open ? 'translate(-500px,0%)' : 'translate(0%,0%)'};
    }
    ${theme.mq[0]}{
      transform: ${open ? 'translate(-270px,0%)' : 'translate(0%,0%)'};
    }
  `}
`;
export const Layout = withTheme(
  ({ theme, children }: { theme: themeProptypes; children: ReactNode }) => {
    const [open, setOpen] = useState(false);

    const Toggle = (show: boolean) => {
      setOpen(show);
      if (window) {
        window.document.body.style.overflowY = open ? 'auto' : 'hidden';
      }
    };

    return (
      <ModalProvider>
        <Wrapper open={open}>
          <Translated open={open} theme={theme}>
            <TopBar px={3} pt={2} maxWidth="1700px" m="auto" open={open} theme={theme}>
              <Link href="./" local css={{ opacity: 1 }}>
                <Image
                  src="./images/logo-light.svg"
                  alt=" logo"
                  maxWidth="100px"
                  alignSelf="flex-start"
                  sx={{
                    justifySelf: 'flex-start',
                  }}
                  css={{ opacity: '1' }}
                />
              </Link>
              <Navigation open={open} toggle={Toggle} />
            </TopBar>
            {children}
            <Footer />
          </Translated>
        </Wrapper>
      </ModalProvider>
    );
  }
);
