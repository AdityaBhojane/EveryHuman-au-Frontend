import { useQuery } from "@tanstack/react-query";
import FetchData from "../../Utils/FetechData";

function BestSeller() {
  const { data } = useQuery({
    queryKey: ["Products"],
    queryFn: () => FetchData(3),
  });

  return (
    <div className="hero bg-base-200 min-h-screen select-none">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={data && data[0].images[0].src}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="self-start">
          <h1 className="text-6xl font-bold">Best Seller !</h1>
          <p className="py-6 w-[80%] text-xl">
            PExperience the perfect blend of quality, functionality, and style
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
