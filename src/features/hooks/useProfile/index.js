import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useProfile = () => {
  const { data, error } = useSWR("https://ybiapi.fresh-app.com/api/demo_profile", fetcher);
  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProfile;
