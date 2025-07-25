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

export default function Card({ rank, suit, faceDown = false, size = 'sm' }: CardProps) {
  const sizeClass = {
    sm: 'w-[40px] h-[60px]',
    md: 'w-[60px] h-[90px]',
    lg: 'w-[80px] h-[120px]'
  }[size];

  const rankStr = rankMap[rank] || rank;
  const filename = `${rankStr}_of_${suit}.svg`;

  return (
    <img
      src={faceDown ? '/cards/back.svg' : `/cards/${filename}`}
      alt={`${rankStr}_of_${suit}`}
      className={`inline-block ${sizeClass} drop-shadow-md`}
    />
  );
}
