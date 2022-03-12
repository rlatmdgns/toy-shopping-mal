import React from "react";
import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);
  return <div>1</div>;
};

export default ProductList;
