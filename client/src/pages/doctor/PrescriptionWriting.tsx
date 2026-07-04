import { useState } from 'react';
import { Icon } from '../../components/Icon';
import { Input, Select, Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';

type Medicine = { name: string; dosage: string; duration: string; instructions: string };

export default function PrescriptionWriting() {
  const [diagnosis, setDiagnosis] = useState('');
  const [nextVisit, setNextVisit] = useState('');
  const [notes, setNotes] = useState('');
  const [medicines, setMedicines] = useState<Medicine[]>([{ name: '', dosage: '', duration: '', instructions: '' }]);

  const addMedicine = () => setMedicines([...medicines, { name: '', dosage: '', duration: '', instructions: '' }]);
  const removeMedicine = (i: number) => setMedicines(medicines.filter((_, idx) => idx !== i));
  const updateMedicine = (i: number, field: keyof Medicine, value: string) => setMedicines(medicines.map((m, idx) => idx === i ? { ...m, [field]: value } : m));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Write Prescription</h2>
          <p className="text-slate-500 mt-1">Create a new prescription for your patient.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Icon.Eye size={18} /> Preview</Button>
          <Button><Icon.Check size={18} /> Save Prescription</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-6">
          {/* Patient Info */}
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Patient Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Select label="Select Patient">
                <option>John Carter — 34y, Male</option>
                <option>Aisha Rahman — 28y, Female</option>
                <option>Mohammed Ali — 45y, Male</option>
              </Select>
              <Input label="Appointment ID" placeholder="APT-XXX" />
            </div>
          </Card>

          {/* Diagnosis */}
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Diagnosis & Notes</h3>
            <div className="space-y-4">
              <Input label="Diagnosis" placeholder="Primary diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
              <Textarea label="Clinical Notes" rows={3} placeholder="Additional notes for the patient..." value={notes} onChange={(e) => setNotes(e.target.value)} />
              <Input label="Next Visit" type="date" value={nextVisit} onChange={(e) => setNextVisit(e.target.value)} />
            </div>
          </Card>

          {/* Medicines */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800">Medicines</h3>
              <Button variant="secondary" size="sm" onClick={addMedicine}><Icon.Plus size={16} /> Add Medicine</Button>
            </div>
            <div className="space-y-4">
              {medicines.map((m, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-500">Medicine #{i + 1}</span>
                    {medicines.length > 1 && <button onClick={() => removeMedicine(i)} className="text-danger-500 hover:bg-danger-50 p-1 rounded-lg"><Icon.Trash size={16} /></button>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Input label="Medicine Name" placeholder="e.g. Amlodipine 5mg" value={m.name} onChange={(e) => updateMedicine(i, 'name', e.target.value)} />
                    <Input label="Dosage" placeholder="e.g. 1 tablet daily" value={m.dosage} onChange={(e) => updateMedicine(i, 'dosage', e.target.value)} />
                    <Input label="Duration" placeholder="e.g. 30 days" value={m.duration} onChange={(e) => updateMedicine(i, 'duration', e.target.value)} />
                    <Input label="Instructions" placeholder="e.g. After meals" value={m.instructions} onChange={(e) => updateMedicine(i, 'instructions', e.target.value)} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Preview */}
        <div>
          <Card className="p-5 sticky top-20">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center"><Icon.HeartPulse size={18} /></div>
                <span className="font-bold text-slate-800">MediCare</span>
              </div>
              <span className="text-xs text-slate-400">Prescription Preview</span>
            </div>
            <div className="text-sm space-y-3">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-50">
                <Avatar src="https://i.pravatar.cc/300?u=john" name="John Carter" size="sm" />
                <div><p className="font-semibold text-slate-700">John Carter</p><p className="text-xs text-slate-400">34y, Male</p></div>
              </div>
              <div><span className="text-slate-400 text-xs">Diagnosis:</span><p className="font-medium text-slate-700">{diagnosis || '—'}</p></div>
              <div>
                <span className="text-slate-400 text-xs">Medicines:</span>
                <div className="mt-1 space-y-1.5">
                  {medicines.filter((m) => m.name).map((m, i) => (
                    <div key={i} className="text-xs p-2 rounded-lg bg-slate-50">
                      <p className="font-semibold text-slate-700">{m.name}</p>
                      <p className="text-slate-500">{m.dosage} • {m.duration}</p>
                    </div>
                  ))}
                  {!medicines.some((m) => m.name) && <p className="text-slate-300 text-xs">No medicines added yet.</p>}
                </div>
              </div>
              {nextVisit && <div><span className="text-slate-400 text-xs">Next Visit:</span><p className="font-medium text-slate-700">{nextVisit}</p></div>}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
