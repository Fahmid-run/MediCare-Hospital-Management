import { Icon } from '../components/Icon';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Breadcrumb from '../components/ui/Misc';
import { SectionTitle } from '../components/ui/Misc';
import { doctors } from '../data/doctors';
import { stats, aboutTimeline } from '../data/misc';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} className="mb-4" />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
          <Icon.HeartPulse size={16} /> About MediCare
        </div>
        <h1 className="text-4xl font-bold text-slate-800 text-balance">Transforming Healthcare Through Technology</h1>
        <p className="mt-4 text-lg text-slate-500">We're on a mission to make quality healthcare accessible to everyone, everywhere. Since 1998, we've been connecting patients with the best doctors.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((s) => {
          const IconComp = Icon[s.icon as keyof typeof Icon];
          return (
            <Card key={s.label} className="p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-3"><IconComp size={24} /></div>
              <p className="text-3xl font-bold text-slate-800">{s.value}</p>
              <p className="text-sm text-slate-400 mt-1">{s.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Mission & Vision */}
      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <Icon.Target size={36} className="mb-3" />
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-primary-100 leading-relaxed">To bridge the gap between patients and healthcare providers through innovative technology, making quality medical care accessible, affordable, and convenient for everyone.</p>
        </Card>
        <Card className="p-8 bg-gradient-to-br from-success-500 to-success-700 text-white">
          <Icon.Eye2 size={36} className="mb-3" />
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-3 text-success-100 leading-relaxed">To be the leading digital healthcare platform that empowers patients to take control of their health journey while enabling doctors to provide the best possible care.</p>
        </Card>
      </div>

      {/* Our Doctors */}
      <div className="mb-12">
        <SectionTitle title="Our Leadership Doctors" subtitle="Meet the experts behind MediCare's excellence." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.slice(0, 4).map((d) => (
            <Card key={d.id} className="p-5 text-center card-hover">
              <Avatar src={d.photo} name={d.name} size="xl" ring className="mx-auto" />
              <h3 className="font-bold text-slate-800 mt-3">{d.name}</h3>
              <p className="text-sm text-primary-600">{d.specialization}</p>
              <p className="text-xs text-slate-400 mt-1">{d.experience} years experience</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <SectionTitle title="Our Journey" subtitle="Milestones that shaped MediCare into what it is today." center />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />
          <div className="space-y-8">
            {aboutTimeline.map((t, i) => (
              <div key={t.year} className={`relative flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-8 text-right' : 'sm:pl-8'}`}>
                  <Card className="p-5 ml-12 sm:ml-0">
                    <span className="text-primary-600 font-bold text-lg">{t.year}</span>
                    <h3 className="font-bold text-slate-800 mt-1">{t.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{t.description}</p>
                  </Card>
                </div>
                <div className="absolute left-4 sm:left-1/2 top-5 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow -translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
