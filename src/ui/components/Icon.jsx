import { Box } from 'theme-ui';
import InlineSvg from 'react-inlinesvg';

import * as icons from '../assets/icons';

const sizesMap = {
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
};

const Icon = ({ icon, size, color, sx, ...rest }) => {
  const iconSrc = icons[icon];

  return (
    <Box
      sx={{
        height: sizesMap[size],
        width: sizesMap[size],
        ...sx,
        '> svg > path': {
          fill: color,
        },
      }}
      {...rest}
    >
      <InlineSvg height="100%" src={iconSrc} width="100%" />
    </Box>
  );
};

export default Icon;
