import { IProduct } from "@/types/IProduct";
import { Card, Button, Spin } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProductListProps {
  products: IProduct[];
  loading: boolean;
  error: string | null;
  onAddToCart: (product: IProduct) => void;
}

export default function ProductList({ products, loading, error, onAddToCart }: ProductListProps) {
  const t = useTranslations();
  
  if (loading) return <Spin size="large" className="flex justify-center my-10" />;
  if (error) return <p className="text-red-500 text-center">{t("common.error")}: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="shadow-lg rounded-lg"
          cover={
            <Image
              alt={product.title}
              src={product.image}
              className="object-contain h-48 w-full p-4"
              width={200}
              height={200}
            />
          }
        >
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-700">${product.price}</p>
          <Button type="primary" className="mt-2 w-full" onClick={() => onAddToCart(product)}>
            {t("common.add_to_cart")}
          </Button>
        </Card>
      ))}
    </div>
  );
}