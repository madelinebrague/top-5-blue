import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSleepProducts = () => {
    const section = document.getElementById("sleep-products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md py-3 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto flex gap-3 justify-center">
        <a
          href="https://cozyearth.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[200px]"
        >
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Shop Sheets <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
        <Button
          className="flex-1 max-w-[200px] font-semibold bg-hero-blue-dark hover:bg-hero-blue-dark/90 text-white"
          onClick={scrollToSleepProducts}
        >
          Top Sleep Products <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StickyCta;
