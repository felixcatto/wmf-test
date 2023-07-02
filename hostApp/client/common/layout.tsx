import { Link } from "react-router-dom";
import { getUrl } from "../lib/utils.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container py-4 bg-white h-full shadow-inner">
        <div className="flex gap-4 mb-4 text-x1.25">
          <Link to={getUrl('home')}>Home</Link>
          <Link to={getUrl('users')}>Users</Link>
          <Link to={getUrl('cats')}>Cats</Link>
        </div>
        <>{children}</>
      </div>
    </>
  );
};
