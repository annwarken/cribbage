import Card from './Card';

type HandProps = {
  cards: { rank: number; suit: 'hearts' | 'diamonds' | 'clubs' | 'spades' }[];
};

export default function Hand({ cards }: HandProps) {
  return (
    <div className="flex gap-2 p-4">
      {cards.map((card, idx) => (
        <Card key={idx} rank={card.rank} suit={card.suit} />
      ))}
    </div>
  );
}
