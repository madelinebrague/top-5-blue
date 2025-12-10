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
            Welcome to our site. We're so happy to have you!
          </p>
          
          <p className="mb-4">
            If you have any questions, please reach out at <a href="mailto:contact@musicatnip.com" className="text-primary underline">contact@musicatnip.com</a>.
          </p>
          
          <p className="mb-4">
            Our goal is to help you find great products. We do so by providing reviews of products we believe in. Musicatnip will never accept payment in exchange for a review, but we will accept products at no cost to provide honest opinions.
          </p>
          
          <p className="mb-4">
            This website contains affiliate links and advertisements. We may receive compensation when you click on or make purchases through these links.
          </p>
          
          <p className="mb-4">
            Our reviews reflect only our opinions and knowledge of products at the time of publishing. Any claim, statistic, or other description of a product should be verified with the manufacturer or company.
          </p>
          
          <p className="mb-4">
            Our rankings, ratings, and any other qualitative or quantitative descriptions are purely our opinions. Musicatnip will never provide medical or scientific advice, and any opinions on potential health benefits should be viewed solely as personal experience and not a guaranteed result of product use. If we claim a product to be the "best," "weakest," or any other descriptor, it is purely opinion-based and does not guarantee that product to be the same for you. Musicatnip will never intentionally mislead consumers or make claims that have not been promulgated by the brands we review.
          </p>
          
          <p className="mb-4">
            We want to help you find great deals, but prices and discounts represented on our site may not always be accurate. Prices are subject to change without warning and may not be reflected in our reviews.
          </p>
          
          <p className="mb-4">
            Additionally, our list is in no way comprehensive. This list does not deliberately exclude any particular brand. These opinions are not intended to harm or slander any company or individual in any way.
          </p>
          
          <p className="mb-4">
            Our experiences of these products may be completely different from yours. Our ordering of products is based on our personal opinions and internal ranking algorithms, and it may not reflect the actual or perceived quality of each brand.
          </p>
          
          <p className="mb-4">
            Rankings could be changed at any time, and any published sites reflect only our opinions at that time. Anything produced by Musicatnip LLC—including but not limited to websites, email, texts, electronic messaging, and any written or oral communication—may reflect a different opinion.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Affiliate Relationships</h2>
          <p className="mb-4">
            We participate in affiliate marketing programs, which means we may earn a commission when you purchase products through our links. This includes, but is not limited to, links to Cozy Earth, Miracle Made, Sleepgram, Grounding Co., and Cariloha.
          </p>
          
          <p className="mb-4">
            We may not have personally purchased or used 100% of the products on our sites. We are not responsible for any content on any site we link to.
          </p>
          
          <p className="mb-4">
            If you purchase a product due to one of our reviews, please note that we are not liable for the function, quality, results, or experiences of the product. All customer service concerns shall be fulfilled by the business you purchased from.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Editorial Independence</h2>
          <p className="mb-4">
            Our reviews and recommendations are based on genuine research and personal experience. While we may receive compensation for affiliate purchases, this does not influence our editorial content or product evaluations.
          </p>
          
          <p className="mb-4">
            It is critical to remember that our experiences with the products on our site may or may not reflect the experiences you have. We do not guarantee any result or outcome, though we hope you share our enthusiasm.
          </p>
          
          <p className="mb-4">
            Any included testimonials or reviews on this site are either: ours; given to us by a personal friend or family member; or collected from publicly available sites. All names may have been modified for privacy reasons. Testimonials provided may or may not be complete and may or may not exactly reflect the original user's intent. We do our best to represent all products and reviews accurately to the best of our knowledge at the time.
          </p>
          
          <p className="mb-4">
            The brands we partner with have great return policies. We encourage everyone to try a product for themselves and formulate their own opinions.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Transparency</h2>
          <p className="mb-4">
            We believe in complete transparency with our readers. This disclaimer may be incomplete and we encourage open communication to resolve concerns. Please get in contact with us if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingDisclosure;
