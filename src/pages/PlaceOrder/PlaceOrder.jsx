import { useState } from "react";
import {
  useCartStore,
  useOrderStore,
  usePlaceOrderStore,
} from "../../store/Store";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [deliveryDate] = useState("2024-09-15"); // Example delivery date
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  // const [cardNumber, setCardNumber] = useState('');
  // const [cardExpiry, setCardExpiry] = useState('');
  // const [cardCVC, setCardCVC] = useState('');

  const navigate = useNavigate();

  const setOrderProducts = useOrderStore((state) => state.setOrderProducts);
  const setClearCart = useCartStore((state) => state.setClearCart);
  const checkoutProducts = usePlaceOrderStore(
    (state) => state.checkoutProducts
  );

  const getTotalPrice = checkoutProducts.reduce(
    (acc, curr) => acc + parseInt(curr.price),
    0
  );


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Place Your Order</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Shipping Details */}
        <div className="w-full lg:w-3/4">
          <div className="card bg-base-100 shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>

            {/* Name Input */}
            <div className="mb-4">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Address Input */}
            <div className="mb-4">
              <label className="text-sm font-medium">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Pincode Input */}
            <div className="mb-4">
              <label className="text-sm font-medium">Pincode</label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter your pincode"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Estimated Delivery Date */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Estimated Delivery:</h3>
              <p>{deliveryDate}</p>
            </div>
            <div className="text-lg font-semibold">
              <p className="">Total Price : $ {getTotalPrice}</p>
            </div>
          </div>
        </div>

        {/* Right Section: Payment Options */}
        <div className="w-full lg:w-1/4">
          <div className="card bg-base-100 shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Options</h2>

            {/* Payment Method Radio Buttons */}
            <div className="mb-4">
              {/* <label className="cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={paymentMethod === 'Credit Card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="radio radio-primary mr-2"
                />
                <span>Credit/Debit Card</span>
              </label> */}
              <label className="cursor-pointer flex items-center mt-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="radio radio-primary mr-2"
                />
                <span>Cash on Delivery (COD)</span>
              </label>
            </div>

            {/* Card Details Section (shown only if Credit/Debit Card is selected) */}
            {/* {paymentMethod === 'Credit Card' && (
              <div className="mt-4">
                <div className="mb-4">
                  <label className="text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="mb-4 flex-1">
                    <label className="text-sm font-medium">Expiry Date</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="mb-4 flex-1">
                    <label className="text-sm font-medium">CVC</label>
                    <input
                      type="text"
                      value={cardCVC}
                      onChange={(e) => setCardCVC(e.target.value)}
                      placeholder="123"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
              </div>
            )} */}

            <button
              className="btn btn-primary w-full"
              onClick={() => {
                // Handle order placement logic here
                if (name == "" || address == "" || pincode == "") {
                  alert("Please enter all details");
                } else if (isNaN(parseInt(pincode))) {
                  alert("Please enter valid pin-code");
                } else if (paymentMethod == "Credit Card") {
                  alert("Select Payment Method");
                } else {
                  document.getElementById("my_modal_2").showModal();
                  setOrderProducts(checkoutProducts);
                  setClearCart([]);
                  setTimeout(() => {
                    navigate("/OrderStatus");
                  }, 2000);
                }
              }}
            >
              Place Order (COD)
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
