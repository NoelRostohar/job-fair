import { Text } from 'theme-ui';

import FlexLayout from './FlexLayout';
import Icon from './Icon';

const Label = ({ icon, text, iconSize }) => {
  return (
    <FlexLayout
      px="8px"
      py="6px"
      space={2}
      sx={{
        backgroundColor: 'concrete',
        width: 'fit-content',
        borderRadius: '2px',
      }}
    >
      {icon && <Icon icon={icon} size={iconSize} />}
      <Text as="p" variant="sidebar-subheading">
        {text}
      </Text>
    </FlexLayout>
  );
};

export default Label;
