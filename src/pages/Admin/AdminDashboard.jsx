import { useState } from 'react';

const products = [
  { id: 1, title: 'Product 1', price: '$29.99', date: '2024-09-01', status: 'Order Placed' },
  { id: 2, title: 'Product 2', price: '$49.99', date: '2024-09-05', status: 'On the Way' },
  { id: 3, title: 'Product 3', price: '$19.99', date: '2024-09-10', status: 'Delivered' },
];

const AdminDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [refundAmount, setRefundAmount] = useState('');
  const [cancellationRequest, setCancellationRequest] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setDeliveryStatus(product.status);
    setCancellationRequest('Pending');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleDeliveryStatusChange = (e) => {
    setDeliveryStatus(e.target.value);
    // Additional logic to update status in backend
    alert(`Delivery status set to: ${e.target.value}`);
  };

  const handleRefund = () => {
    if (refundAmount) {
      // Logic to process refund
      alert(`Refund of $${refundAmount} processed successfully!`);
      setRefundAmount('');
    }
  };

  const handleCancellation = (status) => {
    setCancellationRequest(status);
    // Logic to handle cancellation in backend
    alert(`Cancellation request: ${status}`);
  };

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
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 bg-gray-300"></div> {/* Placeholder for product image */}
                      <span>{product.title}</span>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.date}</td>
                  <td>{product.status}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => openModal(product)}
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Managing Product */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-5xl">
              <h2 className="text-xl font-semibold mb-4">Manage Product: {selectedProduct?.title}</h2>
              <div className="flex flex-col space-y-4">
                {/* Set Delivery Status */}
                <div>
                  <h3 className="text-md font-semibold mb-2">Set Delivery Status</h3>
                  <select
                    value={deliveryStatus}
                    onChange={handleDeliveryStatusChange}
                    className="select select-bordered w-full"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="On the Way">On the Way</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                {/* Process Refund */}
                <div>
                  <h3 className="text-md font-semibold mb-2">Process Refund</h3>
                  <input
                    type="text"
                    value={refundAmount}
                    onChange={(e) => setRefundAmount(e.target.value)}
                    placeholder="Enter refund amount"
                    className="input input-bordered w-full"
                  />
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleRefund}
                  >
                    Process Refund
                  </button>
                </div>

                {/* Handle Cancellation */}
                <div>
                  <h3 className="text-md font-semibold mb-2">Handle Cancellation</h3>
                  <p>Current cancellation request status: {cancellationRequest}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="btn btn-success"
                      onClick={() => handleCancellation('Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleCancellation('Rejected')}
                    >
                      Reject
                    </button>
                  </div>
                </div>

                <div className="modal-action">
                  <button className="btn" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
