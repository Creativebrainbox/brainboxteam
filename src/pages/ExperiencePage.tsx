import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Award, TrendingUp, BarChart3, ExternalLink } from "lucide-react";

type ResultItem = {
  name: string;
  url: string;
  img: string;
  desc: string;
  traffic?: string;
  ranking?: string;
  conversion?: string;
  date: string;
};

const rankingResults: ResultItem[] = [
  { name: "Custom Las Vegas Weddings", url: "https://customlasvegasweddings.com/", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", desc: "Achieved first page rankings for all major wedding-related keywords in Las Vegas market", traffic: "+280%", ranking: "1st Page for 5 keywords", date: "December 2025" },
  { name: "Used Booths", url: "https://usedbooths.com/", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", desc: "Dominated trade show exhibit equipment market with first page rankings across all target keywords", ranking: "1st Page for 6 keywords", date: "November 2025" },
  { name: "Matt Adams Ministries", url: "https://www.mattadamsministries.com/", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop", desc: "First page rankings for Christian entertainment niche keywords", ranking: "1st Page for 3 keywords", date: "October 2025" },
  { name: "Mobile Drug Screen", url: "https://mobiledrugsscreen.com/", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", desc: "First page rankings across California markets for mobile drug testing services", ranking: "1st Page for 5 keywords", date: "September 2025" },
  { name: "Drift School", url: "https://www.driftschool.com/", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop", desc: "Top rankings for all drift training and lesson keywords", ranking: "1st Page for 4 keywords", date: "August 2025" },
  { name: "OC Laundry", url: "https://www.oclaundry.com/", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop", desc: "Dominated Orange County laundry services market with first page rankings", ranking: "1st Page for 5 keywords", date: "July 2025" },
  { name: "YorkeLee Home Decor", url: "https://yorkelee.com.au/", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop", desc: "Achieved first page rankings for competitive home decor keywords", traffic: "+180%", ranking: "#1 on Google", conversion: "12.5%", date: "January 2025" },
  { name: "Seattle Gold Grillz", url: "https://seattlegoldgrillz.com/", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", desc: "Dominated local and national jewelry search results", traffic: "+220%", ranking: "Top 3 positions", conversion: "18.2%", date: "December 2024" },
  { name: "Dolphin Suturs", url: "https://dolphinsuturs.com/", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop", desc: "From not ranked to top 10 positions for all suture manufacturing keywords in India", traffic: "+450%", ranking: "Rank #3-8 (from not in top 100)", date: "November 2024" },
  { name: "Konnect ERP", url: "https://konnecterp.com/", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", desc: "Top 10 rankings for ERP software across multiple Indian manufacturing markets", ranking: "Rank #3-9 (from not in top 100)", date: "November 2024" },
  { name: "Rainy Filters", url: "https://rainyfilters.com/", img: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop", desc: "Achieved #1 rankings for rainwater harvesting in India - dominating the market", traffic: "+520%", ranking: "#1-4 positions (from not in top 100)", date: "October 2024" },
  { name: "HII Bangalore", url: "https://hiibangalore.com/", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop", desc: "Multiple #1 rankings for catering and event services in Bangalore", ranking: "#1-5 positions (from not in top 100)", date: "September 2024" },
  { name: "Music Box Attic", url: "https://musicboxattic.com/", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", desc: "From page 2 to #1 for antique music box keywords", traffic: "+190%", ranking: "#1-6 positions", date: "August 2024" },
  { name: "Bespoke Coach", url: "https://bespokecoach.com/", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop", desc: "Top 10 rankings for luxury Mercedes Sprinter customization services", ranking: "Rank #5-7 (from not in top 100)", date: "July 2024" },
  { name: "Children's Home Healthcare", url: "https://childrenshha.com/", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop", desc: "Multiple #1 rankings for pediatric home healthcare services", ranking: "#1-5 positions (from not in top 100)", conversion: "24.5%", date: "June 2024" },
  { name: "Greediersocialmedia UK", url: "https://greediersocialmedia.co.uk/", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", desc: "Achieved #1 rankings for social media growth services in UK market", ranking: "#1-2 positions in Google UK", date: "May 2024" },
  { name: "ATL Systems UK", url: "https://atlsystems.co.uk/", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop", desc: "Five #1 rankings for pharmacy software and MHRA compliance solutions", ranking: "#1 for all 5 keywords (from not in top 100)", date: "April 2024" },
  { name: "Clean Group Australia", url: "https://www.clean-group.com.au/", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop", desc: "Dominated Australian commercial cleaning market with multiple #1 rankings", traffic: "+380%", ranking: "#1 for 6 major keywords", date: "March 2024" },
  { name: "Ageless Laser Centres Canada", url: "https://agelesslasercentres.com/", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop", desc: "Top rankings for cosmetic procedures in Victoria BC market", ranking: "#1-3 positions (from not in top 100)", date: "February 2024" },
  { name: "Persian Rugs Australia", url: "https://persianrugsaustralia.com.au/", img: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=400&fit=crop", desc: "Multiple #1 and #2 rankings for Persian and Oriental rugs in Australia", ranking: "#1-2 positions (from not in top 100)", date: "January 2024" },
];

const tabs = [
  { id: "rankings", label: "Ranking Results", icon: Award },
  { id: "traffic", label: "Traffic Results", icon: TrendingUp },
  { id: "sales", label: "Sales Results", icon: BarChart3 },
];

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState("rankings");

  const filteredResults = activeTab === "rankings" ? rankingResults :
    activeTab === "traffic" ? rankingResults.filter(r => r.traffic) :
    rankingResults.filter(r => r.conversion);

  return (
    <div className="bg-background min-h-screen">
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
              <p className="text-sm text-muted-foreground">Our Experience & Client Results</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. Explore our proven success in SEO, traffic growth, and digital marketing excellence.
          </p>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4 mb-10">
          <div className="flex justify-center">
            <div className="bg-card border rounded-lg p-1 inline-flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab heading */}
        <div className="container mx-auto px-4 mb-10">
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                {activeTab === "rankings" && <Award className="w-5 h-5 text-primary" />}
                {activeTab === "traffic" && <TrendingUp className="w-5 h-5 text-primary" />}
                {activeTab === "sales" && <BarChart3 className="w-5 h-5 text-primary" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {activeTab === "rankings" ? "Ranking Results" : activeTab === "traffic" ? "Traffic Results" : "Sales Results"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {activeTab === "rankings" ? "See how we've helped clients achieve top rankings on search engines" :
                   activeTab === "traffic" ? "See the traffic growth we've achieved for our clients" :
                   "See the conversion improvements we've delivered"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((item) => (
              <div key={item.name + item.date} className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h4 className="text-lg font-bold text-foreground mb-1">{item.name}</h4>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium flex items-center gap-1 mb-3 hover:underline">
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </a>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <div className="space-y-2 border-t pt-3">
                    {item.traffic && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Traffic Increase:</span>
                        <span className="font-bold text-accent">{item.traffic}</span>
                      </div>
                    )}
                    {item.ranking && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Ranking:</span>
                        <span className="font-bold text-primary">{item.ranking}</span>
                      </div>
                    )}
                    {item.conversion && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Conversion:</span>
                        <span className="font-bold text-accent">{item.conversion}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-4 mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-muted-foreground mb-6">Let us help you achieve similar results. Start your journey to digital success today.</p>
          <a href="https://wa.me/12366134007" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
