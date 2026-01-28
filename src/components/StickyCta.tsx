import { Button } from "@/components/ui/button";

const StickyCta = () => {
  const scrollToSleepProducts = () => {
    const section = document.getElementById("sleep-products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg py-3 px-4">
      <div className="max-w-4xl mx-auto flex gap-3 justify-center">
        <a
          href="https://cozyearth.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[200px]"
        >
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Shop Sheets
          </Button>
        </a>
        <Button
          variant="outline"
          className="flex-1 max-w-[200px] font-semibold"
          onClick={scrollToSleepProducts}
        >
          Top Sleep Products
        </Button>
      </div>
    </div>
  );
};

export default StickyCta;
