import { useQuery } from "@tanstack/react-query";
import FetchData from "../../Utils/FetechData";

function BestSeller() {
  const { data } = useQuery({
    queryKey: ["Products"],
    queryFn: () => FetchData(3),
  });

  return (
    <div className="hero bg-base-200 min-h-screen select-none">
      <div className="flex w-[90%] mx-auto max-xl:block lg:flex-row-reverse">
        <div className="flex gap-2 p-5 ">
          <img
            src={data && data[0].images[2].src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <img
            src={data && data[0].images[0].src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="self-start p-5">
          <h1 className="text-6xl font-bold my-5">Best Seller !</h1>
          <p className="py-6 w-[60%] text-xl">
            Experience the perfect blend of quality, functionality, and style
            with our. Designed to meet your everyday needs, this versatile
            product is a must-have for anyone looking to enhance their
            lifestyle. High-Quality Material: Made from premium [Material],
            ensuring durability and long-lasting performance.
          </p>
          <br />
          <button className="btn btn-primary font-bold">Get it Now !</button>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
