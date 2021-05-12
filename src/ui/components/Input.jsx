import { Input as ThemeInput } from 'theme-ui';

import FlexLayout from './FlexLayout';
import Icon from './Icon';

const Input = () => {
  return (
    <FlexLayout
      py={3}
      px={4}
      alignItems="center"
      space={2}
      sx={{
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: '4px',
        backgroundColor: 'white',
      }}
    >
      <Icon icon="search" size="m" />
      <ThemeInput
        placeholder="Search for anything..."
        sx={{
          border: 'none',
          '&:focus': {
            outline: 'none',
          },
          '&::placeholder': {
            color: 'rgba(0,0,0,0.25)',
          },
        }}
      />
    </FlexLayout>
  );
};

export default Input;
