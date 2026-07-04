import { useState, useMemo } from 'react';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import Pagination from '../../components/ui/Pagination';
import { patients } from '../../data/patients';

export default function PatientManagement() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => patients.filter((p) => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.email.toLowerCase().includes(search.toLowerCase())), [search]);
  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Patient Management</h2>
        <p className="text-slate-500 mt-1">Manage all registered patients.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4">
        <Input placeholder="Search patients by name or email..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paged.map((p) => (
          <Card key={p.id} className="p-5 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Avatar src={p.photo} name={p.name} size="lg" ring />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-800 truncate">{p.name}</p>
                <p className="text-xs text-slate-400 truncate">{p.email}</p>
                <Badge tone={p.status === 'Active' ? 'success' : 'neutral'} dot className="mt-1">{p.status}</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><p className="text-xs text-slate-400">Age</p><p className="font-medium text-slate-700">{p.age}y</p></div>
              <div><p className="text-xs text-slate-400">Gender</p><p className="font-medium text-slate-700">{p.gender}</p></div>
              <div><p className="text-xs text-slate-400">Blood</p><p className="font-medium text-slate-700">{p.bloodGroup}</p></div>
              <div><p className="text-xs text-slate-400">Visits</p><p className="font-medium text-slate-700">{p.recentAppointments}</p></div>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-slate-50">
              <Button variant="outline" size="sm" fullWidth><Icon.Eye size={15} /> View Profile</Button>
            </div>
          </Card>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
