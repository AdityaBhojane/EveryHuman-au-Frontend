import { useAdminStore, useOrderStore } from "../../store/Store";

const OrderStatus = () => {
  // const DelhiveryStatus = useAdminStore((state) => state.DelhiveryStatus);
  let a = 1;

  const orderProduct = useOrderStore((state) => state.orderProduct);
  const clearStorage = useOrderStore((state) => state.clearStorage);


  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <h1 className="text-3xl font-bold mb-8">Order Status</h1>
      </div>
      <button className="border border-[#ccc] rounded-xl p-2 bg-red-400 text-white"
       onClick={()=> {clearStorage(); window.location.reload()}}
      >Clear All</button>

      <div className="card bg-base-100 shadow-lg p-6">
        {/* Product Information */}
        {orderProduct.length > 0 ? (
          orderProduct.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-6 my-6 border border-[#ccc] p-6 rounded-xl"
              >
                <div className="flex-shrink-0 w-[20%]">
                  <img
                    src={items.image}
                    alt="Product"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <h2 className="text-sm font-semibold mt-2">{items.title}</h2>
                </div>
                {/* Order Status Section */}
                <div className="flex-1">
                  <ul className="steps steps-vertical lg:steps-horizontal w-full">
                    <li
                      className={`step ${
                        a >= 1 ? "step-primary" : ""
                      }`}
                    >
                      Order Placed
                    </li>
                    <li
                      className={`step ${
                        a >= 2 ? "step-primary" : ""
                      }`}
                    >
                      Processing
                    </li>
                    <li
                      className={`step ${
                        a >= 3 ? "step-primary" : ""
                      }`}
                    >
                      On the Way
                    </li>
                    <li
                      className={`step ${
                        a >= 4 ? "step-primary" : ""
                      }`}
                    >
                      Out for Delivery
                    </li>
                    <li
                      className={`step ${
                        a >= 5 ? "step-primary" : ""
                      }`}
                    >
                      Delivered
                    </li>
                  </ul>

                  {/* Order Details */}
                  <div className="mt-4 ml-16">
                    <h3 className="text-lg font-semibold">
                      Status: On the Way
                    </h3>
                    <p className="text-gray-600">
                      Estimated delivery: 2-3 days.
                    </p>
                  </div>
                </div>

                {/* Cancel Button */}
                <div className="flex items-center justify-center lg:justify-start">
                  <button className="btn btn-error btn-outline">
                    Cancel Order
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-xl text-center font-bold">
            <h3>No Order Placed ...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
