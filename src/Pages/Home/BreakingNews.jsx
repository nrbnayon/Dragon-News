import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn  btn-secondary">BREAKING NEWS</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/" className="mx-2">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link to="/" className="mx-2">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link to="/" className="mx-2">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
