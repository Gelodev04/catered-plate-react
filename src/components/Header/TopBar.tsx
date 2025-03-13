import { fetchTopBar } from "../../services/strapiService";
import { useQuery } from "@tanstack/react-query";

const TopBar = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-bar"],
    queryFn: () => fetchTopBar("top-bar"),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="hidden">
      <p>{data?.data?.opening_hours}</p>
    </div>
  );
};

export default TopBar;
