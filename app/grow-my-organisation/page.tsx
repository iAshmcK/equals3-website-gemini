import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";

export default function GrowMyOrg() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-yellow-400 mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-white mb-6">Corporate & Organisation Growth</h1>
        <p className="text-xl text-gray-300 mb-10">
          Strategic consulting for industry leaders. Market entry, AI integration, and high-level operational efficiency.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <Target className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Market Entry</h3>
            <p className="text-gray-400">Data-driven strategies to launch new products or enter new territories successfully.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <Target className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Integration</h3>
            <p className="text-gray-400">Implement cutting-edge AI tools to automate workflows and gain competitive advantage.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
          Contact Our Corporate Team
        </Link>
      </div>
    </div>
  );
}
