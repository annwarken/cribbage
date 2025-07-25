import React from 'react';
import Header from './components/Header';
import Hand from './components/Hand';

const App: React.FC = () => {
  type Suit = 'hearts' | 'clubs' | 'spades' | 'diamonds';
  type Card = { rank: number; suit: Suit };

  const playerHand: Card[] = [
    { rank: 5, suit: 'hearts' },
    { rank: 11, suit: 'clubs' },
    { rank: 1, suit: 'spades' },
    { rank: 10, suit: 'diamonds' },
    { rank: 3, suit: 'hearts' },
    { rank: 13, suit: 'clubs' },
  ];
  return (
    <div>
      <Header />
      <main>
        <br />
        Hello, World!
        <br />
        <br />
        I love you, pook &lt;3
        <br />
        <br />
        <Hand cards={playerHand} />
      </main>
    </div>
  );
};

export default App;