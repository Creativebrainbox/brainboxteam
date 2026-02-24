import PageHeader from "@/components/PageHeader";

const portfolioItems = [
  { name: "retrospec.com", category: "E-commerce", url: "https://retrospec.com/", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=500&fit=crop" },
  { name: "darntough.com", category: "Apparel", url: "https://darntough.com/", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=500&fit=crop" },
  { name: "trnda.com", category: "Fashion", url: "https://trnda.com/", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop" },
  { name: "weightliftinghouse.com", category: "Sports Equipment", url: "https://ukstore.weightliftinghouse.com/", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=500&fit=crop" },
  { name: "goondiwindicotton.com.au", category: "Cotton Products", url: "https://goondiwindicotton.com.au/", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=500&fit=crop" },
  { name: "shopbenetek.com", category: "Retail", url: "https://shopbenetek.com/", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=500&fit=crop" },
  { name: "thelandmarkproject.com", category: "Adventure Gear", url: "https://thelandmarkproject.com/", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=500&fit=crop" },
  { name: "glamira.africa", category: "Jewelry", url: "https://www.glamira.africa/", img: "https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=600&h=500&fit=crop" },
];

const PortfolioPage = () => (
  <div>
    <PageHeader title="Our Portfolio" subtitle="Check out some of our recent projects and see how we've helped businesses like yours succeed online." />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <img src={p.img} alt={p.name} className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PortfolioPage;
