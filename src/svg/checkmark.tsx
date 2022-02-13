interface ICheckmark {
  width: string;
  height: string;
  color: string;
}

const Checkmark: React.FC<ICheckmark> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <g fill={color}>
      <path d="M22.5 4.5c-.8-.8-2.2-.8-3 0L9 15l-4.5-4.5c-.8-.8-2.2-.8-3 0s-.8 2.2 0 3L9 21 22.5 7.5c.8-.8.8-2.2 0-3z"></path>
    </g>
  </svg>
);

export default Checkmark;
