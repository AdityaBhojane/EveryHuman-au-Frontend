import { useState } from "react";
import { useCartStore, useOrderStore } from "../../store/Store";
import imageNotFound from "../../assets/imageNotFound.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const cartProduct = useCartStore((state) => state.cartProduct);
  // const setClearCart = useCartStore(state=> state.setClearCart);
  const setOrderProducts = useOrderStore(state=> state.setOrderProducts)
  const [coupon, setCoupon] = useState("");
  const pricePerItem = 99.99; // Example product price
  const discount = coupon === "DISCOUNT10" ? 0.1 * pricePerItem : 0; // 10% discount for 'DISCOUNT10'

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const totalPrice = quantity * (pricePerItem - discount);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full lg:w-3/4">
          {cartProduct.length>0? cartProduct.map((items, index) => {
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
                      <p className="text-gray-600">{items.price}</p>

                      {/* Quantity Selector */}
                      <div className="mt-4">
                        <label className="text-sm font-medium">Quantity:</label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="input input-bordered w-20 ml-2"
                        />
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="text-lg font-semibold">
                      Total: ${(pricePerItem * quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }):(
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

            {discount > 0 && (
              <p className="text-green-500 mt-4">
                Coupon applied! You saved ${discount.toFixed(2)}.
              </p>
            )}
          </div>
        </div>

        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/4">
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${(pricePerItem * quantity).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount:</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-lg font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

           {cartProduct.length>0? <><button
              className="btn"
              onClick={() => {
                document.getElementById("my_modal_2").showModal();
                setOrderProducts(cartProduct)
                setTimeout(() => {
                  navigate("/OrderStatus");
                }, 2000);
              }}
            >
              Place Order (COD)
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-2xl">Order Placed Successfully</h3>
                <p className="py-4">Redirecting to Order section <span className="loading loading-dots loading-xs relative top-1"></span></p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            </>:
            (
              <div className="text-xl text-center font-bold">
                <h3>...</h3>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
