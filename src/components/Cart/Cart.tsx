import { List, Button, Divider } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import { ICartItem } from "@/types/ICartItem";
import { useTranslations } from "next-intl";


interface CartProps {
  cartItems: ICartItem[];
  totalPrice: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onClearCart: () => void;
}

export default function Cart({ cartItems, totalPrice, onIncrement, onDecrement, onClearCart }: CartProps) {
  const t = useTranslations();
  
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>{t("common.empty_cart")}</p>
      ) : (
        <>
          <List
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item className="flex justify-between">
                <span>{item.title} - ${item.price} x {item.quantity}</span>
                <div className="flex items-center gap-2">
                  {item.quantity > 1 ? (
                    <Button shape="circle" icon={<MinusOutlined />} onClick={() => onDecrement(item.id)} />
                  ) : (
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => onDecrement(item.id)} />
                  )}
                  
                  <span className="font-bold">{item.quantity}</span>

                  <Button shape="circle" icon={<PlusOutlined />} onClick={() => onIncrement(item.id)} />
                </div>
              </List.Item>
            )}
          />
          <Divider />
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>{t("common.total_price")}:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Button type="primary" danger block className="mt-4" onClick={onClearCart}>
            {t("common.clear_cart")}
          </Button>
        </>
      )}
    </div>
  );
}