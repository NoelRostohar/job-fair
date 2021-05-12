import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import FloatingButton from './components/FloatingButton/FloatingButton';

import FlexLayout from './ui/components/FlexLayout';

const App = () => {
  return (
    <FlexLayout alignItems="flex-start" justifyContent="center">
      <Sidebar />
      <Feed />
      <FloatingButton />
    </FlexLayout>
  );
};

export default App;
