import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, Award, ArrowRight } from "lucide-react";
import sheetsBackground from "@/assets/sheets-background.jpg";
import authorImage from "@/assets/author-katelyn.jpg";
import womanTowel from "@/assets/woman-towel.jpg";
import { format } from "date-fns";

const towels = [
  {
    id: 1,
    rank: 1,
    name: "Brooklinen Super-Plush Bath Towels",
    badge: "TOP PICK OF 2026",
    image: "https://images.unsplash.com/photo-1616627561839-074385245ff6?w=400&h=400&fit=crop",
    description:
      "Incredibly plush and absorbent, Brooklinen towels feel like a spa experience every time you step out of the shower.",
    features: [
      "100% Turkish Cotton",
      "Ultra-Plush 820 GSM",
      "Quick-Dry Technology",
      "OEKO-TEX Certified",
      "Durable Double-Stitched Hems",
      "365-Day Warranty",
    ],
    rating: 4.9,
    affiliateLink: "#",
    ctaText: "SHOP NOW: SAVE 20% »",
  },
  {
    id: 2,
    rank: 2,
    name: "Parachute Classic Bath Towel",
    image: "https://images.unsplash.com/photo-1583845112203-29329902332e?w=400&h=400&fit=crop",
    description: "Lightweight yet absorbent, these towels get softer with every wash and dry incredibly fast.",
    features: ["100% Long-Staple Turkish Cotton", "Lightweight & Quick-Drying", "Gets Softer Over Time"],
    rating: 4.8,
    affiliateLink: "#",
    ctaText: "SHOP NOW: SAVE 15% »",
  },
  {
    id: 3,
    rank: 3,
    name: "Coyuchi Cloud Loom Organic Towels",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
    description: "Eco-friendly organic cotton towels with a cloud-like softness that's gentle on sensitive skin.",
    features: ["100% Organic Cotton", "GOTS Certified", "Hypoallergenic"],
    rating: 4.7,
    affiliateLink: "#",
    ctaText: "SHOP NOW: SAVE 25% »",
  },
  {
    id: 4,
    rank: 4,
    name: "Onsen Bath Towel",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop",
    description: "Japanese-inspired waffle weave towels that are lightweight, quick-drying, and incredibly absorbent.",
    features: ["Supima Cotton Waffle Weave", "Antimicrobial Properties", "Ultra Lightweight"],
    rating: 4.6,
    affiliateLink: "#",
    ctaText: "SHOP NOW: SAVE 20% »",
  },
  {
    id: 5,
    rank: 5,
    name: "Frontgate Resort Cotton Bath Towel",
    image: "https://images.unsplash.com/photo-1600369671854-6eb1fe991d88?w=400&h=400&fit=crop",
    description:
      "Luxury hotel-quality towels with exceptional thickness and absorbency for the ultimate spa experience at home.",
    features: ["Premium Long-Staple Cotton", "Thick 630 GSM", "Double-Ply Construction"],
    rating: 4.5,
    affiliateLink: "#",
    ctaText: "SHOP NOW: SAVE 30% »",
  },
];

