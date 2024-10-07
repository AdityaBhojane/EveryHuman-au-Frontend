
import ShopProducts from "../../components/ShopProducts/ShopProducts";
import { useProductStore } from "../../store/Store";

function Products() {
  const {setCategory} = useProductStore();

  const HandleCategory = (newCategory)=>{
    setCategory(newCategory)
  }


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
                  <span>$10</span>
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
                      onClick={()=> HandleCategory("Footwear")}
                    />
                    <span>Footwear</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      onClick={()=> HandleCategory("Tops")}
                    />
                    <span>Tops</span>
                  </label>
  
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <ShopProducts/>
        </div>
      </div>
    </>
  );
}

export default Products;
