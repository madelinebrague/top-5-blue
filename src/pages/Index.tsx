import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, Award, ArrowRight } from "lucide-react";
import sheetsBackground from "@/assets/sheets-background.jpg";
import authorImage from "@/assets/author-katelyn.jpg";
import cozyEarthImage from "@/assets/cozy-earth-sheets.png";
import { format } from "date-fns";

const sheets = [
  {
    id: 1,
    rank: 1,
    name: "Cozy Earth Bamboo Sheet Set",
    badge: "TOP PICK OF 2025",
    image: cozyEarthImage,
    description: "The goal of Avocado is simple; to make sheets that are non-toxic, with organic materials at an affordable price.",
    features: [
      "600 & 1,000 Thread count",
      "STANDARD 100 OEKO-TEX® & MADE SAFE®",
      "Made in USA",
      "100% Organic Cotton",
      "Breathable & Temperature Regulating",
      "Lifetime Warranty"
    ],
    rating: 4.9,
    positivePercent: 88,
    bbbRating: "A+",
    affiliateLink: "https://example.com/avocado-affiliate"
  },
  {
    id: 2,
    rank: 2,
    name: "Saatva Organic Sheets",
    badge: "Best Overall",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
    description: "Number one on our list, Saatva's sheets combine comfort with luxury touches, so you really feel like you're getting what you're paying for.",
    features: [
      "300-thread count",
      "Fair Trade Organic Standard GOTS certified",
      "100% Organic Cotton"
    ],
    rating: 4.8,
    positivePercent: 92,
    bbbRating: "A+",
    affiliateLink: "https://example.com/saatva-affiliate"
  },
  {
    id: 3,
    rank: 3,
    name: "Brooklinen Luxe Core Sheet Set",
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=400&h=300&fit=crop",
    description: "Brooklinen's signature sheets are crafted from premium long-staple cotton for exceptional softness and durability.",
    features: [
      "480-thread count",
      "100% Long-staple Cotton",
      "OEKO-TEX Certified"
    ],
    rating: 4.6,
    positivePercent: 85,
    bbbRating: "A",
    affiliateLink: "https://example.com/brooklinen-affiliate"
  },
  {
    id: 4,
    rank: 4,
    name: "Parachute Percale Sheet Set",
    badge: "Best Cooling",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=400&h=300&fit=crop",
    description: "Crisp, breathable percale sheets that get softer with every wash. Perfect for hot sleepers.",
    features: [
      "200-thread count percale",
      "100% Egyptian Cotton",
      "OEKO-TEX Certified"
    ],
    rating: 4.5,
    positivePercent: 90,
    bbbRating: "A+",
    affiliateLink: "https://example.com/parachute-affiliate"
  },
  {
    id: 5,
    rank: 5,
    name: "Boll & Branch Signature Hemmed Sheet Set",
    badge: "Best Luxury",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    description: "Ethically produced, Fair Trade Certified sheets made from the finest organic cotton for ultimate luxury.",
    features: [
      "300-thread count",
      "Fair Trade Certified",
      "100% Organic Cotton"
    ],
    rating: 4.5,
    positivePercent: 87,
    bbbRating: "B",
    affiliateLink: "https://example.com/bollandbranch-affiliate"
  }
];

const Index = () => {
  const currentDate = format(new Date(), 'MMMM yyyy');
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-bold">
            The Mattress Gal
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${sheetsBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-radial from-white/95 via-white/85 to-white/70"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* White bar behind text */}
          <div className="bg-white py-8 px-4 mb-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              Best Bed Sheets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              This site is supported by our readers. We earn a commission through some of our links.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto">
              BLACK FRIDAY: SAVE 40% <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Author Byline */}
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <img 
              src={authorImage} 
              alt="Katelyn Zowalski" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="text-left">
              <div className="font-semibold text-foreground">Katelyn Zowalski</div>
              <div>{currentDate}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {sheets.map((sheet, index) => (
          <Card key={sheet.id} className="mb-8 overflow-hidden border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Left side - Image and Rank */}
                <div className="relative bg-muted/30 p-6 flex flex-col items-center justify-center">
                  <div className="absolute top-4 left-4 text-6xl font-serif font-bold text-hero-blue-dark z-10">
                    {sheet.rank}
                  </div>
                  {sheet.rank === 1 && sheet.badge && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-0 z-10 text-base px-4 py-2 font-bold">
                      {sheet.badge}
                    </Badge>
                  )}
                  <a 
                    href={sheet.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={sheet.image}
                      alt={sheet.name}
                      className="w-full max-w-[250px] h-auto rounded-lg shadow-md mt-16 md:mt-8 hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  </a>
                </div>

                {/* Right side - Content */}
                <div className="p-6 md:p-8">
                  <a 
                    href={sheet.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
                      {sheet.name}
                    </h2>
                  </a>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    {sheet.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {sheet.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {sheet.rank === 1 && idx === 0 ? (
                          <Award className="h-6 w-6 shrink-0 mt-0.5 text-hero-blue-dark fill-gold drop-shadow-md" />
                        ) : (
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        )}
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href={sheet.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="w-full md:w-auto mb-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12">
                      SHOP NOW
                    </Button>
                  </a>

                  {/* Ratings */}
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Overall Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-semibold">{sheet.rating}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">BBB Rating: </span>
                      <span className="font-semibold">{sheet.bbbRating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
