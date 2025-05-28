export type ProductType = {
  id:number
  name: string;
  description: string;
  prices: {
    sachet: number;
    weeklyBundle: number;
  };
 images:ProductImage[]
};

export type ProductImage={
  link:string
}

export type ProductListType = ProductType[];