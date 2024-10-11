import { useQuery } from "@tanstack/react-query";
import FetchBanner from "../../Utils/FetchDataByCategory/";

function Banner() {
  const { data } = useQuery({
    queryKey: ["BannersImage"],
    queryFn: () => {
      return FetchBanner();
    },
  });


  return (
    <>
      <div className="w-full h-56 m-auto">
        <img className="w-full h-full object-cover" src={data?.collections[2].image.src} alt="banner" />
      </div>
    </>
  );
}

export default Banner;
