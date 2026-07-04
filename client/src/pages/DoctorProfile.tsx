import { useParams, Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ReviewCard from '../components/ReviewCard';
import Breadcrumb from '../components/ui/Misc';
import { doctors } from '../data/doctors';
import { reviews } from '../data/reviews';
import { cn } from '../utils/helpers';

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id) || doctors[0];
  const docReviews = reviews.filter((r) => r.doctorId === doctor.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Doctors', to: '/doctors' }, { label: doctor.name }]} className="mb-4" />

      {/* Profile Header */}
      <Card className="overflow-hidden mb-6">
        <div className="h-28 bg-gradient-to-r from-primary-500 to-primary-700" />
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row gap-5 -mt-14">
            <Avatar src={doctor.photo} name={doctor.name} size="xl" className="ring-4 ring-white" />
            <div className="flex-1 sm:mt-14">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">{doctor.name}</h1>
                  <p className="text-primary-600 font-medium">{doctor.specialization}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{doctor.degree}</p>
                </div>
                <div className="flex gap-2">
                  <Link to={`/book?doctor=${doctor.id}`}><Button><Icon.CalendarCheck size={18} /> Book Appointment</Button></Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <span className="flex items-center gap-1.5 text-slate-600"><Icon.Star size={16} className="text-amber-400 fill-amber-400" /> {doctor.rating} ({doctor.reviewCount} reviews)</span>
                <span className="flex items-center gap-1.5 text-slate-600"><Icon.Award size={16} className="text-slate-400" /> {doctor.experience} years exp</span>
                <span className="flex items-center gap-1.5 text-slate-600"><Icon.Building size={16} className="text-slate-400" /> {doctor.hospital}</span>
                {doctor.availableToday && <Badge tone="success" dot>Available Today</Badge>}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-[1fr_340px] gap-6">
        <div className="space-y-6">
          {/* About */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">About Doctor</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{doctor.about}</p>
          </Card>

          {/* Education */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.BookOpen size={20} className="text-primary-600" /> Education</h2>
            <div className="space-y-3">
              {doctor.education.map((e, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                  <div className="w-9 h-9 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0"><Icon.Award size={18} /></div>
                  <div>
                    <p className="font-semibold text-slate-800">{e.degree}</p>
                    <p className="text-sm text-slate-500">{e.institute}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Graduated {e.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.Briefcase size={20} className="text-primary-600" /> Experience</h2>
            <div className="space-y-3">
              {doctor.experienceList.map((e, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                  <div className="w-9 h-9 rounded-lg bg-success-100 text-success-600 flex items-center justify-center flex-shrink-0"><Icon.Activity size={18} /></div>
                  <div>
                    <p className="font-semibold text-slate-800">{e.role}</p>
                    <p className="text-sm text-slate-500">{e.place}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{e.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Certificates */}
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.Shield size={20} className="text-primary-600" /> Certificates</h2>
            <div className="flex flex-wrap gap-2">
              {doctor.certificates.map((c, i) => <Badge key={i} tone="primary" className="!text-sm !py-1.5 !px-3">{c}</Badge>)}
            </div>
          </Card>

          {/* Reviews */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800">Patient Reviews</h2>
              <div className="flex items-center gap-1.5">
                <Icon.Star size={18} className="text-amber-400 fill-amber-400" />
                <span className="font-bold text-slate-800">{doctor.rating}</span>
                <span className="text-sm text-slate-400">({doctor.reviewCount})</span>
              </div>
            </div>
            <div className="space-y-4">
              {docReviews.length > 0 ? docReviews.map((r) => <ReviewCard key={r.id} review={r} />) : (
                <p className="text-sm text-slate-400 text-center py-6">No reviews yet.</p>
              )}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Consultation Fee</h3>
            <p className="text-3xl font-bold text-primary-600">৳{doctor.consultationFee}</p>
            <p className="text-sm text-slate-400 mt-1">per session</p>
            <Link to={`/book?doctor=${doctor.id}`}><Button fullWidth className="mt-4"><Icon.CalendarCheck size={18} /> Book Appointment</Button></Link>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.Globe size={18} className="text-primary-600" /> Languages</h3>
            <div className="flex flex-wrap gap-2">
              {doctor.languages.map((l) => <Badge key={l} tone="neutral" className="!text-sm">{l}</Badge>)}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.Clock size={18} className="text-primary-600" /> Working Hours</h3>
            <div className="space-y-2">
              {doctor.workingHours.map((w) => (
                <div key={w.day} className={cn('flex items-center justify-between text-sm py-1.5 px-2 rounded-lg', w.available ? '' : 'opacity-40')}>
                  <span className="font-medium text-slate-700">{w.day}</span>
                  <div className="text-right text-xs text-slate-500">
                    {w.available ? (
                      <>
                        <p>{w.morning}</p>
                        <p>{w.afternoon}</p>
                        <p>{w.evening}</p>
                      </>
                    ) : <span className="text-danger-500">Closed</span>}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
