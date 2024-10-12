/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import CardSkeletonProducts from "../CardSkeleton/CardSkeletonProducts";
import { useProductStore, useSearchStore } from "../../store/Store";
import FetchDataByCategory from "../../Utils/FetchDataByCategory";
import FetchDataBySearch from "../../Utils/FetchDataBySearch"
import { useEffect, useState } from "react";
import imageNotFound from '../../assets/imageNotFound.png'




function ShopProducts({ price }) {
  const category = useProductStore((state) => state.category);
  const searchValue = useSearchStore((state) => state.searchValue);
  const fetchBySearch = useSearchStore((state) => state.fetchBySearch);
  const [debounceValue, setDebounceValue] = useState(searchValue);

  // Debouncing logic
  useEffect(() => {
    const searchDebounce = setTimeout(() => {
      setDebounceValue(searchValue);
    }, 1000);
    return () => clearTimeout(searchDebounce);
  }, [searchValue]);

  const { data, isLoading } = useQuery({
    queryKey: ["Products", category, price, debounceValue, fetchBySearch],
    queryFn: () => {
      if (fetchBySearch && debounceValue) {
        return FetchDataBySearch(debounceValue,price); // No setTimeout here
      } else {
        return FetchDataByCategory(category, price);
      }
    },
    enabled: !!debounceValue || !!category, // Ensure debounceValue is set before fetching
    staleTime: 5000, 
    cacheTime: 10000,
  });
  
  if (isLoading) {
    return <CardSkeletonProducts />;
  }


  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="w-[90%] m-auto grid grid-cols-3 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data.length > 0 ? (
            data?.map((items, index) => {
              return (
                <Card
                  key={index}
                  Title={items.title}
                  image={items.images[0]? items.images[0].src:imageNotFound}
                  Description={items?.handle}
                  price={items.variants[0]?.price}
                />
              );
            })
          ) : (
            <div className="text-center">
              <h3 className="text-2xl">Product Not Found ...</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShopProducts;
