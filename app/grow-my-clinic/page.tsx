import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function GrowMyClinic() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-teal-600 mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Grow Your Clinic</h1>
        <p className="text-xl text-gray-600 mb-10">
          From solo practitioner to multi-clinic empire. Our proven framework helps you scale revenue without scaling stress.
        </p>

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">What We Solve</h2>
          <ul className="space-y-3">
            {[
              "Inconsistent revenue months",
              "Staff retention and training issues",
              "Marketing that costs money but doesn't bring clients",
              "Operational chaos and lack of systems"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-teal-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/contact" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-700 transition-colors">
          Book Your Clinic Audit
        </Link>
      </div>
    </div>
  );
}
