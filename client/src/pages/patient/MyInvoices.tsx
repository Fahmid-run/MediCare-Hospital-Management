import { useState } from 'react';
import { Input, Select } from '../../components/ui/Input';
import Pagination from '../../components/ui/Pagination';
import InvoiceCard from '../../components/InvoiceCard';
import { EmptyState } from '../../components/ui/Misc';
import { invoices } from '../../data/invoices';

export default function MyInvoices() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered = invoices.filter((inv) => {
    if (status !== 'All' && inv.status !== status) return false;
    if (search && !inv.invoiceNumber.toLowerCase().includes(search.toLowerCase()) && !inv.doctorName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">My Invoices</h2>
        <p className="text-slate-500 mt-1">View and download all your payment invoices.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1"><Input placeholder="Search by invoice or doctor..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="sm:!w-40">
          <option value="All">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </Select>
      </div>

      {paged.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-card border border-slate-100"><EmptyState icon="FileText" title="No invoices found" description="Your invoices will appear here after your payments." /></div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">{paged.map((inv) => <InvoiceCard key={inv.id} invoice={inv} />)}</div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}
