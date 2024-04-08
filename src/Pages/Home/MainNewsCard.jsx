import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MainNewsCard = ({ singleNews }) => {
  const {
    _id,
    // others_info: { is_todays_pick, is_trending },
    rating: { number, badge },
    total_view,
    title,
    author: { name, published_date, img },
    thumbnail_url,
    image_url,
    details,
  } = singleNews;
  const [showFullText, setShowFullText] = useState(false);

  // Round the rating to the nearest half-star
  const roundedRating = Math.round(number * 2) / 2;

  // Create an array of 5 elements representing the stars
  const starsArray = Array.from({ length: 5 }, (_, index) => {
    if (index < roundedRating) {
      return <AiFillStar key={index} className="text-yellow-400" />;
    } else {
      return <AiOutlineStar key={index} className="text-gray-300" />;
    }
  });

  return (
    <Link to={`/news/${_id}`} state={title}>
      <section className="py-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="rounded-md shadow-md transition-transform duration-500 hover:scale-105">
          <article className="flex flex-col dark:bg-gray-50">
            <div>
              <img
                className="rounded-md  w-full h-96 dark:bg-gray-500"
                src={thumbnail_url}
              />
            </div>
            <div className="flex flex-col  p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                {title}
                {badge && (
                  <span className="ml-2 inline-block px-2 py-1 bg-green-500 text-white rounded-md text-xs">
                    {badge}
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                <span>{published_date}</span>
                <span>{total_view} views</span>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <img
                  src={image_url ? image_url : img}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium dark:text-gray-400">
                    {name ? name : `Unknown`}
                  </p>
                  <p className="text-xs dark:text-gray-500">{published_date}</p>
                </div>
              </div>
              <div className="flex items-center pt-2">
                <span className="text-sm text-gray-600">{number}</span>
                <div className="flex ml-1">
                  {starsArray.map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed pt-4">
                {showFullText || details.length <= 200 ? (
                  <>
                    {details}
                    {showFullText && (
                      <>
                        <span
                          onClick={() => setShowFullText(!showFullText)}
                          className="text-blue-500 hover:underline ml-1 cursor-pointer"
                        >
                          Show Less
                        </span>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {details.slice(0, 200)}
                    <>
                      <span
                        onClick={() => setShowFullText(!showFullText)}
                        className="text-blue-500 hover:underline ml-1 cursor-pointer"
                      >
                        Read More...
                      </span>
                    </>
                  </>
                )}
              </p>
            </div>
          </article>
        </div>
      </section>
    </Link>
  );
};

MainNewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default MainNewsCard;
