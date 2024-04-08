import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-3">
      <h1 className="text-2xl">All Categories</h1>

      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          className="block ml-3 text-xl font-semibold hover:scale-105"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
      <div className="border rounded-sm p-4 space-y-1 bg-base-200">
        <h3 className="text-2xl mb-4 font-semibold">Q-Zone</h3>
        <img src={qZone1} />
        <img src={qZone2} />
        <img src={qZone3} />
      </div>
    </div>
  );
};

export default LeftSideNav;
