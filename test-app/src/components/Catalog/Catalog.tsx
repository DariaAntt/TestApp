import { Product } from "../ProductCard/ProductCard";
import { ProductCard } from "../ProductCard/ProductCard";

import { CatalogList, Container } from "./style";

interface CatalogProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function Catalog({ products, onProductClick }: CatalogProps) {
  return (
    <Container>
      <h1>Каталог товаров</h1>
      <CatalogList>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </CatalogList>
    </Container>
  );
}
