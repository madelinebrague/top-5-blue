import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <a href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </a>
        
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
          Terms of Use
        </h1>
        
        <div className="prose prose-slate max-w-none text-foreground">
          <p className="text-lg mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily access the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Disclaimer</h2>
          <p className="mb-4">
            The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Limitations</h2>
          <p className="mb-4">
            In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Revisions</h2>
          <p className="mb-4">
            We may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of use.
          </p>
          
          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
