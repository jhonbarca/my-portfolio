import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="space-y-20">
      <section id="about" className="scroll-mt-20 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">{t("about")}</h2>
        <p>{t("about_text")}</p>
      </section>

      <section id="projects" className="scroll-mt-20 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">{t("projects")}</h2>
        <p>{t("projects_text")}</p>
      </section>

      <section id="contact" className="scroll-mt-20 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">{t("contact")}</h2>
        <p>{t("contact_text")}</p>
      </section>
    </section>
  );
};

export default Home;
