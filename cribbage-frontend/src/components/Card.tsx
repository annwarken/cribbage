type CardProps = {
  rank: number; // 1–13
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  faceDown?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const rankMap: Record<number, string> = {
  1: 'ace',
  11: 'jack',
  12: 'queen',
  13: 'king',
};

export default function Card({ rank, suit, faceDown = false, size = 'md' }: CardProps) {
  const sizeClass = {
    sm: 'w-12',
    md: 'w-16',
    lg: 'w-24',
  }[size];

  const rankStr = rankMap[rank] || rank;
  const filename = `${rankStr}_of_${suit}.svg`;

  return (
    <img
      src={faceDown ? '/cards/back.svg' : `/cards/${filename}`}
      alt="playing card"
      className={`inline-block ${sizeClass} drop-shadow-md`}
    />
  );
}
