import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const useProductData = (limit?: number) => {
  const url = limit ? `https://fakestoreapi.com/products?limit=${limit}` : "https://fakestoreapi.com/products";
  const { data, error } = useSWR(url, fetcher);
  return {
    products: data,
    isLoading:  !data,
    isError: error,
  };
};

export default useProductData;
