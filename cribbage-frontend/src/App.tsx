import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <main>
        <br />
        Hello, World!
        <br />
        <br />
        I love you, pook &lt;3
        <br />
        <br />
      </main>
    </div>
  );
};

export default App;