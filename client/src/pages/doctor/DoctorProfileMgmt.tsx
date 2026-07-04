import { useState } from 'react';
import { Icon } from '../../components/Icon';
import { Input, Select, Textarea } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import { doctors } from '../../data/doctors';

export default function DoctorProfileMgmt() {
  const doctor = doctors[0];
  const [education] = useState(doctor.education);
  const [experience] = useState(doctor.experienceList);
  const [certificates, setCertificates] = useState(doctor.certificates);
  const [languages, setLanguages] = useState(doctor.languages);
  const [newCert, setNewCert] = useState('');
  const [newLang, setNewLang] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Profile Management</h2>
          <p className="text-slate-500 mt-1">Update your professional information.</p>
        </div>
        <Button><Icon.Check size={18} /> Save Changes</Button>
      </div>

      {/* Photo */}
      <Card className="p-6">
        <h3 className="font-bold text-slate-800 mb-4">Profile Photo</h3>
        <div className="flex items-center gap-5">
          <Avatar src={doctor.photo} name={doctor.name} size="xl" ring />
          <div>
            <Button variant="outline" size="sm"><Icon.Upload size={16} /> Upload New Photo</Button>
            <p className="text-xs text-slate-400 mt-2">JPG, PNG or GIF. Max 2MB.</p>
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-slate-800 mb-4">Basic Information</h3>
          <div className="space-y-4">
            <Input label="Full Name" defaultValue={doctor.name} />
            <Input label="Degree" defaultValue={doctor.degree} />
            <Select label="Specialization" defaultValue={doctor.specialization}>
              <option>Cardiologist</option><option>Neurologist</option><option>Orthopedic Surgeon</option><option>Pediatrician</option>
            </Select>
            <Select label="Hospital" defaultValue={doctor.hospital}>
              <option>Apollo Heart Institute</option><option>MediCare Central Hospital</option><option>City Neuro Center</option>
            </Select>
            <Input label="Consultation Fee (৳)" type="number" defaultValue={doctor.consultationFee} />
            <Textarea label="Bio" rows={4} defaultValue={doctor.about} />
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Education</h3>
            <div className="space-y-3">
              {education.map((e, i) => (
                <div key={i} className="grid grid-cols-3 gap-2">
                  <Input placeholder="Degree" defaultValue={e.degree} className="text-sm" />
                  <Input placeholder="Institute" defaultValue={e.institute} className="text-sm col-span-2" />
                </div>
              ))}
              <Button variant="ghost" size="sm" fullWidth><Icon.Plus size={16} /> Add Education</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Experience</h3>
            <div className="space-y-3">
              {experience.map((e, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50">
                  <Input placeholder="Role" defaultValue={e.role} className="text-sm" />
                  <Input placeholder="Place" defaultValue={e.place} className="text-sm mt-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-slate-800 mb-4">Certificates</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {certificates.map((c, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-primary-50 text-primary-700 px-3 py-1.5 rounded-lg text-sm">
                {c}
                <button onClick={() => setCertificates(certificates.filter((_, idx) => idx !== i))} className="text-primary-400 hover:text-danger-500"><Icon.X size={14} /></button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input placeholder="Add certificate" value={newCert} onChange={(e) => setNewCert(e.target.value)} />
            <Button onClick={() => { if (newCert) { setCertificates([...certificates, newCert]); setNewCert(''); } }}><Icon.Plus size={16} /></Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-slate-800 mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {languages.map((l, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm">
                {l}
                <button onClick={() => setLanguages(languages.filter((_, idx) => idx !== i))} className="text-slate-400 hover:text-danger-500"><Icon.X size={14} /></button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input placeholder="Add language" value={newLang} onChange={(e) => setNewLang(e.target.value)} />
            <Button onClick={() => { if (newLang) { setLanguages([...languages, newLang]); setNewLang(''); } }}><Icon.Plus size={16} /></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
