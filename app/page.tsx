import Link from "next/link";
import Hero from "./components/Hero";
import TypewriterEffect from "./components/TypewriterEffect";
import SolutionCard from "./components/SolutionCard";
import { TrendingUp, Users, Target, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  const phrases = ["Clinic Success", "Organisation Success", "Your Success"];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar Placeholder */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span className="font-bold text-xl tracking-tight">EQUALS<span className="text-teal-600">3</span></span>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <Link href="#" className="hover:text-teal-600 transition-colors">Services</Link>
                <Link href="#" className="hover:text-teal-600 transition-colors">About</Link>
                <Link href="#" className="hover:text-teal-600 transition-colors">Success Stories</Link>
            </div>
            <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">Book Strategy Call</Link>
        </div>
      </nav>

      <Hero
        title={
          <>
            The Future of Aesthetic Growth.
            <br />
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              Engineered for <TypewriterEffect phrases={phrases} className="text-teal-600" />
            </span>
          </>
        }
        subtitle="Expert strategy and hands-on support for clinics and industry organisations ready to unlock their true potential."
      >
        <Link href="/grow-my-clinic" className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
          Grow My Clinic
        </Link>
        <Link href="/grow-my-organisation" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center">
          Grow My Organisation
        </Link>
      </Hero>

      {/* Value Proposition */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Why EQUALS3?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              <SolutionCard
                icon={<TrendingUp size={32} />}
                title="Proven Growth"
                description="From solo practitioner to multi-clinic empire with strategic, data-driven approaches."
              />
              <SolutionCard
                icon={<Users size={32} />}
                title="Expert Team"
                description="Industry veterans who understand aesthetics inside and out."
              />
              <SolutionCard
                icon={<Target size={32} />}
                title="Bespoke Strategy"
                description="Custom solutions tailored to your unique challenges and opportunities."
              />
              <SolutionCard
                icon={<Zap size={32} />}
                title="Hands-On Support"
                description="Not just advice—we roll up our sleeves and help you execute."
              />
          </div>
        </div>
      </section>

      {/* Two Paths */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group rounded-3xl p-10 bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">For Clinics</h3>
              <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                Unlock your clinic's true potential with bespoke strategy and hands-on support—from solopreneur to multi-clinic empire.
              </p>
              <Link href="/grow-my-clinic" className="inline-flex items-center text-teal-600 font-semibold hover:gap-2 transition-all">
                Explore Clinic Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className="group rounded-3xl p-10 bg-gray-900 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">For Organisations</h3>
              <p className="mb-8 text-gray-300 leading-relaxed text-lg">
                Precision strategy for market leadership—corporate insights, market entry strategies, and AI integration.
              </p>
              <Link href="/grow-my-organisation" className="inline-flex items-center text-yellow-400 font-semibold hover:gap-2 transition-all">
                Explore Organisation Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10 text-gray-300">
            Join the aesthetics leaders who trust EQUALS3 to engineer their success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/grow-my-clinic" className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Book a Strategy Call
            </Link>
            <Link href="/grow-my-organisation" className="border border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}