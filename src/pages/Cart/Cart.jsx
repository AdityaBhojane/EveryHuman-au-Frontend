import { useState } from "react";

function Cart() {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full lg:w-3/4">
          <div className="card bg-base-100 shadow-lg p-6 mb-4">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product"
                  className="w-24 h-24 object-cover rounded"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Product Name</h2>
                <p className="text-gray-600">$99.99</p>

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

            {/* Update Cart Button */}
            <button className="btn btn-primary w-full">Update Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
