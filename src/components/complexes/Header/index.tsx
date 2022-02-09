interface IHeader {
  text: string;
}

const Header: React.FC<IHeader> = ({ text }) => {
  return <header className="header">{text}</header>;
};

export default Header;
