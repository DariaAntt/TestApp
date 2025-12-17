import React, { useEffect, useState } from "react";
import { Catalog } from "../components/Catalog/Catalog";
import { Product } from "../components/ProductCard/ProductCard";
import { Search } from "../components/Search/Search";
// import { testData } from "../test-data/test-data";
import { ProductModal } from "../components/ProductModal/ProductModal";

export function CatalogPage() {
  const [search, setSearch] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data-api/products.json");
        if (!response.ok) {
          throw new Error("Не удалось загрузить товары");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ошибка");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
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
