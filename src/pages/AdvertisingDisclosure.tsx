import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AdvertisingDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <a href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </a>
        
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
          Advertising Disclosure
        </h1>
        
        <div className="prose prose-slate max-w-none text-foreground">
          <p className="text-lg mb-4">
            This website contains affiliate links and advertisements. We may receive compensation when you click on or make purchases through these links.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Affiliate Relationships</h2>
          <p className="mb-4">
            We participate in affiliate marketing programs, which means we may earn a commission when you purchase products through our links. This includes, but is not limited to, links to Cozy Earth, Miracle Made, Sleepgram, Grounding Co., and Cariloha.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Editorial Independence</h2>
          <p className="mb-4">
            Our reviews and recommendations are based on genuine research and personal experience. While we may receive compensation for affiliate purchases, this does not influence our editorial content or product evaluations.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Transparency</h2>
          <p className="mb-4">
            We believe in complete transparency with our readers. All affiliate links are clearly marked, and we only recommend products we genuinely believe provide value to our audience.
          </p>
          
          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingDisclosure;
