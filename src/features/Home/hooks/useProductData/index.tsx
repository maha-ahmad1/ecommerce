import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const useProductData = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProductData;
