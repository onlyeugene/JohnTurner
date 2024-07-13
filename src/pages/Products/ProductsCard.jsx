import React from "react";
import { Link } from "react-router-dom";
import rating from "../../assets/rating.svg";

const ProductsCard = ({ product, handleAddToCart }) => {
  const imageUrl =
    `https://api.timbu.cloud/images/${product.photos[0]?.url}` ||
    "https://via.placeholder.com/150";

  return (
    <div className="w-full border border-[#AC702F] py-2 px-[1rem] rounded-lg flex flex-col justify-between">
      <Link to={`/product/${product.id}`}>
        <img src={imageUrl} alt={product.name} className="w-full" />

        <section>
          <h1 className="md:text-lg text-sm font-semibold mt-4">
            {product.name}
          </h1>
          <h2 className="md:text-base text-sm text-[#334155] mt-2 ">
            {product.unique_id}
          </h2>
          <div>
            <p className="md:text-md text-sm text-[#94A3B8] mt-2 ">
              {product.description || "No description available"}
            </p>
          </div>
          <h4 className="md:text-2xl text-xl font-semibold text-[#0F172A]">
            N{product.current_price[0]?.NGN[0] || 'Price not available'}
          </h4>
          <div>
            <img src={rating} alt="" className="" />
            <p>{product.number}</p>
          </div>
        </section>
      </Link>

      <section>
        <h5 className="md:text-sm text-xs text-gray-500 mt-5">
          <span className="font-bold text-[#AC702F]">
            {product.available_quantity}
          </span>{" "}
          left in stock
        </h5>
        <div className="md:flex grid mt-2 md:gap-[.5rem] gap-2">
          <button
            onClick={handleAddToCart}
            className="border w-full text-center md:text-base text-xs rounded-2xl md:py-1 py-1.5 md:px-2 bg-[#AC702F] border-[#AC702F] text-white"
          >
            Add to Cart
          </button>
          <Link
            to={"/cartpage"}
            onClick={handleAddToCart}
            className="border md:w-2/3 md:text-base text-xs text-center border-[#AC702F] md:py-1 py-1.5 md:px-1 rounded-2xl"
          >
            Buy now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsCard;
