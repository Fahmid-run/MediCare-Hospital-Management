import { useState } from 'react';
import { Icon } from '../../components/Icon';
import { Input, Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Modal from '../../components/ui/Modal';
import ReviewCard from '../../components/ReviewCard';
import { reviews } from '../../data/reviews';

export default function ReviewsManagement() {
  const [search, setSearch] = useState('');
  const [replyOpen, setReplyOpen] = useState<string | null>(null);
  const [reply, setReply] = useState('');

  const filtered = reviews.filter((r) => !search || r.patientName.toLowerCase().includes(search.toLowerCase()) || r.doctorName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Reviews Management</h2>
        <p className="text-slate-500 mt-1">Moderate and respond to patient reviews.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4">
        <Input placeholder="Search by patient or doctor..." icon="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((r) => (
          <Card key={r.id} className="p-5">
            <ReviewCard review={r} showDoctor />
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
              <Badge tone={r.status === 'Approved' ? 'success' : r.status === 'Pending' ? 'warning' : 'danger'} dot>{r.status}</Badge>
              <div className="flex gap-2">
                <Button variant="success" size="sm"><Icon.Check size={15} /> Approve</Button>
                <Button variant="outline" size="sm" onClick={() => { setReplyOpen(r.id); setReply(r.reply || ''); }}><Icon.MessageSquare size={15} /> Reply</Button>
                <Button variant="ghost" size="sm" className="text-danger-600"><Icon.Trash size={15} /></Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={!!replyOpen}
        onClose={() => setReplyOpen(null)}
        title="Reply to Review"
        footer={
          <>
            <Button variant="ghost" onClick={() => setReplyOpen(null)}>Cancel</Button>
            <Button onClick={() => setReplyOpen(null)}><Icon.Send size={16} /> Send Reply</Button>
          </>
        }
      >
        <Textarea label="Your Reply" rows={4} placeholder="Write a response to this review..." value={reply} onChange={(e) => setReply(e.target.value)} />
      </Modal>
    </div>
  );
}