const Towels = () => {
  const currentDate = format(new Date(), "MMMM yyyy");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif">
            <strong>The</strong>Sheets<strong>Expert</strong>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative pt-20 pb-12 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${sheetsBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-radial from-white/95 via-white/85 to-white/70"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* White bar behind text */}
          <div className="bg-white py-8 px-4 mb-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground">
              5 Best Bath Towels Of 2026
            </h2>
            <p className="text-lg text-muted-foreground text-black max-w-2xl mx-auto">
              Wrap yourself in luxury. We've tested dozens of bath towels to find the softest, most absorbent options for your bathroom.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-10">
              <img
                src={authorImage}
                alt="Katelyn Zowalski"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">Katelyn Zowalski</div>
                <div>
                  {currentDate} •{" "}
                  <Link
                    to="/advertising-disclosure"
                    className="text-primary font-semibold underline hover:no-underline"
                  >
                    Sponsored
                  </Link>
                </div>
              </div>
            </div>
            <a href="#">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-10 mb-4"
              >
                SAVE 20% ON OUR TOP PICK <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {towels.map((towel, index) => (
          <>
            <Card key={towel.id} className="mb-8 overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  {/* Left side - Image and Rank */}
                  <div className="relative bg-muted/30 p-6 flex flex-col items-center justify-center">
                    <div className="absolute top-4 left-4 text-6xl font-serif font-bold text-hero-blue-dark z-10">
                      {towel.rank}
                    </div>
                    {towel.rank === 1 && towel.badge && (
                      <a
                        href={towel.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-10"
                      >
                        <Badge className="bg-primary text-primary-foreground border-0 text-base px-4 py-2 font-bold hover:opacity-90 transition-opacity cursor-pointer">
                          {towel.badge}
                        </Badge>
                      </a>
                    )}
                    <a
                      href={towel.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block flex flex-col items-center gap-4 mt-8"
                    >
                      <img
                        src={towel.image}
                        alt={towel.name}
                        className="w-full max-w-[250px] h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                      />
                    </a>
                  </div>

                  {/* Right side - Content */}
                  <div className="p-6 md:p-8">
                    <a
                      href={towel.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <h2 className="text-3xl font-serif font-bold text-foreground mb-3">{towel.name}</h2>
                    </a>

                    <p className="text-foreground mb-6 leading-relaxed">{towel.description}</p>

                    {/* Features and Rating Container */}
                    <div className="md:flex md:gap-8 mb-6">
                      {/* Features */}
                      <ul className="space-y-2 mb-6 md:mb-0 md:flex-1">
                        {towel.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            {towel.rank === 1 && idx === 0 ? (
                              <Award className="h-6 w-6 shrink-0 mt-0.5 text-hero-blue-dark fill-gold drop-shadow-md" />
                            ) : (
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            )}
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Ratings - Right side on desktop */}
                      <div className="flex items-start pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border/50 md:pl-8">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <span className="text-sm md:text-base font-medium text-muted-foreground">Overall Rating</span>
                          <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 md:h-8 md:w-8 fill-primary text-primary" />
                            <span className="font-bold text-lg md:text-4xl text-foreground">{towel.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a href={towel.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12">
                        {towel.ctaText}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Brooklinen Section - After First Product */}
            {index === 0 && (
              <div className="mb-8 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-10 overflow-hidden">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
                  Why Brooklinen Is Our Top Pick
                </h3>
                <div className="grid md:grid-cols-[320px_1fr] gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <img
                      src={womanTowel}
                      alt="Woman wrapped in luxury towel"
                      className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2 space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Luxury Hotel Quality</h4>
                        <p className="text-sm text-muted-foreground">
                          820 GSM Turkish cotton delivers spa-level plushness at home.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Superior Absorbency</h4>
                        <p className="text-sm text-muted-foreground">
                          Long-staple cotton fibers absorb moisture quickly while staying soft.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">365-Day Warranty</h4>
                        <p className="text-sm text-muted-foreground">
                          Full year guarantee with easy returns if you're not satisfied.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6 text-right">
                  That moment when you step out of the shower and wrap yourself in a cloud? Brooklinen delivers that
                  feeling every single time. Their Turkish cotton towels are thick, plush, and somehow get even softer
                  with each wash...{" "}
                  <a href="#" className="text-primary font-semibold hover:underline">
                    Read More
                  </a>
                </p>
              </div>
            )}
          </>
        ))}

        {/* Separator */}
        <div className="my-12 border-t border-muted"></div>

        {/* Duplicate First Card with Banner */}
        <Card className="mb-8 overflow-hidden border-2 hover:shadow-lg transition-shadow">
          <div className="bg-primary text-primary-foreground text-center py-4 px-6 font-bold text-xl">BEST BATH TOWELS OF 2026</div>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Left side - Image and Rank */}
              <div className="relative bg-muted/30 p-6 flex flex-col items-center justify-center">
                <div className="absolute top-4 left-4 text-6xl font-serif font-bold text-hero-blue-dark z-10">1</div>
                <a
                  href={towels[0].affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10"
                >
                  <Badge className="bg-primary text-primary-foreground border-0 text-base px-4 py-2 font-bold hover:opacity-90 transition-opacity cursor-pointer">
                    {towels[0].badge}
                  </Badge>
                </a>
                <a
                  href={towels[0].affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex flex-col items-center gap-4 mt-8"
                >
                  <img
                    src={towels[0].image}
                    alt={towels[0].name}
                    className="w-full max-w-[250px] h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </a>
              </div>

              {/* Right side - Content */}
              <div className="p-6 md:p-8">
                <a
                  href={towels[0].affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-3">{towels[0].name}</h2>
                </a>

                <p className="text-foreground mb-6 leading-relaxed">{towels[0].description}</p>

                {/* Features and Rating Container */}
                <div className="md:flex md:gap-8 mb-6">
                  {/* Features */}
                  <ul className="space-y-2 mb-6 md:mb-0 md:flex-1">
                    {towels[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {idx === 0 ? (
                          <Award className="h-6 w-6 shrink-0 mt-0.5 text-hero-blue-dark fill-gold drop-shadow-md" />
                        ) : (
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        )}
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ratings - Right side on desktop */}
                  <div className="flex items-start pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border/50 md:pl-8">
                    <div className="flex flex-col gap-2 md:gap-3">
                      <span className="text-sm md:text-base font-medium text-muted-foreground">Overall Rating</span>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 md:h-8 md:w-8 fill-primary text-primary" />
                        <span className="font-bold text-lg md:text-4xl text-foreground">{towels[0].rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href={towels[0].affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12">
                    {towels[0].ctaText}
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Options Section */}
        <div className="my-12 md:my-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Not Sure Brooklinen Is Right for You?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              We've tested dozens of bath towels to find the perfect match for every bathroom. Here's who should consider
              trying our other top picks:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                Quick-Dry Enthusiasts
              </h3>
              <p className="text-foreground mb-4 text-sm md:text-base">
                If you need towels that dry fast between uses, <strong>Parachute Classic Bath Towels</strong> are 
                lightweight and designed to dry quickly while still being incredibly soft.
              </p>
              <a href={towels[1].affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full md:w-auto">
                  View Parachute <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                Eco-Conscious Shoppers
              </h3>
              <p className="text-foreground mb-4 text-sm md:text-base">
                <strong>Coyuchi Cloud Loom Organic Towels</strong> are GOTS certified organic cotton and perfect for
                those who prioritize sustainability without sacrificing softness.
              </p>
              <a href={towels[2].affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full md:w-auto">
                  View Coyuchi <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                Minimalist Design Lovers
              </h3>
              <p className="text-foreground mb-4 text-sm md:text-base">
                For those who love Japanese-inspired design, <strong>Onsen Bath Towels</strong> feature a beautiful 
                waffle weave that's both functional and aesthetically pleasing.
              </p>
              <a href={towels[3].affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full md:w-auto">
                  View Onsen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">Luxury Seekers</h3>
              <p className="text-foreground mb-4 text-sm md:text-base">
                If you want the ultimate hotel experience, <strong>Frontgate Resort Cotton Bath Towels</strong> deliver
                exceptional thickness and that five-star resort feel.
              </p>
              <a href={towels[4].affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full md:w-auto">
                  View Frontgate <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* About the Author Section */}
        <div className="my-12 md:my-16 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-8 md:p-12 border border-border/50">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
            About the Author
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 max-w-4xl mx-auto">
            <img
              src={authorImage}
              alt="Katelyn - The Sheets Expert"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Katelyn</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                Sleep Product Specialist & Founder of The Sheets Expert
              </p>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                Katelyn Zowalski is the queen of sheets. Between being a mother of 3 and a full-time content creator,
                she's tested dozens of different bedding and bath brands. She loves finding that one product that makes her house
                feel like home, whether it's the most incredible sheets or the perfect bath towel. She'll rave about
                her latest finds to anyone that will listen, and that includes you!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-muted/20 py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="/advertising-disclosure" className="hover:text-foreground transition-colors">
                Advertising Disclosure
              </a>
              <span className="text-border">|</span>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Use
              </a>
              <span className="text-border">|</span>
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Towels;
