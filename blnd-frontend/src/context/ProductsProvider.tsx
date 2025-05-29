"use client";

import { ProductItems } from "@/types/types";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { base_api_url } from "@/api/constants";

const products_url =
  "/api/homepage?populate[products][populate][item][populate]=*";

const getProducts = async (): Promise<ProductItems[]> => {
  const url = `${base_api_url}${products_url}`;
  console.log('Making fetch request to:', url);

  try {
    const response = await fetch(url, {
      method: 'GET',
     
      cache: 'no-store',
    });

    console.log('Fetch response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Response data:', responseData);

    const data = responseData?.data;
    
    if (data?.products?.item) {
      console.log('Products found:', data.products.item.length);
      return data.products.item;
    } else {
      console.warn('No products found in response structure');
      console.log('Response structure:', JSON.stringify(data, null, 2));
      return [];
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

interface ProductsContextType {
  products: ProductItems[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductItems[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const productsData = await getProducts();
      setProducts(productsData);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const refetch = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const contextValue: ProductsContextType = {
    products,
    loading,
    error,
    refetch,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
