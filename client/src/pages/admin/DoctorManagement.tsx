import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { Input, Select } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import Pagination from '../../components/ui/Pagination';
import { doctors } from '../../data/doctors';
import { formatCurrency } from '../../utils/helpers';

export default function DoctorManagement() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => doctors.filter((d) => {
    if (search && !d.name.toLowerCase().includes(search.toLowerCase()) && !d.specialization.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Doctor Management</h2>
          <p className="text-slate-500 mt-1">Manage all doctors on the platform.</p>
        </div>
        <Button><Icon.Plus size={18} /> Add Doctor</Button>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col sm:flex-row gap-3">
        <div className="flex-1"><Input placeholder="Search doctors..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="sm:!w-44">
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Pending">Pending Approval</option>
        </Select>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Doctor</th>
                <th className="text-left px-3 py-3 font-semibold hidden sm:table-cell">Specialty</th>
                <th className="text-left px-3 py-3 font-semibold hidden md:table-cell">Hospital</th>
                <th className="text-left px-3 py-3 font-semibold hidden lg:table-cell">Fee</th>
                <th className="text-left px-3 py-3 font-semibold">Status</th>
                <th className="text-right px-5 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {paged.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar src={d.photo} name={d.name} size="sm" />
                      <div><p className="font-semibold text-slate-700">{d.name}</p><p className="text-xs text-slate-400">{d.experience}y exp • ⭐ {d.rating}</p></div>
                    </div>
                  </td>
                  <td className="px-3 py-3 hidden sm:table-cell text-slate-600">{d.specialization}</td>
                  <td className="px-3 py-3 hidden md:table-cell text-slate-500">{d.hospital}</td>
                  <td className="px-3 py-3 hidden lg:table-cell text-slate-600 font-medium">{formatCurrency(d.consultationFee)}</td>
                  <td className="px-3 py-3"><Badge tone="success" dot>Active</Badge></td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link to={`/doctors/${d.id}`} className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100" title="View"><Icon.Eye size={16} /></Link>
                      <button className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50" title="Edit"><Icon.Edit size={16} /></button>
                      <button className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50" title="Suspend"><Icon.AlertCircle size={16} /></button>
                      <button className="p-1.5 rounded-lg text-success-600 hover:bg-success-50" title="Approve"><Icon.Check size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
