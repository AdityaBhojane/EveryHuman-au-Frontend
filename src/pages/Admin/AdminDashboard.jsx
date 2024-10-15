
import { useOrderStore } from "../../store/Store";

const AdminDashboard = () => {
  const orderProduct = useOrderStore((state) => state.orderProduct);
  const setStatus = useOrderStore((state) => state.setStatus);
  const setCancellation = useOrderStore((state) => state.setCancellation);
  console.log(orderProduct);



  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Product Information Table */}
      <div className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Product Information</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Image/Title</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Status</th>
              </tr>
            </thead>
            {orderProduct?.map((product, index) => (
              <thead key={index}>
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-2 my-10">
                      <div className="w-12 h-12 bg-gray-300">
                        <img
                          className="object-cover"
                          src={product.image}
                          alt="image"
                        />
                      </div>{" "}
                      {/* Placeholder for product image */}
                      <span>{product.title}</span>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{`${day}/${month}/${year}`}</td>
                  <td>{product.status.value}</td>
                </tr>
                <tr className="bg-base-200 border border-white">
                  <td>
                    <div className="w-full">
                      <h2 className="text-xl font-semibold mb-4">
                        Manage Product:
                      </h2>
                    </div>
                  </td>
                  <td>
                    {/* Set Delivery Status */}
                    <div className="w-[200px] ">
                      <h3 className="text-md font-semibold mb-2">
                        Set Delivery Status
                      </h3>
                      <select
                        // value={deliveryStatus}
                        onChange={(e) => {
                          alert(`Delivery status set to: ${e.target.value}`);
                          if (e.target.value == "Processing") {
                            setStatus(index, 2, e.target.value);
                          } else if (e.target.value == "On the Way") {
                            setStatus(index, 3, e.target.value);
                          } else if (e.target.value == "Out for Delivery") {
                            setStatus(index, 4, e.target.value);
                          } else {
                            setStatus(index, 5, e.target.value);
                          }
                        }}
                        className="select select-bordered w-full"
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Processing">Processing</option>
                        <option value="On the Way">On the Way</option>
                        <option value="Out for Delivery">
                          Out for Delivery
                        </option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    {/* Handle Cancellation */}
                    <div>
                      <div>
                        <h3 className="text-md font-semibold mb-2">
                          Handle Cancellation
                        </h3>
                        <p className="font-bold">
                          Request Status:
                          <span
                            className={`font-bold ${
                              product.status.cancelRequest
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {product.status.cancelRequest
                              ? " CANCEL REQUEST IS PENDING"
                              : " NO CANCEL REQUEST"}
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          className="btn btn-success disabled:border disabled:border-[#797979] disabled:text-white"
                          disabled={!product.status.cancelRequest}
                          onClick={() => {
                            setCancellation(index, true, false);
                          }}
                        >
                          Approve
                        </button>
                        <button
                          disabled={!product.status.cancelRequest}
                          className="btn btn-error disabled:border disabled:border-[#797979] disabled:text-white"
                          onClick={() => setCancellation(index, false, false, true)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    ...
                  </td>
                </tr>
              </thead>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
