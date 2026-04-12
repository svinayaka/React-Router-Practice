import './AnchorPill.css';
import { NavLink } from 'react-router-dom';

type AnchorPillProps = {
  text: string;
  link: string;
};

function AnchorPill({text, link}: Readonly<AnchorPillProps>) {
  return (
    <NavLink 
      to={link} 
      className={({ isActive }) => isActive ? 'anchor-pill active' : 'anchor-pill'}
    >
      {text}
    </NavLink>
  )
}

export default AnchorPill;