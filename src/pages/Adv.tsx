import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, ArrowRight } from "lucide-react";
import authorImage from "@/assets/author-katelyn.jpg";
import cozyAdv1 from "@/assets/cozy-adv1.jpg";
import pajamas2024 from "@/assets/pajamas-2024.jpg";
import cozyAdv3 from "@/assets/cozy-adv3.jpg";
import cozyAdv4 from "@/assets/cozy-adv4.jpg";
import cozyAdv6 from "@/assets/cozy-adv6.jpg";
import womanTowel from "@/assets/woman-towel.jpg";
import cozyAdv7 from "@/assets/cozy-adv7.jpg";
import womanLying from "@/assets/woman-lying.jpg";
import oprahFavoriteThings from "@/assets/oprah-favorite-things.jpg";
import cozyBanner from "@/assets/cozy-banner.jpg";
import oprahBadge from "@/assets/oprah-badge.png";
import oprahPajamasCollection from "@/assets/oprah-pajamas-collection.png";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const COZY_EARTH_LINK =
  "https://cozyearth.com/?utm_source=traffichaus&utm_medium=cpc&utm_campaign=bedsheets&utm_content=adgroup1";

const Adv = () => {
  const currentDate = format(new Date(), "MMMM dd, yyyy");
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const authorBylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (authorBylineRef.current) {
        const bylineRect = authorBylineRef.current.getBoundingClientRect();
        setShowStickyHeader(bylineRect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header CTA */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-card border-b shadow-lg transition-transform duration-300 ${
          showStickyHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
          <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold whitespace-nowrap">
              GET 20% OFF COZY EARTH »
            </Button>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black text-white py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-serif">
              <strong>The</strong>Sheets<strong>Expert</strong>
            </h1>
          </Link>
        </div>
      </header>

      {/* Update Banner */}
      <div className="bg-primary/10 border-l-4 border-primary py-4 px-6 max-w-4xl mx-auto mt-6">
        <p className="text-foreground">
          <strong>UPDATE -</strong> Oprah's Favorite Things list 5 years in a row? According to our research, no other
          brand has accomplished that incredible feat.
        </p>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
          Why "<span className="bg-gold/30 px-2">Oprah's Favorite Things</span>" has been obsessed with this brand… and
          why you absolutely need to try them yourself
        </h2>

        <a
          href={COZY_EARTH_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold text-lg"
        >
          Get 20% Off Cozy Earth
        </a>

        {/* Author Info */}
        <div ref={authorBylineRef} className="flex flex-wrap items-center gap-3 mt-6 mb-8">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <img
            src={authorImage}
            alt="Katelyn Zowalski"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
          />
          <span className="text-muted-foreground">
            by <strong className="text-foreground">Katelyn Zowalski</strong>
          </span>
          <span className="text-muted-foreground">{currentDate}</span>
          <span className="text-muted-foreground">
            in <strong>Lifestyle</strong>
          </span>
          <Link to="/advertising-disclosure" className="text-primary hover:underline">
            Sponsored
          </Link>
        </div>

        {/* Sidebar CTA - Desktop (visible before scroll) */}
        <div
          className={`lg:fixed lg:right-8 lg:top-32 lg:w-72 bg-card border rounded-lg shadow-lg p-4 mb-8 lg:mb-0 transition-opacity duration-300 ${showStickyHeader ? "lg:opacity-0 lg:pointer-events-none" : "lg:opacity-100"}`}
        >
          <p className="text-sm font-semibold text-center mb-3">Order COZY EARTH on their official website here</p>
          <img src={oprahBadge} alt="Oprah's Favorite Things Badge" className="w-full rounded-lg mb-4" />
          <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              Auto Apply 20% Off &gt;&gt;
            </Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground mb-8">Video credit: extra, Good Morning America, Rachel</p>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">
            The brand Oprah features again and again: Cozy Earth
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            Getting on "Oprah's Favorite Things" is an amazing feat, but doing it 6 out of the last 7 years? That's not
            luck.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Oprah's iconic list doesn't cater to the highest bidders—it features innovative, high-quality gifts she
            would LOVE to receive herself.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Oprah hand-picked{" "}
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Cozy Earth
            </a>{" "}
            <strong>6 times</strong>. According to our research, no other brand comes close to that number.
          </p>

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why Oprah loves Cozy Earth</h3>
          <p className="text-foreground leading-relaxed mb-6">
            I bet Oprah's stayed in more 5-star hotels than almost anyone. We think that's why she loves Cozy Earth so
            much: they give her that 5-star feel anywhere.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            What makes Cozy Earth so special? Their fabric. You've never felt anything like it.
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            From jungle to mattress,{" "}
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Cozy Earth
            </a>{" "}
            turns bamboo wood into the most deliciously soft material you can imagine.
          </p>

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">"Oprah's Favorite Things 2018"</h3>
          <p className="text-foreground leading-relaxed mb-6">
            Oprah first selected Cozy Earth in 2018 with the Bamboo Bedding Bundle. She called their viscose-from-bamboo
            bed sheets the "softest ever," raving about how cool and silky they feel.
          </p>
          <p className="text-foreground leading-relaxed mb-6">And that was just the start…</p>
          <img src={cozyAdv1} alt="Cozy Earth Bamboo Sheets" className="w-full rounded-lg shadow-lg mb-8" />

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">2019: The Bamboo Pajama Set</h3>
          <p className="text-foreground leading-relaxed mb-6">
            Determined to be more than a one-hit-wonder, Cozy Earth was already crafting their next great product: the
            Bamboo Pajama Set.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            So it's no surprise that in 2019, Oprah chose Cozy Earth again.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            She adores their magic fabric in pajama form: buttery-soft and perfect for both hot and chilly sleepers
            alike.
          </p>
          <img src={pajamas2024} alt="Cozy Earth Pajamas" className="w-full rounded-lg shadow-lg mb-8" />

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">Bamboo joggers win 2020</h3>
          <p className="text-foreground leading-relaxed mb-6">
            In 2020, quarantine and working from home shifted our go-to outfits from business casual to Zoom call chic.
            Oprah fell head-over-heels for Cozy Earth's Brushed Bamboo Jogger Pants.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            From home to gyms to airports, these joggers look like they belong on Rodeo Drive.
          </p>
          <img src={cozyAdv3} alt="Cozy Earth Joggers" className="w-full rounded-lg shadow-lg mb-8" />

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">Winning Oprah's heart in 2021</h3>
          <p className="text-foreground leading-relaxed mb-6">
            Oprah's "Favorite Things 2021" showed everyone she rocks Cozy Earth head-to-toe. She compared Cozy Earth's
            Plush Lounge Socks to "walking on clouds."
          </p>
          <img src={cozyAdv4} alt="Cozy Earth Lounge Socks" className="w-full rounded-lg shadow-lg mb-8" />

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">2022: The 5-Star Bath Experience</h3>
          <p className="text-foreground leading-relaxed mb-6">
            Oprah says she takes bathing very seriously. So of course, if she recommends a bath towel, then I have to
            try it.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            "Oprah's Favorite Things 2022" featured Cozy Earth's Waffle Bath Towel Bundle.
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            Upgrade your scratchy, 10-year-old towels to Cozy Earth's bamboo-cotton blend of pure bliss.
          </p>

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">
            2024: Pajamas so nice, Oprah picked them twice
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            This year's new line of Soft Woven Long-Sleeve Pajamas is made with an irresistible tencel blend.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            It impressed Oprah so much, she said she would buy every color.
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            Naturally, this striped sleepwear landed on "Oprah's Favorite Things 2024" and won over thousands of
            pajama-lovers, including fans of the original bamboo set.
          </p>

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">
            How Cozy Earth ended up on MY favorite things list
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            Years of glowing reviews from Oprah should convince anyone to try{" "}
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Cozy Earth
            </a>
            , especially with their 100-night trial.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            But if you're still not sure, let me personally recommend Cozy Earth to you.
          </p>
          <p className="text-foreground leading-relaxed mb-6">Like Oprah, I first got hooked on sheets.</p>
          <img src={cozyAdv6} alt="Cozy Earth Sheets Experience" className="w-full rounded-lg shadow-lg mb-8" />

          <p className="text-foreground leading-relaxed mb-6">
            Slipping into Cozy Earth sheets is literally the best part of my day. I slept better from night one: being
            swaddled in the smoothest fabric instantly relaxes my whole body, and it keeps me at the perfect temperature
            all night.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            After falling in love with those sheets, soon I was buying everything else on their site. The bamboo pajamas
            feel just as amazing: I get giddy putting them on.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            In fact, every Cozy Earth product gives me a moment of delight when I feel that softness.
          </p>
          <img src={womanTowel} alt="Woman with Cozy Earth Towel" className="w-full rounded-lg shadow-lg mb-8" />

          <p className="text-foreground leading-relaxed mb-4">
            These are my favorite features of{" "}
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Cozy Earth's products
            </a>
            :
          </p>

          <ul className="space-y-2 mb-8">
            {[
              "Soft, comfy feel",
              "Stylish, modern design",
              "Wide variety of products",
              "Free shipping",
              "Free returns",
              "Over 50,723 5-star reviews",
              "Awesome customer service",
              "Viscose made from bamboo",
              "Temperature-regulating",
              "Machine washable",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold">{feature}</span>
              </li>
            ))}
          </ul>

          <img src={cozyAdv7} alt="Cozy Earth Products" className="w-full rounded-lg shadow-lg mb-8" />

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why isn't Cozy Earth in stores?</h3>
          <p className="text-foreground leading-relaxed mb-6">
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Cozy Earth
            </a>{" "}
            is a direct-to-consumer brand; you won't find them in stores. You can only buy them online.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Cozy Earth cuts the middle men and passes the savings to you (which is a huge relief in a world where the
            trend is inflationary, price-gouging BS).
          </p>
          <img src={womanLying} alt="Woman lying on Cozy Earth sheets" className="w-full rounded-lg shadow-lg mb-8" />

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why is it discounted right now?</h3>
          <p className="text-foreground leading-relaxed mb-6">You should take advantage of this opportunity.</p>
          <p className="text-foreground leading-relaxed mb-6">
            Since{" "}
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Cozy Earth
            </a>{" "}
            is still a relatively new brand, they're offering a big discount in order to generate buzz about their
            awesome products.
          </p>

          <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold mb-8">
              Save up to 20% on Cozy Earth <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">Should I buy now or wait?</h3>
          <p className="text-foreground leading-relaxed mb-6">
            Cozy Earth helped me improve my sleep from the first day I put it on my bed.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            I know it can do the same for you. The best time to sleep better is now, so I wouldn't hesitate a day
            longer.
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            Plus, they're always selling out--and this early bird discount won't last forever, so act fast.
          </p>

          <h3 className="text-3xl font-serif font-bold text-foreground mt-10 mb-4">
            How do I buy real Cozy Earth sheets?
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            Imitation is the highest form of flattery, but we all know that an off-brand Coca Cola just doesn't taste
            the same.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            With so many brands trying to jump on to the bamboo sheets hype train, make sure you only buy from the{" "}
            <a
              href={COZY_EARTH_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Cozy Earth official website
            </a>
            .
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            (Or Amazon, but they have a limited selection without the 20% discount.)
          </p>

          <img
            src={oprahPajamasCollection}
            alt="Cozy Earth Pajamas Collection - Oprah's Favorite Things"
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold mb-8">
              Save up to 20% on Cozy Earth <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </article>

        {/* Update Box */}
        <div className="bg-muted/50 border rounded-lg p-6 my-8">
          <p className="text-foreground mb-4">
            <strong>As of {currentDate}:</strong> Ever since appearing on Oprah's Favorite Things again, an incredible
            amount of buzz has been generated about COZY EARTH. Due to its popularity and positive reviews, the company
            is so confident in their product that they are now offering a <strong>20%</strong> discount code that auto
            applies.
          </p>
          <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              Auto Apply 20% Off Promo Code &gt;&gt;
            </Button>
          </a>
        </div>

        {/* Author Box */}
        <div className="bg-card border rounded-lg p-6 my-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src={authorImage}
            alt="Katelyn Zowalski"
            className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
          />
          <div>
            <Badge className="bg-primary/10 text-primary mb-2">Meet Our Expert</Badge>
            <h4 className="text-xl font-serif font-bold text-foreground mb-2">Katelyn Zowalski</h4>
            <p className="text-muted-foreground">
              Katelyn Zowalski is a writer, blogger, and mom of 2. She's tried and reviewed hundreds of home products
              over the years, from bedding and pajamas to gadgets and decor. We're lucky to have her on our team and we
              hope you enjoyed her review!
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 my-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
            Claim Your <span className="text-accent">20%</span> Discount Today
          </h3>
          <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
              Auto Apply 20% Off &gt;&gt;
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-3">LIMITED TIME OFFER</p>
        </div>

        {/* Banner CTA */}
        <a href={COZY_EARTH_LINK} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={cozyBanner} alt="Cozy Earth Banner" className="w-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
              <h4 className="text-white text-2xl md:text-3xl font-serif font-bold mb-2">Claim Your Discount Today!</h4>
              <p className="text-white/90 mb-4">
                Receive a special introductory <strong>25% OFF</strong> discount when you order now!
              </p>
              <Button className="w-fit bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                CLICK HERE TO SAVE NOW
              </Button>
            </div>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <div className="flex justify-center gap-4 mb-4">
            <Link to="/advertising-disclosure" className="hover:text-foreground">
              Advertising Disclosure
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </div>
          <p>© {new Date().getFullYear()} TheSheetsExpert. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Adv;
