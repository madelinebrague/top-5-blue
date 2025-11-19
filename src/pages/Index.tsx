import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, Award, ArrowRight } from "lucide-react";
import sheetsBackground from "@/assets/sheets-background.jpg";
import authorImage from "@/assets/author-katelyn.jpg";
import cozyEarthImage from "@/assets/cozy-earth-sheets.png";
import cozyEarthBedroom from "@/assets/cozy-earth-bedroom.png";
import oprahBadge from "@/assets/oprah-badge.png";
import miracleMadeImage from "@/assets/miracle-made-sheets.jpg";
import sleepgramImage from "@/assets/sleepgram-sheets.png";
import groundingCoImage from "@/assets/grounding-co-sheets.png";
import carilohaImage from "@/assets/cariloha-sheets.png";
import { format } from "date-fns";

const sheets = [
  {
    id: 1,
    rank: 1,
    name: "Cozy Earth Bamboo Sheets",
    badge: "TOP PICK OF 2025",
    image: cozyEarthImage,
    description:
      "Oprah was right. Cozy Earth sheets are impossibly smooth, temperature-regulating, and helped me sleep better from night 1.",
    features: [
      "OPRAH'S FAVORITE THINGS WINNER",
      "100% Organic Bamboo Viscose",
      "Unbelievably Soft",
      "Breathable & Temperature Regulating",
      "Sustainable & Eco-Friendly",
      "100 Night Trial",
    ],
    rating: 4.9,
    affiliateLink: "https://www.themattressgal.com/adv/",
    ctaText: "BLACK FRIDAY: SAVE 40% »",
  },
  {
    id: 2,
    rank: 2,
    name: "Miracle Made Sheets",
    image: miracleMadeImage,
    description: "NASA-inspired technology makes these sheets super cooling and antibacterial.",
    features: ["100% Silver-Infused Cotton", "Naturally Dissipates Body Heat", "Requires Less Washing"],
    rating: 4.8,
    affiliateLink: "https://www.oobots.com/B68SFRZ/5HLBCX2/?uid=11831&sub1=matgal-t5",
    ctaText: "BLACK FRIDAY: SAVE 46% »",
  },
  {
    id: 3,
    rank: 3,
    name: "Sleepgram Sheets",
    image: sleepgramImage,
    description: "Sleepgram's sateen is ultra-soft. These sheets are dreamy bamboo at a budget-friendly price.",
    features: ["Bamboo Sateen Fabric", "2X Softer Than Cotton", "OEKO-TEX Certified"],
    rating: 4.6,
    affiliateLink: "https://www.altoacre.com/B68SFRZ/DPTF16Z/?sub1=matgal-t5",
    ctaText: "BLACK FRIDAY: SAVE 65% »",
  },
  {
    id: 4,
    rank: 4,
    name: "Grounding Co. Terra Bed Sheet",
    image: groundingCoImage,
    description: "Scientifically designed to reduce inflammation, promote relaxation, and hit your reset button.",
    features: ["95% Organic Cotton, 5% Silver", "Naturally Grounds Energy", "Promotes Regenerative Sleep"],
    rating: 4.5,
    affiliateLink: "https://www.djpcraze.com/B68SFRZ/GG8R7HJ/?sub1=matgal-t5",
    ctaText: "BLACK FRIDAY: SAVE 50% »",
  },
  {
    id: 5,
    rank: 5,
    name: "Cariloha Bamboo Bed Sheets",
    image: carilohaImage,
    description:
      "Sleek bamboo viscose sheets in beautiful earthy colors. The proprietary weave is designed for ultimate softness.",
    features: ["Bamboo Lyocell Fabric", "3 Degrees Cooler Than Cotton", "Sustainable Production Process"],
    rating: 4.5,
    affiliateLink: "https://cariloha.pxf.io/VxE6kk",
    ctaText: "SHOP NOW »",
  },
];

