import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arecê | Perfume Sólido Natural com Proteção Repelente</title>
        <meta 
          name="description" 
          content="Arecê é um perfume sólido 100% natural que protege contra o Aedes aegypti com óleo de copaíba. Sustentável, prático e multifuncional." 
        />
        <meta name="keywords" content="perfume natural, repelente natural, óleo de copaíba, proteção mosquitos, dengue, sustentável" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ProductSection />
          <DifferentialsSection />
          <MissionSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
