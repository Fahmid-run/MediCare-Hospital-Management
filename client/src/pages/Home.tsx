import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Button from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Input';
import DoctorCard from '../components/DoctorCard';
import { SectionTitle } from '../components/ui/Misc';
import { doctors } from '../data/doctors';
import { specialties } from '../data/specialties';
import { hospitals } from '../data/hospitals';
import { testimonials } from '../data/reviews';
import { faqs, whyChooseUs, howItWorks, stats, healthTips } from '../data/misc';
import { cn } from '../utils/helpers';

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [hospital, setHospital] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].id);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (specialty) params.set('specialty', specialty);
    if (hospital) params.set('hospital', hospital);
    navigate(`/doctors?${params.toString()}`);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-blue-50 to-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-primary-100 text-primary-700 text-sm font-medium mb-5">
                <Icon.Sparkles size={16} />
                Trusted by 50,000+ patients
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight text-balance">
                Book Your Doctor <span className="text-primary-600">Appointment</span> Online
              </h1>
              <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">
                Find and book appointments with top specialists near you. Track your visits, access prescriptions, and manage your healthcare — all in one place.
              </p>

              <div className="mt-8 bg-white rounded-2xl shadow-soft border border-slate-100 p-4">
                <div className="grid sm:grid-cols-3 gap-3">
                  <Input placeholder="Doctor name" icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <Select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                    <option value="">All Specialties</option>
                    {specialties.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </Select>
                  <Select value={hospital} onChange={(e) => setHospital(e.target.value)}>
                    <option value="">All Hospitals</option>
                    {hospitals.map((h) => <option key={h.id} value={h.id}>{h.name}</option>)}
                  </Select>
                </div>
                <Button className="mt-3" fullWidth size="lg" onClick={handleSearch}>
                  <Icon.Search size={20} /> Search Doctors
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/book"><Button size="lg"><Icon.CalendarCheck size={20} /> Book Now</Button></Link>
                <Link to="/doctors"><Button variant="outline" size="lg"><Icon.Stethoscope size={20} /> Explore Doctors</Button></Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative bg-white/60 backdrop-blur rounded-3xl shadow-soft border border-white/60 p-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <Icon.HeartPulse size={140} className="text-primary-300" />
                  <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md p-3 flex items-center gap-2 animate-fade-in">
                    <div className="w-8 h-8 rounded-lg bg-success-100 text-success-600 flex items-center justify-center"><Icon.CheckCircle size={18} /></div>
                    <div><p className="text-xs font-semibold text-slate-700">Appointment</p><p className="text-[10px] text-success-600">Confirmed</p></div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-md p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center"><Icon.Stethoscope size={18} /></div>
                    <div><p className="text-xs font-semibold text-slate-700">250+ Doctors</p><p className="text-[10px] text-slate-400">Available now</p></div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-md p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center"><Icon.Star size={18} /></div>
                    <div><p className="text-xs font-semibold text-slate-700">4.9 Rating</p><p className="text-[10px] text-slate-400">Top rated</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {stats.map((s) => {
              const IconComp = Icon[s.icon as keyof typeof Icon];
              return (
                <div key={s.label} className="bg-white rounded-2xl shadow-card border border-slate-100 p-5 text-center card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3">
                    <IconComp size={24} />
                  </div>
                  <p className="text-2xl font-bold text-slate-800">{s.value}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Featured Doctors"
          subtitle="Meet our top-rated specialists trusted by thousands of patients."
          center
          action={<Link to="/doctors"><Button variant="outline" size="sm">View All <Icon.ArrowRight size={16} /></Button></Link>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.slice(0, 4).map((d) => <DoctorCard key={d.id} doctor={d} />)}
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Popular Specialties" subtitle="Find the right specialist for your health needs." center />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.slice(0, 12).map((s) => {
              const IconComp = Icon[s.icon as keyof typeof Icon];
              return (
                <Link key={s.id} to={`/doctors?specialty=${s.id}`} className="group bg-slate-50 hover:bg-primary-50 rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-card border border-transparent hover:border-primary-100">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3 text-primary-600 group-hover:scale-110 transition-transform">
                    <IconComp size={26} />
                  </div>
                  <p className="font-semibold text-sm text-slate-700">{s.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.doctorCount} doctors</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Why Choose MediCare?" subtitle="We provide a seamless healthcare experience designed around you." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((w) => {
            const IconComp = Icon[w.icon as keyof typeof Icon];
            return (
              <div key={w.title} className="bg-white rounded-2xl shadow-card border border-slate-100 p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center mb-4">
                  <IconComp size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{w.title}</h3>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{w.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-2 text-primary-100">Get started in four simple steps</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((h, i) => {
              const IconComp = Icon[h.icon as keyof typeof Icon];
              return (
                <div key={h.step} className="relative">
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-white text-primary-600 flex items-center justify-center mb-4">
                      <IconComp size={26} />
                    </div>
                    <span className="text-5xl font-bold text-white/20 absolute top-4 right-5">{h.step}</span>
                    <h3 className="font-bold text-white text-lg">{h.title}</h3>
                    <p className="text-sm text-primary-100 mt-1.5">{h.description}</p>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-white/40 z-10">
                      <Icon.ChevronRight size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="What Our Patients Say" subtitle="Real stories from real patients who trust MediCare." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl shadow-card border border-slate-100 p-6 card-hover">
              <Icon.Quote size={32} className="text-primary-200" />
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, i) => <Icon.Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Health Tips */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Latest Health Tips" subtitle="Stay informed with expert health advice from our doctors." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthTips.map((tip) => (
              <div key={tip.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 card-hover cursor-pointer group">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <Icon.BookOpen size={48} className="text-primary-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">{tip.category}</span>
                    <span className="text-xs text-slate-400">{tip.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-primary-600 transition-colors">{tip.title}</h3>
                  <p className="text-sm text-slate-500 mt-1.5 line-clamp-2">{tip.excerpt}</p>
                  <p className="text-xs text-slate-400 mt-3">{tip.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need to know about booking appointments." center />
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.id} className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-slate-800">{f.question}</span>
                <Icon.ChevronDown size={20} className={cn('text-slate-400 transition-transform flex-shrink-0', openFaq === f.id && 'rotate-180')} />
              </button>
              {openFaq === f.id && (
                <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed animate-fade-in">{f.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white">Ready to Take Control of Your Health?</h2>
            <p className="mt-3 text-primary-100 max-w-xl mx-auto">Book your appointment today and experience healthcare the modern way.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/book"><Button size="lg" className="bg-white text-primary-600 hover:bg-slate-100"><Icon.CalendarCheck size={20} /> Book Appointment</Button></Link>
              <Link to="/contact"><Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10"><Icon.Phone size={20} /> Contact Us</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
