
import { useRef, useState } from "react";
import ShopProducts from "../../components/ShopProducts/ShopProducts";
import { useProductStore, useSearchStore } from "../../store/Store";

function Products() {
  const setCategory = useProductStore((state) => state.setCategory);
  const setFetchBySearch = useSearchStore((state) => state.setFetchBySearch);
  const Footwear = useRef();
  const Tops = useRef();

  const [price, setPrice] = useState(200);

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
                  min="30"
                  max="200"
                  className="range range-primary"
                  onChange={(e)=> setPrice(e.target.value)}
                />
                <div className="flex justify-between text-sm">
                  <span>${price}</span>
                  <span>$200</span>
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
                      onClick={()=> {
                        HandleCategory("Footwear");
                        setFetchBySearch(false);
                        if(Tops.current.checked){
                          Tops.current.checked = false;
                        }
                      }}
                      ref={Footwear}
                    />
                    <span>Footwear</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      onClick={()=>{ 
                        HandleCategory("Tops");
                        setFetchBySearch(false);
                        if(Footwear.current.checked){
                          Footwear.current.checked = false;
                        }
                      }}
                      ref={Tops}
                    />
                    <span>Tops</span>
                  </label>
  
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <ShopProducts price={price} setPrice={setPrice} />
        </div>
      </div>
    </>
  );
}

export default Products;
