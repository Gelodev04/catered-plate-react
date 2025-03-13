import { useQuery } from "@tanstack/react-query"
import { fetchEvent  } from "@/services/strapiService"
import { Arrow } from "@/components/svgicons/uprightarrow";

export default function Event() {
const {data, isLoading, error} = useQuery({
  queryKey: ["event"],
  queryFn: () => fetchEvent("event"),
  staleTime: 1000 * 60 * 5,
})

if(isLoading) return <p>Loading...</p>;
if(error) return <p>Error loading data</p>;

  return (
    <section className="mt-15">
        <div className="bg-main  rounded-t-[5rem] relative py-10 text-[white] text-center px-5 space-y-2">
          <h1 className=" text-[2.5rem]  font-sedan ">{data?.data?.title}</h1>
          <p className="text-[1.2rem]">{data?.data?.description}</p>

          <ul className="mt-13 flex flex-col gap-8 justify-center items-center">
            {data?.data?.where.map((item: any, index: number) => (
              <li key={index}>
                <img className="rounded  size-[23rem]" src={item.img} alt="" />
                <button className="flex items-center justify-center mx-auto  gap-1">
                  <span className="text-[1.8rem] font-sedan block mt-2">{item.event}</span>
                  <span className="mt-[10px]"><Arrow/></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}
