import { useState } from 'react';
import { Input } from '../../components/ui/Input';
import Pagination from '../../components/ui/Pagination';
import PrescriptionCard from '../../components/PrescriptionCard';
import { EmptyState } from '../../components/ui/Misc';
import { prescriptions } from '../../data/prescriptions';

export default function MyPrescriptions() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = prescriptions.filter((p) =>
    !search || p.doctorName.toLowerCase().includes(search.toLowerCase()) || p.diagnosis.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">My Prescriptions</h2>
        <p className="text-slate-500 mt-1">View and download all your prescriptions.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4">
        <Input placeholder="Search by doctor, diagnosis, or prescription ID..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {paged.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card border border-slate-100"><EmptyState icon="FileText" title="No prescriptions found" description="Your prescriptions will appear here after your consultations." /></div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">{paged.map((p) => <PrescriptionCard key={p.id} prescription={p} />)}</div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}
