import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <a href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </a>
        
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none text-foreground">
          <p className="text-lg mb-4">
            Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us, including but not limited to your name, email address, and any other information you choose to provide when contacting us or using our services.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and marketing communications (with your consent)</li>
            <li>Analyze website usage and trends</li>
          </ul>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Cookies and Tracking</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Third-Party Services</h2>
          <p className="mb-4">
            We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used. These third parties have access to your personal information only to perform these tasks on our behalf.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            We strive to use commercially acceptable means to protect your personal information, but remember that no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
          </p>
          
          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
