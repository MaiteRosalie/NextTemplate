import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaPlay } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';
import ReactPlayer from 'react-player';

import { themeProptypes } from '../../../theme';
import { Button } from '../../../components';

const VideoThumb = styled(Box)<{ theme: themeProptypes }>`
  position: relative;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 30px 70px rgba(22, 39, 47, 0.3);
  overflow: hidden;
  width: 40vw;
  margin-right: -15vw;
  padding-top: 72%;
  cursor: pointer;
  ${({ theme }) => `
    ${theme.mq[2]}{
      padding-top: 55%;
      margin: 1rem;
      width: calc(100% - 2rem);
    }
  `}
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
  }
  & video {
    object-fit: cover;
  }
  &:hover button {
    background-position: 100% 0%;
  }
`;

const PlayButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  pointer-events: none;
`;

export const Steps = withTheme(({ theme }: { theme: themeProptypes }) => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);
  const [playing, setPlaying] = useState(false);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };

  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
      <Box as="section" py={[5, '5rem']}>
        <Flex flexWrap="wrap" m="auto" className="container">
          <Box width={[1, 1, 1, 1 / 2, 1 / 2]}>
            <Box
              maxWidth="500px"
              css={{
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1)`,
                opacity: animated ? '1' : '0',
                transform: animated ? 'translateX(0px)' : 'translateX(20px)',
              }}
            >
              <Text as="h1" fontSize={[5, 6]} fontFamily="heading" color="gray500" mb={2}>
                Morbi suscipit varius enim, ac
                {` `}
                <Text as="span" color="blue500">
                  aliquet erat.
                </Text>
              </Text>
              <Text as="p" fontSize={[2, 3]} lineHeight={['auto', 'heading']}>
                Nullam eu vulputate lorem. Quisque volutpat lacus sapien, placerat ullamcorper quam
                pretium quis. Fusce suscipit bibendum sollicitudin. Etiam interdum ligula lorem, sed
                euismod ex interdum eget.
              </Text>
            </Box>
          </Box>
          <Flex width={[1, 1, 1, 1 / 2]} alignItems="center">
            <VideoThumb
              theme={theme}
              css={{
                transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: animated ? '1' : '0',
                transform: animated ? 'scale(1)' : 'scale(0.95)',
              }}
            >
              <ReactPlayer
                url="./videos/video.mp4"
                onPlay={() => {
                  setPlaying(true);
                }}
                onPause={() => {
                  setPlaying(false);
                }}
                controls
              />

              {!playing && (
                <PlayButton width={8} height={8}>
                  <FaPlay />
                </PlayButton>
              )}
            </VideoThumb>
          </Flex>
        </Flex>
      </Box>
    </VisibilitySensor>
  );
});
