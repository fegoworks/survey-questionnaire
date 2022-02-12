interface IText {
  text?: string;
}

const Text: React.FC<IText> = ({ text = "" }) => <p className="text">{text}</p>;

export default Text;
