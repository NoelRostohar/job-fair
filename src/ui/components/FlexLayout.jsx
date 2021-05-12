import { Box } from 'theme-ui';

const FlexLayout = ({ justifyContent, alignItems, flexDirection, flex, flexWrap, space, children, sx, ...rest }) => {
  const marginDirection = flexDirection === 'column' ? 'mb' : 'mr';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexDirection,
        flex,
        flexWrap,
        ...sx,
        '> :not(:last-child)': {
          [marginDirection]: space,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default FlexLayout;
