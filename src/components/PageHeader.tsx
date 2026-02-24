interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="bg-navy py-16 text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-navy-foreground mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-navy-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </div>
);

export default PageHeader;
