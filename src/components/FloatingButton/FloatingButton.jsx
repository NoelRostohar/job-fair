import FlexLayout from '../../ui/components/FlexLayout';
import Icon from '../../ui/components/Icon';

const FloatingButton = () => {
  return (
    <FlexLayout
      justifyContent="center"
      alignItems="center"
      sx={{
        cursor: 'pointer',
        position: 'fixed',
        bottom: 8,
        right: 8,
        borderRadius: '50%',
        backgroundColor: 'supernova',
        p: 5,
        filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1))',
      }}
    >
      <Icon icon="add" size="m" />
    </FlexLayout>
  );
};

export default FloatingButton;
