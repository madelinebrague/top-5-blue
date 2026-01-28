import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, Award, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

export interface CustomerReview {
  text: string;
  author: string;
  rating: number;
}

export interface ProductCardProps {
  rank: number;
  name: string;
  badge?: string;
  image: string;
  description: string;
  features: string[];
  rating?: number;
  affiliateLink: string;
  ctaText: string;
  /** Optional: show Oprah badge for top pick */
  showOprahBadge?: boolean;
  /** Optional: image for Oprah badge */
  oprahBadgeImage?: string;
  /** Optional: highlight first feature with Award icon */
  highlightFirstFeature?: boolean;
  /** Optional: banner text above card */
  bannerText?: string;
  /** Optional: banner background color class */
  bannerClass?: string;
  /** Optional: hide the rating section */
  hideRating?: boolean;
  /** Optional: customer review */
  customerReview?: CustomerReview;
}

const ProductCard = ({
  rank,
  name,
  badge,
  image,
  description,
  features,
  rating,
  affiliateLink,
  ctaText,
  showOprahBadge = false,
  oprahBadgeImage,
  highlightFirstFeature = false,
  bannerText,
  bannerClass = "bg-orange-500",
  hideRating = false,
  customerReview,
}: ProductCardProps) => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const isExternalLink = affiliateLink.startsWith("http");
  const linkProps = isExternalLink
    ? { href: affiliateLink, target: "_blank", rel: "noopener noreferrer" }
    : { href: affiliateLink };

  const ReviewContent = () => (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center gap-1 mb-2">
        {[...Array(customerReview?.rating || 5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm text-foreground italic mb-2">"{customerReview?.text}"</p>
      <p className="text-xs text-muted-foreground font-medium">— {customerReview?.author}</p>
    </div>
  );

  return (
    <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
      {bannerText && (
        <div className={`${bannerClass} text-white text-center py-4 px-6 font-bold text-xl`}>
          {bannerText}
        </div>
      )}
      <CardContent className="p-0">
        <div className={`grid ${customerReview ? 'md:grid-cols-[280px_1fr_280px]' : 'md:grid-cols-[300px_1fr]'} gap-0`}>
          {/* Left side - Image and Rank */}
          <div className="relative bg-muted/30 p-6 flex flex-col items-center justify-center">
            <div className="absolute top-4 left-4 text-6xl font-serif font-bold text-hero-blue-dark z-10">
              {rank}
            </div>
            {badge && (
              <a {...linkProps} className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary text-primary-foreground border-0 text-base px-4 py-2 font-bold hover:opacity-90 transition-opacity cursor-pointer">
                  {badge}
                </Badge>
              </a>
            )}
            <a {...linkProps} className="block flex flex-col items-center gap-4">
              {showOprahBadge && oprahBadgeImage && (
                <img
                  src={oprahBadgeImage}
                  alt="Oprah's Favorite Things"
                  className="w-full max-w-[200px] h-auto mt-16 md:mt-8"
                />
              )}
              <img
                src={image}
                alt={name}
                className="w-full max-w-[250px] max-h-[180px] object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer"
              />
            </a>
          </div>

          {/* Middle - Content */}
          <div className="p-6 md:p-8">
            <a {...linkProps} className="block hover:opacity-80 transition-opacity">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-3">{name}</h2>
            </a>

            <p className="text-foreground mb-6 leading-relaxed">{description}</p>

            {/* Features and Rating Container */}
            <div className="md:flex md:gap-8 mb-6">
              {/* Features */}
              <ul className="space-y-2 mb-6 md:mb-0 md:flex-1">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    {highlightFirstFeature && idx === 0 ? (
                      <Award className="h-6 w-6 shrink-0 mt-0.5 text-hero-blue-dark fill-gold drop-shadow-md" />
                    ) : (
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    )}
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Ratings - Right side on desktop */}
              {!hideRating && rating && (
                <div className="flex items-start pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border/50 md:pl-8">
                  <div className="flex flex-col gap-2 md:gap-3">
                    <span className="text-sm md:text-base font-medium text-muted-foreground">Overall Rating</span>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 md:h-8 md:w-8 fill-primary text-primary" />
                      <span className="font-bold text-lg md:text-4xl text-foreground">{rating}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Customer Review Dropdown */}
            {customerReview && (
              <div className="md:hidden mb-6">
                <Collapsible open={isReviewOpen} onOpenChange={setIsReviewOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted/50 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/70 transition-colors">
                    <span>Read Customer Review</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isReviewOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3">
                    <ReviewContent />
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )}

            {/* CTA Button */}
            <a {...linkProps} className="block text-center md:text-left md:inline-block">
              <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-16 py-6 text-base">
                {ctaText}
              </Button>
            </a>
          </div>

          {/* Right side - Customer Review (Desktop only) */}
          {customerReview && (
            <div className="hidden md:flex flex-col justify-center p-6 border-l border-border/50 bg-muted/10">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Customer Review
              </h3>
              <ReviewContent />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
