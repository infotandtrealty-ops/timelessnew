const About = () => {
  const highlights = [
    { number: "5k+", label: "Graduates" },
    { number: "11+", label: "Years of Experience" },
    { number: "20k+", label: "Treatments Conducted" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-dark mb-8">
            About <span className="text-luxury-gold">Timeless Aesthetics</span>
          </h2>
          
          <p className="text-lg text-luxury-muted leading-relaxed mb-12 max-w-3xl mx-auto">
            Pioneer in Permanent Makeup, Cosmetology & Facial Aesthetics in India led by{" "}
            <span className="text-luxury-gold font-semibold">Dr. Shikha Baghi</span>{" "}
            (BDS, MDS, Endodontist, AAM Diamond Trainer) and{" "}
            <span className="text-luxury-gold font-semibold">Mr. Ashish Thapar</span>{" "}
            (B.E., Founder & Managing Director).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-luxury-cream to-white p-8 rounded-lg shadow-subtle group-hover:shadow-luxury transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-luxury-gold font-playfair mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-luxury-dark font-medium text-lg">
                    {highlight.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;