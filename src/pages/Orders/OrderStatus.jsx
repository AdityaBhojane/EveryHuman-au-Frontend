

const OrderStatus = () => {
  const currentStatus = 2; // Dynamic order status value (e.g., 1 = Order Placed, 2 = On the Way, etc.)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Order Status</h1>

      <div className="card bg-base-100 shadow-lg p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Product Information */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="w-24 h-24 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">Product Name</h2>
          </div>

          {/* Order Status Section */}
          <div className="flex-1">
            <ul className="steps steps-vertical lg:steps-horizontal w-full">
              <li className={`step ${currentStatus >= 1 ? 'step-primary' : ''}`}>Order Placed</li>
              <li className={`step ${currentStatus >= 2 ? 'step-primary' : ''}`}>Processing</li>
              <li className={`step ${currentStatus >= 3 ? 'step-primary' : ''}`}>On the Way</li>
              <li className={`step ${currentStatus >= 4 ? 'step-primary' : ''}`}>Out for Delivery</li>
              <li className={`step ${currentStatus >= 5 ? 'step-primary' : ''}`}>Delivered</li>
            </ul>

            {/* Order Details */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Status: On the Way</h3>
              <p className="text-gray-600">Estimated delivery: 2-3 days.</p>
            </div>
          </div>

          {/* Cancel Button */}
          <div className="flex items-center justify-center lg:justify-start">
            <button className="btn btn-error btn-outline">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
