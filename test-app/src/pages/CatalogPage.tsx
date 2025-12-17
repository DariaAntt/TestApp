import React, { useEffect, useState } from "react";
import { Catalog } from "../components/Catalog/Catalog";
import { Product } from "../components/ProductCard/ProductCard";
import { Search } from "../components/Search/Search";
import { testData } from "../test-data/test-data";
import { ProductModal } from "../components/ProductModal/ProductModal";

export function CatalogPage() {
  const [search, setSearch] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = testData.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Search value={search} onChange={setSearch} />
      <Catalog
        products={filteredProducts}
        onProductClick={handleProductClick}
      />
      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}
