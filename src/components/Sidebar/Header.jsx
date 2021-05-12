import { Image, Text } from 'theme-ui';

import FlexLayout from '../../ui/components/FlexLayout';
import Icon from '../../ui/components/Icon';

import { currentUser } from '../../api';

const Header = () => {
  return (
    <FlexLayout
      p={4}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundColor: 'daisy',
        filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
      }}
    >
      <FlexLayout space={3}>
        <Image width="40px" height="40px" src={currentUser.profileImage} alt="profile_image" />
        <FlexLayout flexDirection="column" space={1}>
          <Text color="white" variant="heading-s">
            {currentUser.handle}
          </Text>
          <Text color="white-50" variant="sidebar-subheading">
            {currentUser.name}
          </Text>
        </FlexLayout>
      </FlexLayout>
      <Icon
        icon="arrowDown"
        size="l"
        sx={{
          cursor: 'pointer',
        }}
      />
    </FlexLayout>
  );
};

export default Header;
