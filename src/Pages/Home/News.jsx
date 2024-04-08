import PropTypes from "prop-types";
import Header from "../Shared/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NavBar from "../Shared/NavBar";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();
  // const [singleNews, setSingleNews] = useState([])
  //     useEffect(()=>{
  // const newNews = news.map(snews=> setSingleNews(snews))
  //     },[news])

  //   const {
  //     rating: { number, badge },
  //     total_view,
  //     title,
  //     author: { name, published_date, img },
  //     thumbnail_url,
  //     image_url,
  //     details,
  //   } = id;
  return (
    <div>
      <Header />
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
