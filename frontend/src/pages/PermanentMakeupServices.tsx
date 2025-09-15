import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  { slug: "microblading", title: "Microblading" },
  { slug: "ombre-brows", title: "Ombre Brows" },
  { slug: "powder-brows", title: "Powder Brows" },
  { slug: "combination-brows", title: "Combination Brows" },
  { slug: "lip-color", title: "Permanent Lip Color" },
  { slug: "beauty-spot", title: "Permanent Beauty Spot" },
  { slug: "lash-lift", title: "Eye Lash Lift" },
  { slug: "eyebrows-lamination", title: "Eyebrows Lamination" },
  { slug: "scalp-micropigmentation", title: "Scalp Micro Pigmentation" },
  { slug: "stretch-mark-camouflage", title: "Stretch Mark Camouflage" },
  { slug: "vitiligo-camouflage", title: "Vitiligo Camouflage" },
];

const PermanentMakeupServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="relative bg-cover bg-center h-48 md:h-64 flex items-center justify-center" style={{ backgroundImage: "url('/images/our services/1.webp')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Permanent Makeup</h1>
          <p className="mt-2 text-sm">Home / Permanent Makeup</p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Explore Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a key={s.slug} href={`/services/permanent-makeup/${s.slug}`} className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="h-40 bg-muted" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Learn more</p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PermanentMakeupServices;
