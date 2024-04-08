import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
const Root = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setPageTitle("Dragon News - HOME");
    } else if (location.state) {
      setPageTitle(location.state);
    } else {
      setPageTitle(`Dragon News - ${location.pathname.replace("/", "")}`);
    }
  }, [location]);

  // Update the document title
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className="container mx-auto font-poppins">
      <Outlet />
    </div>
  );
};

export default Root;
