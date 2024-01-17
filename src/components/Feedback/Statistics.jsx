import { nanoid } from 'nanoid';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <>
      <ul>
        {stats.map(([key, value]) => (
          <li key={nanoid()}>
            <p>
              <span>{key}</span>
              <span>{value}</span>
            </p>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </>
  );
};
