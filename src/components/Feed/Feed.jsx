import { Text, Box } from 'theme-ui';

import FlexLayout from '../../ui/components/FlexLayout';
import Icon from '../../ui/components/Icon';
import Input from '../../ui/components/Input';

import Card from './Card';

import { cards } from '../../api';

const Feed = () => {
  return (
    <FlexLayout py={7} flexDirection="column" space={7} px={8} sx={{ width: '100%', maxWidth: '760px' }}>
      <FlexLayout sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
        <FlexLayout space={4} alignItems="center">
          <Icon icon="feed" size="xl" />
          <Text variant="heading-xl">Feed</Text>
        </FlexLayout>
        <FlexLayout space={4} alignItems="center">
          <Text color="star-dust" variant="card-links">
            VIEW
          </Text>
          <FlexLayout
            space={3}
            py={2}
            px={3}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '4px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Icon icon="cardViewInactive" size="l" />
            <Box
              sx={{
                height: '24px',
                width: '1px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}
            />
            <Icon icon="cardViewCompactActive" size="l" />
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
      <Input />
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </FlexLayout>
  );
};

export default Feed;
