import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Check } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    price: "$299",
    desc: "Perfect for small businesses getting started with digital marketing",
    features: ["Basic SEO Optimization", "5 Keywords Targeting", "Monthly Progress Reports", "On-Page SEO", "Google Analytics Setup", "Social Media Setup (2 Platforms)", "Email Support"],
    popular: false,
  },
  {
    name: "Professional Package",
    price: "$599",
    desc: "Best for growing businesses looking to expand their online presence",
    features: ["Advanced SEO Optimization", "15 Keywords Targeting", "Bi-Weekly Progress Reports", "On-Page & Off-Page SEO", "Content Marketing (4 Posts/Month)", "Social Media Management (4 Platforms)", "Google Ads Setup & Management", "Email & Phone Support", "Monthly Strategy Call"],
    popular: true,
  },
  {
    name: "Enterprise Package",
    price: "$1,299",
    desc: "Comprehensive solution for established businesses seeking market dominance",
    features: ["Complete SEO Strategy", "Unlimited Keywords Targeting", "Weekly Progress Reports", "Full On-Page & Off-Page SEO", "Content Marketing (12 Posts/Month)", "All Social Media Platforms", "Google Ads + Facebook Ads Management", "Reputation Management", "E-commerce Optimization", "Dedicated Account Manager", "24/7 Priority Support", "Custom Web Development"],
    popular: false,
  },
];

const PackagesPage = () => (
  <div className="bg-background min-h-screen">
    {/* Header */}
    <div className="bg-card border-b">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-primary text-sm font-medium flex items-center gap-1 mb-3 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-primary">BRAIN</span><span className="text-navy">BOXWORLD</span>
            </h1>
            <p className="text-sm text-muted-foreground">Digital Marketing Packages</p>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Package</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Select the perfect plan that fits your business needs and budget. All packages include our premium support.
        </p>
      </div>
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-5xl">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`bg-card rounded-xl p-8 shadow-sm relative ${pkg.popular ? "border-2 border-accent ring-1 ring-accent/20" : "border"}`}>
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
            <div className="mb-2">
              <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{pkg.desc}</p>
            <ul className="space-y-3 mb-8 text-left">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/12366134007"
              className={`block text-center py-3 rounded-lg font-semibold transition-opacity hover:opacity-90 ${
                pkg.popular ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      {/* Custom package */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">Need a Custom Package?</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Every business is unique. Contact us to discuss a customized package tailored specifically to your needs and goals.
        </p>
        <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Contact Us for Custom Quote
        </a>
      </div>
    </section>
  </div>
);

export default PackagesPage;
