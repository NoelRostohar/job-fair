import { useState } from 'react';
import { Box } from 'theme-ui';
import { currentUser } from '../../api';

import FlexLayout from '../../ui/components/FlexLayout';
import SidebarLink from '../../ui/components/SidebarLink';

import Header from './Header';

const Sidebar = () => {
  const [active, setActive] = useState('Feed');

  return (
    <Box
      sx={{
        width: '280px',
        height: '100vh',
        backgroundColor: 'daisy',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Header />
      <FlexLayout flexDirection="column" space={2} mt={4}>
        <SidebarLink onClick={() => setActive('Feed')} active={active === 'Feed'} text="Feed" icon="feed" />
        <SidebarLink onClick={() => setActive('Private')} active={active === 'Private'} text="Only Me" icon="private" />
      </FlexLayout>
      <Box mx={5} my={4}>
        <Box
          sx={{
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
      </Box>
      <SidebarLink text="New category..." icon="plus" sx={{ mb: 4 }} />
      <FlexLayout flexDirection="column" space={2}>
        {currentUser.categories.map((category) => {
          return (
            <SidebarLink
              onClick={() => setActive(category)}
              active={category === active}
              key={category}
              icon="folder"
              text={category}
            />
          );
        })}
      </FlexLayout>
    </Box>
  );
};

export default Sidebar;
