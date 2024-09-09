function ProductDetails() {
  return (
    <>
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Product"
                  className="w-full h-auto"
                />
              </figure>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">Product Name</h1>
            <p className="text-lg text-gray-600">
              This is a short description of the product. It provides the key
              details of the product, such as features, benefits, and more.
            </p>

            {/* Price */}
            <div className="text-2xl font-semibold text-primary">$99.99</div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label className="text-md font-medium">Quantity:</label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="input input-bordered w-20"
              />
            </div>

            {/* Add to Cart Button */}
            <button className="btn btn-primary w-full lg:w-1/2">
              Add to Cart
            </button>

            {/* Additional Details */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <p>
                Here, you can add some more detailed descriptions of the
                product, such as size, material, care instructions, and so on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
