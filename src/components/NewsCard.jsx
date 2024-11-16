import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    // const {news} = props || {};
  return (
    <div className="card w-full  bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center p-4">
        <img
          src={news.author.img}
          alt="Author"
          className="w-10 h-10 rounded-full  mr-3"
        />
        <div>
          <h3 className="text-sm font-semibold">{news.author.name}</h3>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>
        <button className="ml-auto text-gray-400">
          <AiOutlineShareAlt size={20} />
        </button>
      </div>

      {/* Card Content */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  rounded-lg mb-4 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{news.title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {news.details.substring(0, 100)}... 
          <br />
          <Link to={`/news/${news._id}`} className="text-blue-500 font-semibold"> Read More</Link>
        </p>
      </div>

      {/* Card Footer */}
      <div className="p-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <span className="ml-1 text-gray-800 font-medium">{news.rating.number}</span>
          <span className="ml-1 text-sm text-gray-500">({news.rating.badge})</span>
        </div>
        <div className="flex items-center text-gray-500">
          <AiOutlineEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};



//  function App() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <NewsCard news={singleNews} />
//     </div>
//   );
// }


export default NewsCard;