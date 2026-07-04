import { useState } from 'react';
import { Input, Select, Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import { Icon } from '../../components/Icon';
import { currentPatient } from '../../data/patients';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [patient, setPatient] = useState(currentPatient);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
          <p className="text-slate-500 mt-1">Manage your personal and medical information.</p>
        </div>
        <Button variant={editing ? 'primary' : 'outline'} onClick={() => setEditing(!editing)}>
          {editing ? <><Icon.Check size={18} /> Save Changes</> : <><Icon.Edit size={18} /> Edit Profile</>}
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="relative">
            <Avatar src={patient.photo} name={patient.name} size="xl" ring />
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center border-2 border-white"><Icon.Camera size={14} /></button>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-800">{patient.name}</h3>
            <p className="text-slate-400">{patient.email}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
              <Badge tone="success" dot>{patient.status}</Badge>
              <Badge tone="primary">Blood: {patient.bloodGroup}</Badge>
              <Badge tone="neutral">{patient.recentAppointments} visits</Badge>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <Card className="p-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.User size={20} className="text-primary-600" /> Personal Information</h3>
          <div className="space-y-4">
            <Input label="Full Name" value={patient.name} disabled={!editing} onChange={(e) => setPatient({ ...patient, name: e.target.value })} />
            <Input label="Email" value={patient.email} disabled={!editing} onChange={(e) => setPatient({ ...patient, email: e.target.value })} />
            <Input label="Phone" value={patient.phone} disabled={!editing} onChange={(e) => setPatient({ ...patient, phone: e.target.value })} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Age" type="number" value={patient.age} disabled={!editing} onChange={(e) => setPatient({ ...patient, age: Number(e.target.value) })} />
              <Select label="Gender" value={patient.gender} disabled={!editing} onChange={(e) => setPatient({ ...patient, gender: e.target.value as any })}>
                <option>Male</option><option>Female</option><option>Other</option>
              </Select>
            </div>
            <Input label="Blood Group" value={patient.bloodGroup} disabled={!editing} onChange={(e) => setPatient({ ...patient, bloodGroup: e.target.value })} />
            <Textarea label="Address" rows={2} value={patient.address} disabled={!editing} onChange={(e) => setPatient({ ...patient, address: e.target.value })} />
          </div>
        </Card>

        <div className="space-y-6">
          {/* Medical Info */}
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.Activity size={20} className="text-primary-600" /> Medical Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Medical History</label>
                <div className="flex flex-wrap gap-2">
                  {patient.medicalHistory.map((m) => <Badge key={m} tone="warning">{m}</Badge>)}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Allergies</label>
                <div className="flex flex-wrap gap-2">
                  {patient.allergies.length > 0 ? patient.allergies.map((a) => <Badge key={a} tone="danger">{a}</Badge>) : <span className="text-sm text-slate-400">No known allergies</span>}
                </div>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icon.Phone size={20} className="text-primary-600" /> Emergency Contact</h3>
            <div className="space-y-4">
              <Input label="Contact Name" value={patient.emergencyContact.name} disabled={!editing} onChange={(e) => setPatient({ ...patient, emergencyContact: { ...patient.emergencyContact, name: e.target.value } })} />
              <Input label="Relationship" value={patient.emergencyContact.relation} disabled={!editing} onChange={(e) => setPatient({ ...patient, emergencyContact: { ...patient.emergencyContact, relation: e.target.value } })} />
              <Input label="Phone" value={patient.emergencyContact.phone} disabled={!editing} onChange={(e) => setPatient({ ...patient, emergencyContact: { ...patient.emergencyContact, phone: e.target.value } })} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