const Index = () => {
  const currentDate = format(new Date(), "MMMM yyyy");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-bold">The Mattress Gal</h1>
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
              {" "}
              5 Best Bed Sheets Of 2025
            </h2>
            <p className="text-lg text-muted-foreground text-black max-w-2xl mx-auto">
              If you invest in anything, sleep should come first. Grab your pajamas and check out our top 5 picks of the
              year.
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
                <div>{currentDate} • Sponsored</div>
              </div>
            </div>
            <a href="https://www.themattressgal.com/adv/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-10 mb-4"
              >
                BLACK FRIDAY: SAVE 40% <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
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
                    <a
                      href={sheet.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 z-10"
                    >
                      <Badge className="bg-primary text-primary-foreground border-0 text-base px-4 py-2 font-bold hover:opacity-90 transition-opacity cursor-pointer">
                        {sheet.badge}
                      </Badge>
                    </a>
                  )}
                  <a
                    href={sheet.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block flex flex-col items-center gap-4"
                  >
                    {sheet.rank === 1 && (
                      <img
                        src={oprahBadge}
                        alt="Oprah's Favorite Things"
                        className="w-full max-w-[200px] h-auto mt-16 md:mt-8"
                      />
                    )}
                    <img
                      src={sheet.image}
                      alt={sheet.name}
                      className="w-full max-w-[250px] h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer"
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
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-3">{sheet.name}</h2>
                  </a>

                  <p className="text-foreground mb-6 leading-relaxed">{sheet.description}</p>

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
                  <a href={sheet.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button className="w-full md:w-auto mb-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12">
                      {sheet.ctaText}
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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Separator */}
        <div className="my-12 border-t border-gray-300"></div>

        {/* Duplicate First Card with Banner */}
        <Card className="mb-8 overflow-hidden border-2 hover:shadow-lg transition-shadow">
          <div className="bg-orange-500 text-white text-center py-4 px-6 font-bold text-xl">BEST SHEETS OF 2025</div>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Left side - Image and Rank */}
              <div className="relative bg-muted/30 p-6 flex flex-col items-center justify-center">
                <div className="absolute top-4 left-4 text-6xl font-serif font-bold text-hero-blue-dark z-10">1</div>
                <a
                  href={sheets[0].affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10"
                >
                  <Badge className="bg-primary text-primary-foreground border-0 text-base px-4 py-2 font-bold hover:opacity-90 transition-opacity cursor-pointer">
                    {sheets[0].badge}
                  </Badge>
                </a>
                <a
                  href={sheets[0].affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex flex-col items-center gap-4"
                >
                  <img
                    src={oprahBadge}
                    alt="Oprah's Favorite Things"
                    className="w-full max-w-[200px] h-auto mt-16 md:mt-8"
                  />
                  <img
                    src={sheets[0].image}
                    alt={sheets[0].name}
                    className="w-full max-w-[250px] h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </a>
              </div>

              {/* Right side - Content */}
              <div className="p-6 md:p-8">
                <a
                  href={sheets[0].affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-3">{sheets[0].name}</h2>
                </a>

                <p className="text-foreground mb-6 leading-relaxed">{sheets[0].description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {sheets[0].features.map((feature, idx) => (
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

                {/* CTA Button */}
                <a href={sheets[0].affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="w-full md:w-auto mb-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12">
                    {sheets[0].ctaText}
                  </Button>
                </a>

                {/* Ratings */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Overall Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{sheets[0].rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advertorial Section */}
        <div className="mt-16 mb-12">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="bg-primary text-primary-foreground mb-4 text-sm px-4 py-2">IN-DEPTH REVIEW</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  Why Oprah Called Cozy Earth Sheets "The Softest Ever"
                </h2>
                <p className="text-lg text-muted-foreground">The luxury bedding that's changing how America sleeps</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <p className="text-foreground leading-relaxed">
                    When Oprah Winfrey puts something on her "Favorite Things" list, people listen. And when she fell
                    for Cozy Earth's bamboo viscose sheets, the internet went wild.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    But here's the thing: the hype is actually justified. These aren't just celebrity-endorsed sheets.
                    They turn your bed into a sanctuary, helping you get the best sleep of your life.
                  </p>
                  <div className="bg-white/80 backdrop-blur rounded-lg p-6 border-l-4 border-primary">
                    <p className="text-foreground font-semibold mb-2">"I can't sleep without them anymore."</p>
                    <p className="text-sm text-muted-foreground">— Real customer review</p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={cozyEarthBedroom}
                    alt="Cozy Earth Bamboo Sheets"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold">4.9</div>
                      <div className="text-xs">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/60 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <h3 className="font-semibold text-foreground mb-2">100% Organic Bamboo</h3>
                  <p className="text-sm text-muted-foreground">Sustainably sourced and eco-friendly</p>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">❄️</div>
                  <h3 className="font-semibold text-foreground mb-2">Temperature Regulating</h3>
                  <p className="text-sm text-muted-foreground">Cool in summer, warm in winter</p>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-semibold text-foreground mb-2">Impossibly Soft</h3>
                  <p className="text-sm text-muted-foreground">Softer than Egyptian cotton</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">The Science of Better Sleep</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-foreground mb-4">
                      Bamboo viscose is naturally breathable and moisture-wicking. While cotton sheets trap heat and
                      moisture, Cozy Earth sheets actively regulate your temperature throughout the night.
                    </p>
                    <p className="text-foreground">
                      The result? You fall asleep faster, stay asleep longer, and wake up feeling more refreshed.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={oprahBadge} alt="Oprah's Favorite Things" className="w-48 h-auto" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-foreground mb-4">Black Friday Exclusive: Save 40%</p>
                <p className="text-muted-foreground mb-6">Try them risk-free with a 100-night sleep trial</p>
                <a href="https://www.themattressgal.com/adv/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6"
                  >
                    CLAIM YOUR 40% DISCOUNT <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">Limited time offer • Free shipping on all orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
