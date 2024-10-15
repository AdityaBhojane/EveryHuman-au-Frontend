import { useCartStore, useProductDetailsStore } from "../../store/Store";

function ProductDetails() {

  const ProductDetails = useProductDetailsStore(state => state.ProductDetails);
  const setCartProducts = useCartStore((state)=> state.setCartProducts);
  const cartProduct = useCartStore((state)=> state.cartProduct);

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
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/3">
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={ProductDetails.image}
                  alt="Product"
                  className="w-full h-auto"
                />
              </figure>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">{ProductDetails.title}</h1>
            <p className="text-lg text-gray-600">
            {ProductDetails.paragraph}
            </p>

            {/* Price */}
            <div className="text-2xl font-semibold text-primary">${ProductDetails.price}</div>


            {/* Add to Cart Button */}
            <button
             className={`btn btn-primary ${duplicateProduct(ProductDetails.title)? "bg-slate-400 text-white":""}`}
             onClick={()=>{
              if(duplicateProduct(ProductDetails.title)){
                alert("This Product is already added into the cart");
                return;
              }
              setCartProducts({
                title:ProductDetails.title,
                description:ProductDetails.paragraph,
                image:ProductDetails.image,
                price:ProductDetails.price
              })
             }}
             >
              {duplicateProduct(ProductDetails.title)? 'Product added':'Add to cart'}
            </button>

            {/* Additional Details */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <p dangerouslySetInnerHTML={{ __html: ProductDetails.details }} ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
