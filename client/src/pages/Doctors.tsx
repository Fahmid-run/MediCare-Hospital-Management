import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { Input, Select } from '../components/ui/Input';
import Button from '../components/ui/Button';
import DoctorCard from '../components/DoctorCard';
import Breadcrumb from '../components/ui/Misc';
import { EmptyState } from '../components/ui/Misc';
import Pagination from '../components/ui/Pagination';
import { doctors } from '../data/doctors';
import { specialties } from '../data/specialties';
import { hospitals } from '../data/hospitals';
import { cn } from '../utils/helpers';

const sortOptions = [
  { value: 'rating', label: 'Highest Rated' },
  { value: 'fee-low', label: 'Lowest Fee' },
  { value: 'experience', label: 'Most Experienced' },
  { value: 'newest', label: 'Newest' },
];

export default function Doctors() {
  const [params] = useSearchParams();
  const [search, setSearch] = useState(params.get('q') || '');
  const [specialty, setSpecialty] = useState(params.get('specialty') || '');
  const [hospital, setHospital] = useState(params.get('hospital') || '');
  const [experience, setExperience] = useState('');
  const [fee, setFee] = useState('');
  const [gender, setGender] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');
  const [sort, setSort] = useState('rating');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const perPage = 6;

  const filtered = useMemo(() => {
    let list = doctors.filter((d) => {
      if (search && !d.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (specialty && d.specialtyId !== specialty) return false;
      if (hospital && d.hospitalId !== hospital) return false;
      if (experience && d.experience < Number(experience)) return false;
      if (fee && d.consultationFee > Number(fee)) return false;
      if (gender && d.gender !== gender) return false;
      if (rating && d.rating < Number(rating)) return false;
      if (availability === 'today' && !d.availableToday) return false;
      return true;
    });
    list = [...list].sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'fee-low') return a.consultationFee - b.consultationFee;
      if (sort === 'experience') return b.experience - a.experience;
      if (sort === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0;
    });
    return list;
  }, [search, specialty, hospital, experience, fee, gender, rating, availability, sort]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  const resetFilters = () => {
    setSearch(''); setSpecialty(''); setHospital(''); setExperience(''); setFee(''); setGender(''); setRating(''); setAvailability(''); setSort('rating'); setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Doctors' }]} className="mb-4" />
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Find Your Doctor</h1>
          <p className="text-slate-500 mt-1">Browse our {doctors.length} verified specialists</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 mb-6">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input placeholder="Search by doctor name..." icon="Search" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
          </div>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
            <Icon.Filter size={18} /> Filters
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-6">
        {/* Filters */}
        <aside className={cn('lg:block', showFilters ? 'block' : 'hidden')}>
          <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-5 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 flex items-center gap-2"><Icon.Filter size={18} /> Filters</h3>
              <button onClick={resetFilters} className="text-xs text-primary-600 hover:underline">Reset</button>
            </div>
            <div className="space-y-4">
              <Select label="Specialization" value={specialty} onChange={(e) => { setSpecialty(e.target.value); setPage(1); }}>
                <option value="">All</option>
                {specialties.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </Select>
              <Select label="Hospital" value={hospital} onChange={(e) => { setHospital(e.target.value); setPage(1); }}>
                <option value="">All</option>
                {hospitals.map((h) => <option key={h.id} value={h.id}>{h.name}</option>)}
              </Select>
              <Select label="Experience" value={experience} onChange={(e) => { setExperience(e.target.value); setPage(1); }}>
                <option value="">Any</option>
                <option value="5">5+ years</option>
                <option value="10">10+ years</option>
                <option value="15">15+ years</option>
                <option value="20">20+ years</option>
              </Select>
              <Select label="Max Consultation Fee" value={fee} onChange={(e) => { setFee(e.target.value); setPage(1); }}>
                <option value="">Any</option>
                <option value="1000">৳1,000 or less</option>
                <option value="1500">৳1,500 or less</option>
                <option value="2000">৳2,000 or less</option>
              </Select>
              <Select label="Gender" value={gender} onChange={(e) => { setGender(e.target.value); setPage(1); }}>
                <option value="">Any</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
              <Select label="Rating" value={rating} onChange={(e) => { setRating(e.target.value); setPage(1); }}>
                <option value="">Any</option>
                <option value="4.5">4.5+ stars</option>
                <option value="4.7">4.7+ stars</option>
                <option value="4.9">4.9+ stars</option>
              </Select>
              <Select label="Availability" value={availability} onChange={(e) => { setAvailability(e.target.value); setPage(1); }}>
                <option value="">Any</option>
                <option value="today">Available Today</option>
              </Select>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-slate-500"><span className="font-semibold text-slate-700">{filtered.length}</span> doctors found</p>
            <Select value={sort} onChange={(e) => setSort(e.target.value)} className="!w-auto">
              {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </Select>
          </div>

          {paged.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-card border border-slate-100">
              <EmptyState title="No doctors found" description="Try adjusting your filters or search query." action={<Button onClick={resetFilters} variant="outline">Reset Filters</Button>} />
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {paged.map((d) => <DoctorCard key={d.id} doctor={d} />)}
              </div>
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
