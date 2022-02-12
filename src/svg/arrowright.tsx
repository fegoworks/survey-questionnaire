interface IArrowRight {
  width: string;
  height: string;
  color: string;
}

const ArrowRight: React.FC<IArrowRight> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <g fill={color}>
      <path d="M12 4c-.8.8-.8 2.1 0 2.8l3.2 3.2H4c-1.1 0-2 .9-2 2s.9 2 2 2h11.2L12 17.2c-.8.8-.8 2.1 0 2.8.8.8 2 .8 2.8 0l6.6-6.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4L14.8 4c-.7-.8-2-.8-2.8 0z"></path>
    </g>
  </svg>
);

export default ArrowRight;
