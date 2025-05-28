import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductViewContent from "./ProductViewContent";
import { ProductModalType } from "./type";
const ProductModal:React.FC<ProductModalType> = ({id,closeModal,open}) => {
  return (
    <Dialog onOpenChange={closeModal} open={open}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="overflow-y-auto">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <ProductViewContent id={id}/>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
