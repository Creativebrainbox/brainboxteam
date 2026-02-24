import { Check, Code, Share2, Palette, Search, Shield, MonitorSmartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Code, title: "Web Development", desc: "We provide the best custom website development solutions for you. Our web design services are loved by startup's, businesses and organizations." },
  { icon: Share2, title: "Social Media Marketing", desc: "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. We will Grow brand awareness, engagement & traffic." },
  { icon: Palette, title: "Web Designing", desc: "We help you craft a responsive website design that will be compatible on all devices through our effective mobile and web development services." },
  { icon: MonitorSmartphone, title: "Search Engine Marketing", desc: "Search Engine Marketing is the process of gaining website traffic and visibility in search engines through the efforts of Pay-Per-Click advertising." },
  { icon: Search, title: "Search Engine Optimization", desc: "We offer Search Engine Optimization services to clients. We will improve Google, Yahoo, Bing etc first page ranking results & boost website traffic." },
  { icon: Shield, title: "Reputation Management", desc: "Create a positive image about your brand or product & protect your brand on the internet. We offer results online reputation management services." },
];

const portfolioItems = [
  { name: "retrospec.com", category: "E-commerce", url: "https://retrospec.com/", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" },
  { name: "darntough.com", category: "Apparel", url: "https://darntough.com/", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop" },
  { name: "trnda.com", category: "Fashion", url: "https://trnda.com/", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
  { name: "weightliftinghouse.com", category: "Sports Equipment", url: "https://ukstore.weightliftinghouse.com/", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop" },
  { name: "goondiwindicotton.com.au", category: "Cotton Products", url: "https://goondiwindicotton.com.au/", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop" },
  { name: "shopbenetek.com", category: "Retail", url: "https://shopbenetek.com/", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop" },
  { name: "thelandmarkproject.com", category: "Adventure Gear", url: "https://thelandmarkproject.com/", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop" },
];

const whatWeOffer = [
  { title: "Search Engine Optimization", desc: "We offer Search Engine Optimization services to clients. We will improve Google, Yahoo, Bing etc first page ranking results & boost website traffic.", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop" },
  { title: "Search Engine Marketing", desc: "Search Engine Marketing is the process of gaining website traffic and visibility in search engines through the efforts of Pay-Per-Click advertising.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop" },
  { title: "Social Media Marketing", desc: "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. We will Grow brand awareness, engagement & traffic.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop" },
  { title: "Web Designing", desc: "We help you craft a responsive website design that will be compatible on all devices through our effective mobile and web development services.", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop" },
  { title: "Reputation Management", desc: "Create a positive image about your brand or product & protect your brand on the internet. We offer results online reputation management services.", img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&h=300&fit=crop" },
  { title: "Web Development", desc: "We provide the best custom website development solutions for you. Our web design services are loved by startup's, businesses and organizations.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop" },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground max-w-3xl leading-tight mb-6">
            Professional Digital Marketing & SEO Services
          </h1>
          <p className="text-lg text-navy-foreground/80 max-w-2xl mb-6">
            We provide high quality Digital Marketing Services to grow your business online. Highly experienced in SEO marketing for Shopify, WordPress, Bigcommerce, Wix, Joomla & Magento.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-navy-foreground/90 mb-8">
            {["Boost Website Traffic", "First Page Google Rankings", "Increase Conversions", "Grow Organic Results"].map((item) => (
              <span key={item} className="flex items-center gap-1 text-sm"><Check className="w-4 h-4" /> {item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/12366134007" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </a>
            <a href="/portfolio" className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Check Portfolios
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">OUR SERVICES</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">FEATURED WORK</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h4 className="font-bold text-foreground">{p.name}</h4>
                  <p className="text-sm text-muted-foreground">{p.category}</p>
                  <span className="text-primary text-sm font-medium mt-2 inline-block">Visit Website →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">WHY CHOOSE US?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Certified Top SEO Experts</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a team of experts having more than 8 Years of experience, we evaluate ourselves as the best SEO Company. We offer professional Web development & comprehensive SEO services and help our clients to get increased organic search score significantly so as to compete for the top rankings in SERPs – even when it comes to highly competitive keywords.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Quality Solutions with 100% Satisfaction</h3>
              <p className="text-muted-foreground mb-4">
                We have experienced and humble SEO Experts that provides all the aspects of Digital Marketing & offer Google first Page ranking results.
              </p>
              <ul className="space-y-2">
                {[
                  "Content Marketing and Content Management",
                  "Search Engine Optimization for Google, Yahoo, Bing, etc.",
                  "Google Ads (Google AdWords), Pay Per Click Advertising",
                  "Social Media Marketing & Optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">ABOUT US</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop", alt: "SEO Analytics Dashboard" },
                { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=280&fit=crop", alt: "Web Development" },
                { img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=280&fit=crop", alt: "Social Media Marketing" },
                { img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=280&fit=crop", alt: "Responsive Design" },
              ].map((item, i) => (
                <img key={i} src={item.img} alt={item.alt} className="rounded-lg w-full h-40 object-cover shadow-sm" />
              ))}
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BrainBoxWorld is a leading digital marketing agency with over 8 years of experience in delivering exceptional SEO and web development services. We specialize in helping businesses achieve first-page Google rankings, increase organic traffic, and maximize online conversions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We pride ourselves on delivering measurable results and maintaining long-term partnerships with our clients. From startup ventures to established enterprises, we provide customized digital marketing solutions that drive real business growth.
              </p>
              <a href="/portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">WHAT WE OFFER</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeOffer.map((item) => (
              <div key={item.title} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="text-primary text-sm font-semibold cursor-pointer hover:underline">READ MORE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-foreground mb-4">Ready to Grow Your Business?</h2>
          <p className="text-navy-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/12366134007" className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </a>
            <a href="/contact" className="bg-card text-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
