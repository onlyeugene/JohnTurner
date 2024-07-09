// import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import { addToCart } from "../../stores/cart";


// const ProductsCard = (props) => {
//     const carts = useSelector(store => store.cart.items)
//     console.log(carts);
//     const {id, Image ,model, type, description, price, rating, Number, stock, slug} = props.data
//     const dispatch = useDispatch()
//     const handleAddToCart = () => {
//         dispatch(addToCart({
//             productId: id,
//             quantity: 1,
//             Image: Image,
//             model: model,
//             price: price,
//         }))
//     }

//   return (
//     <div className="w-full border border-[#AC702F] py-2 px-[1rem] rounded-lg flex flex-col justify-between">
//         <Link to={slug} className="flex items-center justify-center">
//           <img
//             src={Image}
//             alt={model}
//             className="w-full "
//           />
//         </Link>

//         <section>
//           <h1 className="md:text-lg text-sm font-semibold mt-4">
//             {type}
//           </h1>

//           <h2 className="md:text-base text-sm text-[#334155] mt-2 text-nowrap md:text-clip truncate">
//             {model}
//           </h2>

//           <div>
//             <p className="md:text-md text-sm text-[#94A3B8] mt-2 ">
//               {description}
//             </p>
//           </div>

//           <h4 className="md:text-2xl text-xl font-semibold text-[#0F172A]">
//             {price}
//           </h4>

//           <div className="flex items-center gap-2">
//             <img
//               src={rating}
//               alt="rating"
//               className="md:w-[7rem] w-[5rem] h-5"
//             />
//             <p className="md:text-base text-xs text-[#334155]">
//               {Number}
//             </p>
//           </div>
//         </section>

//         <section>
//           <h5 className="md:text-sm text-xs text-gray-500 mt-5">
//             <span className="font-bold text-[#AC702F]">
//               {stock}
//             </span>{" "}
//             left in stock
//           </h5>

//           <div className="md:flex w-full grid  mt-2 md:gap-[.2rem] gap-2">
//             {/* <button className="border border-[#AC702F] md:text-base md:block hidden text-xs md:py-1 md:px-[.8px] rounded-lg">
//               <span onClick={handleDecrement}> - </span>
//               {count}
//               <span onClick={handleIncrement}> + </span>
//             </button> */}
//             <button onClick={handleAddToCart}
//               className="border text-center md:text-base text-xs rounded-2xl md:py-1 py-1.5  md:px-2 bg-[#AC702F] border-[#AC702F] text-white"
//             >
//               Add to Cart
//             </button>
//             <button
//               className="border md:text-base text-xs text-center border-[#AC702F] md:py-1 py-1.5 md:px-1 rounded-2xl"
//             >
//               Buy now
//             </button>
//           </div>
//         </section>
//       </div>
//   )
// }

// export default ProductsCard

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../stores/cart";

const ProductsCard = (props) => {
  const { id, Image, model, type, description, price, rating, Number, stock, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      image: Image,
      model: model,
      price: price,
      quantity: 1
    }));
  };

  return (
    <div className="w-full border border-[#AC702F] py-2 px-[1rem] rounded-lg flex flex-col justify-between">
      <Link to={`/product/${slug}`} className="flex items-center justify-center">
        <img src={Image} alt={model} className="w-full " />
      </Link>

      <section>
        <h1 className="md:text-lg text-sm font-semibold mt-4">{type}</h1>
        <h2 className="md:text-base text-sm text-[#334155] mt-2 text-nowrap md:text-clip truncate">{model}</h2>
        <div>
          <p className="md:text-md text-sm text-[#94A3B8] mt-2 ">{description}</p>
        </div>
        <h4 className="md:text-2xl text-xl font-semibold text-[#0F172A]">N{price}</h4>
        <div className="flex items-center gap-2">
          <img src={rating} alt="rating" className="md:w-[7rem] w-[5rem] h-5" />
          <p className="md:text-base text-xs text-[#334155]">{Number}</p>
        </div>
      </section>

      <section>
        <h5 className="md:text-sm text-xs text-gray-500 mt-5">
          <span className="font-bold text-[#AC702F]">{stock}</span> left in stock
        </h5>
        <div className="md:flex grid  mt-2 md:gap-[.5rem] gap-2">
          <button onClick={handleAddToCart} className="border w-full text-center md:text-base text-xs rounded-2xl md:py-1 py-1.5 md:px-2 bg-[#AC702F] border-[#AC702F] text-white">
            Add to Cart
          </button>
          <button className="border md:w-2/3 md:text-base text-xs text-center border-[#AC702F] md:py-1 py-1.5 md:px-1 rounded-2xl">
            Buy now
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductsCard;

