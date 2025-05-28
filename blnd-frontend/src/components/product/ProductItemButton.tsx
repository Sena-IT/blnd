import React from 'react';
import { Button } from '../ui/button';

import productsData from '../../components/product/products.json'
import { Plus, Minus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart, decrementQuantity, incrementQuantity } from '@/redux/slice/cartSlice';
import { ProductType } from '@/site-ui/shop/type';

interface ProductItemButtonProps {
  id: number;
}


export const getProductById = (id: number): ProductType | undefined => {
  return productsData.find((product: ProductType) => product.id === id);
};

const ProductItemButton: React.FC<ProductItemButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => 
    state.cart.items.find(item => item.id === id.toString())
  );

  const handleAddToCart = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const product = getProductById(id);
    if (product) {
      dispatch(addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.prices.sachet,
        image: product.images[0].link,
      }));
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(id.toString()));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(id.toString()));
  };

  if (!cartItem || cartItem.quantity === 0) {
    return (
      <Button

        onClick={handleAddToCart}
        className="mt-4 h-11 w-full cursor-pointer text-lg font-semibold hover:bg-brand-primary text-brand-secondary bg-brand-primary"
      >
        Add
      </Button>
    );
  }

  return (
    <div className="mt-4 flex items-center justify-between bg-brand-primary rounded-md h-11 px-2">
      <Button
        onClick={handleDecrement}
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary"
      >
        <Minus className="h-4 w-4" />
      </Button>
      
      <span className="text-lg font-semibold text-brand-secondary px-4">
        {cartItem.quantity}
      </span>
      
      <Button
        onClick={handleIncrement}
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProductItemButton;