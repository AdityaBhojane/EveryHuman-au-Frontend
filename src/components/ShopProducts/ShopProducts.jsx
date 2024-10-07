import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "../Card/Card";
import CardSkeletonProducts from "../CardSkeleton/CardSkeletonProducts";
import FetchDataByCategory from "../../Utils/FetchDataByCategory";
import { useProductStore } from "../../store/Store";

function ShopProducts() {
    const [page, setPage] = useState(0);
    // const [category, setCategory] = useState("Tops")
    const {category} = useProductStore();

    const { data, isLoading } = useQuery({
      queryKey: ["Products", category],
      queryFn: () => FetchDataByCategory(category),   
    });

    // console.log(data[0].variants[0].price)


    if(isLoading){
      return <CardSkeletonProducts/>
    }
  
    return (
      <>
        <div className="w-[90%] m-auto">
          <div className="w-[90%] m-auto grid grid-cols-3 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {data?.map((items, index) => {
              return (
                <Card
                  key={index}
                  Title={items.title}
                  image={items.images[0].src}
                  Description={items.handle}
                  price={items.variants[0].price}
                />
              );
            })}
          </div>
          <div className="w-full text-center my-12">
            <button
              onClick={() => {
                if (page > 1) {
                  setPage((pre) => pre - 1);
                }
              }}
              className="join-item btn btn-outline mx-5"
            >
              Previous page
            </button>
            <button
              onClick={() => {
                setPage((pre) => pre + 1);
              }}
              className="join-item btn btn-outline  px-10"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default ShopProducts;