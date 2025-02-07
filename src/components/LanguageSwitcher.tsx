"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Select } from "antd";

export default function LanguageSwitcher() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    router.push(`/${newLocale}`);
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      options={[
        { value: "tr", label: t("common.tr") },
        { value: "en", label: t("common.en") },
      ]}
      style={{ width: 140 }}
    />
  );
}