function Products() {


  
  return (
    <>
      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="card bg-base-100 shadow-lg p-4">
              <h2 className="text-xl font-bold">Filters</h2>

              {/* Price Range */}
              <div className="mt-4">
                <h3 className="font-semibold">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className="range range-primary"
                />
                <div className="flex justify-between text-sm">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mt-6">
                <h3 className="font-semibold">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span>Men</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span>Women</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span>Top Rated</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Product Card */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="https://via.placeholder.com/300"
                      alt="Product"
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Product {index + 1}</h2>
                    <p>$99.99</p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
