
export default function ReviewBar({ rating }) {
    const totalCircles = 5;
  const filledCircles = Math.floor(rating);
  const partialFill = rating % 1 !== 0;
  const partialFillWidth = `${(rating % 1) * 18}px`;

  return (
    <div className="flex flex-row gap-[2px]">
      {Array.from({ length: totalCircles }).map((_, index) => (
        <div key={index} className="mask half relative">
          {index < filledCircles ? (
            <div className="fill bg-[#00951b]" style={{ width: '18px' }}></div>
          ) : (
            index === filledCircles && partialFill && (
              <div className="fill bg-[#00951b]" style={{ width: partialFillWidth }}></div>
            )
          )}
        </div>
      ))}
    </div>
  );
}