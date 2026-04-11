import './AnchorPill.css';
import { Link } from 'react-router-dom';

type AnchorPillProps = {
  text: string;
  link: string;
};

function AnchorPill({text, link}: Readonly<AnchorPillProps>) {
  return (
    <Link to={link} className='anchor-pill'>{text}</Link>
  )
}

export default AnchorPill;