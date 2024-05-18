import Link from "next/link";
import initTranslations from "../../i18n";
import TranslationProvider from "@/components/TranslationProvider";

const i18nNamespaces = ["profile", "common"];

export default async function Profile({ params: { locale } }: any) {
  const { t, resources } = await initTranslations({
    locale: locale,
    namespaces: i18nNamespaces,
  });

  return (
    <TranslationProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-6xl font-bold mb-8">{t("common:profile")}</h1>
        <p className="text-xl">{t("welcome_profile")}</p>
        <div className="flex gap-6 mt-8">
          <Link
            className="text-blue-500 border-b border-blue-500 hover:text-white hover:border-white"
            href={`/${locale}`}
          >
            {t("common:home")}
          </Link>
          <Link
            className="text-blue-500 border-b border-blue-500 hover:text-white hover:border-white"
            href={`/${locale}/about`}
          >
            {t("common:about")}
          </Link>
        </div>
      </main>
    </TranslationProvider>
  );
}
