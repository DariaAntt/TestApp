import { Link } from "react-router";
import {
  Card,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./style";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div onClick={() => onProductClick(product)} style={{ cursor: "pointer" }}>
      <Card>
        <ProductImage>
          <img src={product.image} alt={product.title} />
        </ProductImage>
        <ProductDescription>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price} ₽</ProductPrice>
        </ProductDescription>
      </Card>
    </div>
  );
}
