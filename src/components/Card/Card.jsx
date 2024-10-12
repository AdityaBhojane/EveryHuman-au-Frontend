/* eslint-disable react/prop-types */

import { useCartStore } from "../../store/Store";


function Card({Title,Description,image,price}) {

  const setCartProducts = useCartStore(state => state.setCartProducts)

  return (
    <>
      <div className="card glass w-3/2 rounded-xl">
        <div className="w-full max-sm:h-[500px]">
          <img
            src={image}
            alt="car!"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p>{Description}</p>
          <div>
            <h3 className="font-bold">Price : {price}$</h3>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"
             onClick={()=>{
              setCartProducts({
                title:Title,
                description:Description,
                image:image,
                price:price
              })
             }}
            >Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
