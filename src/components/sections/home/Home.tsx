import { fetchTopBar } from "../../../services/strapiService";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "./carousel";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["home"],
    queryFn: () => fetchTopBar("home"),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="text-main font-display">
      <div className="mt-14 space-y-4 mx-5">
        <p className="text-[2.5rem]  font-sedan leading-none">
          {data?.data?.title}
        </p>
        <p className="text-lg">{data?.data?.description}</p>
      </div>

      <div className="my-12">
        <Carousel/>
      </div>

      <p className="text-[2.3rem] leading-tight font-sedan text-center mx-5 ">{data?.data?.secondDescription}</p>
      <button className="mx-auto min-w-[110px] bg-main text-[#D9E45A] block rounded-[1000px]  px-8 py-4 font-sedan mt-10 text-lg active:bg-[#D9E45A] active:text-main duration-75">Contact us</button>

    </section>
  );
};

export default Home;
