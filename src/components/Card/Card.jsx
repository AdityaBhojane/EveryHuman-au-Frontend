/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { useCartStore, useProductDetailsStore } from "../../store/Store";



function Card({Title,Description,image,price,details}) {
  const setProductDetails = useProductDetailsStore((state=> state.setProductDetails))
  const cartProduct = useCartStore(state => state.cartProduct)
  const setCartProducts = useCartStore(state => state.setCartProducts);

  const Navigate = useNavigate();

  const duplicateProduct = (Title)=>{
    for (let i = 0; i < cartProduct.length; i++) {
      const product =  cartProduct[i].title.includes(Title);
      if(product){
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div className="card glass w-3/2 rounded-xl">
        <div className="w-full max-sm:h-[500px] cursor-pointer"
          onClick={()=> {
            setProductDetails({
              title:Title,
              price:price,
              image:image,
              paragraph:Description,
              details:details
            });
            Navigate('/ProductDetails')
          }}
        >
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
            <button className={`btn btn-primary ${duplicateProduct(Title)? "bg-slate-400 text-white":""}`}
             onClick={()=>{
              if(duplicateProduct(Title)){
                alert("This Product is already added into the cart");
                return;
              }
              setCartProducts({
                title:Title,
                description:Description,
                image:image,
                price:price
              })
             }}
            >{duplicateProduct(Title)? 'Product added':'Add to cart'}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
