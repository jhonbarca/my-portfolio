import Layout from "./components/Layout";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { t } = useLanguage();

  return (
    <Layout>
      <h2 className="text-2xl font-semibold">{t("welcome")}</h2>
    </Layout>
  );
}

export default App;

