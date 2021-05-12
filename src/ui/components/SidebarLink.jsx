import { Text, Box } from 'theme-ui';

import FlexLayout from './FlexLayout';
import Icon from './Icon';

const SidebarLink = ({ text, icon, active, sx, ...rest }) => {
  return (
    <FlexLayout
      py={3}
      px={5}
      space={4}
      alignItems="center"
      sx={{ width: '100%', position: 'relative', cursor: 'pointer', ...sx }}
      {...rest}
    >
      {active && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '6px',
            backgroundColor: 'supernova',
            boxShadow: '0px 0px 16px #FFBC00',
          }}
        />
      )}
      <Icon color={active ? 'white' : 'white-50'} icon={icon} size="m" />
      <Text color={active ? 'white' : 'white-50'} variant="sidebar-heading">
        {text}
      </Text>
    </FlexLayout>
  );
};

export default SidebarLink;
