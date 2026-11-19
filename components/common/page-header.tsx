interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pb-8 pt-6 md:pb-10 md:pt-10 border-b border-border/80 mb-8">
      <div className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
