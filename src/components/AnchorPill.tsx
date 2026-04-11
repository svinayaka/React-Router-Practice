import './AnchorPill.css';

type AnchorPillProps = {
  text: string;
  link: string;
};

function AnchorPill({text, link}: Readonly<AnchorPillProps>) {
  return (
    <a href={link} className='anchor-pill'>{text}</a>
  )
}

export default AnchorPill;