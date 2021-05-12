import { Box, Text, Image } from 'theme-ui';
import { useState } from 'react';

import FlexLayout from '../../ui/components/FlexLayout';
import Icon from '../../ui/components/Icon';
import Label from '../../ui/components/Label';

import { currentUser } from '../../api';

const Card = ({ card }) => {
  const [postLiked, setPostLiked] = useState(false);

  return (
    <Box>
      <FlexLayout space={3} mb={2} alignItems="center">
        <Image src={currentUser.profileImage} alt="profile_image" height="20px" width="20px" />
        <Text variant="card-links">
          <strong>{currentUser.name}</strong> submitted this link to <strong>Design</strong> - Aug 25
        </Text>
      </FlexLayout>
      <Box
        sx={{
          width: '100%',
          borderRadius: '4px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
          overflow: 'hidden',
        }}
      >
        {card.bannerImage && <Image src={card.bannerImage} alt="card_image" sx={{ width: '100%', height: 'auto' }} />}
        <FlexLayout py={4} px={5} flexDirection="column">
          <FlexLayout space={2} alignItems="center">
            <Image width="20px" height="20px" src={card.bookmarkImage} alt="card_bookmark" />
            <Text variant="heading-m">{card.title}</Text>
          </FlexLayout>
          <Text mt={2} color="gunsmoke" variant="card-links">
            {card.link}
          </Text>
          <Text mt={4} variant="paragraph-s">
            {card.description}
          </Text>
          <FlexLayout mt={4} justifyContent="space-between" alignItems="center">
            <FlexLayout space={2}>
              {card.categories.map(({ icon, category }) => {
                return <Label icon={icon} text={category} key={category} iconSize="s" />;
              })}
            </FlexLayout>
            <FlexLayout space={6}>
              <Icon
                icon={'more'}
                size="l"
                sx={{
                  cursor: 'pointer',
                  '&:hover > svg > path': {
                    fill: 'chicago',
                  },
                }}
              />
              <FlexLayout space={2} alignItems="center">
                <Icon
                  onClick={() => setPostLiked((prev) => !prev)}
                  icon={postLiked ? 'likeActive' : 'likeInactive'}
                  size="l"
                  sx={{
                    cursor: 'pointer',
                    '&:hover > svg > path': {
                      fill: !postLiked && 'chicago',
                    },
                  }}
                />
                <Text color="gunsmoke" variant="paragraph-m">
                  {card.likes}
                </Text>
              </FlexLayout>
              <FlexLayout space={2} alignItems="center">
                <Icon
                  sx={{
                    cursor: 'pointer',
                    '&:hover > svg > path': {
                      fill: 'chicago',
                    },
                  }}
                  icon="comment"
                  size="l"
                />
                <Text color="gunsmoke" variant="paragraph-m">
                  {card.comments}
                </Text>
              </FlexLayout>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </Box>
    </Box>
  );
};

export default Card;
