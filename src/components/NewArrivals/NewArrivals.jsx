import { useQuery } from "@tanstack/react-query";
import FetchData from "../../Utils/FetechData";
import Card from "../Card/Card";
import { useState } from "react";

function NewArrivals() {
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["Products", page],
    queryFn: () => FetchData(page),
  });

  return (
    <>
      <div className="w-[90%] mt-5   m-auto">
        <div className="text-center mt-20">
          <h1 className="text-3xl">New Collection</h1>
        </div>
        <div className="w-[90%] mt-20 m-auto grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data?.map((items, index) => {
            return (
              <Card
                key={index}
                Title={items.title}
                image={items.images[0].src}
                Description={items.handle}
                isLoading={isLoading
                  
                }
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

export default NewArrivals;
