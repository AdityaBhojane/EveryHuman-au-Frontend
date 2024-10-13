import { useState } from "react";
import { useCartStore, usePlaceOrderStore } from "../../store/Store";
import imageNotFound from "../../assets/imageNotFound.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartProduct = useCartStore((state) => state.cartProduct);
  const setCheckoutProducts = usePlaceOrderStore((state) => state.setCheckoutProducts);
  const [coupon, setCoupon] = useState("");
  // const [totalPrice, setTotalPrice] = useState(0)
  // const discount = coupon === "DISCOUNT10" ? 0.1 * pricePerItem : 0; // 10% discount for 'DISCOUNT10'


  const getAllPrices = ()=>{
    const Total = cartProduct.reduce((acc,curr) => acc + parseInt(curr.price), 0);
    return Total;
  }

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full lg:w-3/4">
          {cartProduct.length > 0 ? (
            cartProduct.map((items, index) => {
              return (
                <div key={index}>
                  <div className="card bg-base-100 shadow-lg p-6 mb-4">
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={items.image ? items.image : imageNotFound}
                          alt="Product"
                          className="w-24 h-24 object-cover rounded"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold">{items.title}</h2>
                        <p className="text-gray-600">$ {items.price}</p>
                      </div>

                      {/* Price Section */}
                      <div className="text-lg font-semibold">
                        Total: ${items.price}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-xl text-center font-bold">
              <h3>Cart is empty ...</h3>
            </div>
          )}

          {/* Discount Coupon Section */}
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Have a coupon?</h3>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={coupon}
                onChange={handleCouponChange}
                placeholder="Enter Coupon Code"
                className="input input-bordered w-full lg:w-1/2"
              />
              <button className="btn btn-primary">Apply</button>
            </div>

            {/* {discount > 0 && (
              <p className="text-green-500 mt-4">
                Coupon applied! You saved ${discount.toFixed(2)}.
              </p>
            )} */}
          </div>
        </div>

        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/4">
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${getAllPrices()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount:</span>
              <span>-${0}</span>
            </div>
            <div className="flex justify-between mb-4 text-lg font-semibold">
              <span>Total:</span>
              <span>${}</span>
            </div>

            {cartProduct.length > 0 ? (
              <>
                <button
                  className="btn"
                  onClick={() => {
                    document.getElementById("my_modal_2").showModal();
                    setCheckoutProducts(cartProduct);
                    setTimeout(() => {
                      navigate("/PlaceOrder");
                    }, 2000);
                  }}
                >
                  Go to Checkout
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-2xl">
                      Please wait we are processing the order
                    </h3>
                    <p className="py-4">
                      Redirecting to Checkout Page{" "}
                      <span className="loading loading-dots loading-xs relative top-1"></span>
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </>
            ) : (
              <div className="text-xl text-center font-bold">
                <h3>...</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
