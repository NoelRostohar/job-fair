import Feed from './components/Feed/Feed';

import FlexLayout from './ui/components/FlexLayout';

const App = () => {
  return (
    <FlexLayout alignItems="flex-start" justifyContent="center">
      <Feed />
    </FlexLayout>
  );
};

export default App;
