import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const timeSlots = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];

const formatDateISO = (d: Date) => {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const BookAppointment = () => {
  const todayStr = useMemo(() => formatDateISO(new Date()), []);
  const [date, setDate] = useState<string>(todayStr);
  const [slot, setSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ date: string; time: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name.trim()) { setError("Name is required"); return; }
    if (!phone.trim()) { setError("Phone number is required"); return; }
    if (!date) { setError("Date is required"); return; }
    if (!slot) { setError("Please select a time slot"); return; }

    try {
      setSubmitting(true);
      const res = await fetch(import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api/appointments` : `http://localhost:5000/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, date, time: slot })
      });
      if (!res.ok) throw new Error("Failed to schedule appointment");
      setSuccess({ date, time: slot });
      setName(""); setPhone(""); setEmail(""); setSlot("");
    } catch (err: any) {
      setError(err?.message || "Failed to schedule appointment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        {/* Left: calendar + slots + form */}
        <section>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Book Appointment</h1>
          {success ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800">Appointment booked successfully</h2>
              <p className="text-green-700 mt-2">Date: {success.date}</p>
              <p className="text-green-700">Time: {success.time}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Select date</label>
                <input type="date" className="px-3 py-2 border rounded-md w-full max-w-xs"
                  value={date} min={todayStr} onChange={(e) => setDate(e.target.value)} />
              </div>

              {/* Time slots */}
              <div>
                <label className="block text-sm font-medium mb-2">Select time</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((t) => (
                    <button type="button" key={t}
                      className={`px-3 py-2 rounded-md border ${slot === t ? 'bg-luxury-gold text-white border-luxury-gold' : 'bg-white'}`}
                      onClick={() => setSlot(t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name*" value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                <input type="tel" placeholder="Phone Number*" value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
                <input type="email" placeholder="Email (optional)" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <Button type="submit" variant="luxury" size="lg" disabled={submitting || !slot}>
                  {submitting ? "Scheduling..." : "Schedule"}
                </Button>
              </form>
            </div>
          )}
        </section>

        {/* Right: company info */}
        <aside>
          <h2 className="text-xl font-bold mb-4">About Timeless</h2>
          <p className="text-muted-foreground">Book an appointment with our team for personalized consultation and services. Choose a suitable date and time, and our staff will confirm your slot shortly.</p>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
