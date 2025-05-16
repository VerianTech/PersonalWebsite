type HeroProps = {
	title: string;
	subtitle?: string;
  };
  
  export default function Hero({ title, subtitle }: HeroProps) {
	return (
	  <section className="text-center p-8">
		<h1 className="text-4xl font-bold">{title}</h1>
		{subtitle && <p className="text-xl mt-2 text-gray-500">{subtitle}</p>}
	  </section>
	);
  }
  