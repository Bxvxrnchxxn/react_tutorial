"use client";

type Props = { word: string; span?: number };

const BouncingWord = ({ word, span = 0.3 }: Props) => {
  const letters = Array.from(word);
  const total = letters.length * span;

  return (
    <span
      className="inline-block"
      style={{ "--letter-span": `${total}s` } as React.CSSProperties}
    >
      {letters.map((ch, i) => {
        if (ch === " ")
          return (
            <span key={i} className="inline-block mx-[0.15em]">
              &nbsp;
            </span>
          );

        return (
          <span
            key={i}
            className="inline-block animate-single-bounce"
            style={{ animationDelay: `${i * span}s` }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
};

export default BouncingWord;
