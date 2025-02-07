"use client";

import { useState } from "react";
import { Drawer, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/hooks/useAppSelector";
import CartContainer from "@/containers/CartContainer";
import { cartCountSelector } from "@/features/selectors/cartSelector";
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslations } from "next-intl";

export default function Header() {
  const [open, setOpen] = useState(false);
  const cartCount = useAppSelector(cartCountSelector); 
  const t = useTranslations();  

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t("header.home")}</h1>
      
      <Badge count={cartCount} showZero>
        <ShoppingCartOutlined
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </Badge>

      <Drawer
        title={t("common.cart")}
        placement="right"
        closable
        onClose={() => setOpen(false)}
        open={open}
        width={400}
      >
        <CartContainer />
      </Drawer>
      <LanguageSwitcher />
    </header>
  );
}