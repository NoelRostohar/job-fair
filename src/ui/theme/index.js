import colors from './colors';
import text from './text';
import space from './space';

const theme = {
  colors: {
    text: 'zeus',
    ...colors,
  },
  text,
  space,
  styles: {
    root: {
      backgroundColor: '#FAFAFA',
      pl: '280px',
    },
  },
};

export default theme;
