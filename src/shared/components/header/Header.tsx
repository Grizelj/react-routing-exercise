/** @jsxImportSource @emotion/react */
import { button, wrapper, link, linkWrapper } from './Header.styles';
import { Link } from 'react-router-dom';

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header css={wrapper}>
      <p>Router Exercise</p>
      <div css={linkWrapper}>
        <Link to="/home" css={link}>
          Home
        </Link>
        <Link to="/info" css={link}>
          Info
        </Link>
        <Link to="/blog" css={link}>
          Blog
        </Link>
        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
