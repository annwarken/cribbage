import Hand from '../components/Hand';

export default function Game() {
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
      <p>this is the game page!</p>
      <br />
        <br />
        <Hand cards={playerHand} />
    </div>
  );
}

