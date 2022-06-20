import React from 'react';

import Header from '../Header/Header';
import RoutesMenu from '../Routes/Routes';

const App: React.FC = () => {
  return (<>
    <Header />

    <main>
      <RoutesMenu />
    </main>
  </>)
};

export default App;
