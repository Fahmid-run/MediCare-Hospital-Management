import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Input, Textarea } from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Breadcrumb from '../components/ui/Misc';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} className="mb-4" />
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Get in Touch</h1>
      <p className="text-slate-500 mb-8">We're here to help. Reach out to us anytime.</p>

      <div className="grid lg:grid-cols-[1fr_400px] gap-6">
        <Card className="p-6">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-success-100 text-success-600 flex items-center justify-center mx-auto mb-4"><Icon.CheckCircle size={36} /></div>
              <h3 className="text-xl font-bold text-slate-800">Message Sent!</h3>
              <p className="text-slate-500 mt-2">We'll get back to you within 24 hours.</p>
              <Button className="mt-5" onClick={() => setSent(false)}>Send Another</Button>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Send a Message</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Your Name" placeholder="John Carter" />
                  <Input label="Email" placeholder="john@email.com" icon="Mail" />
                </div>
                <Input label="Phone" placeholder="+880 1XXX-XXXXXX" icon="Phone" />
                <Input label="Subject" placeholder="How can we help?" />
                <Textarea label="Message" rows={5} placeholder="Write your message..." />
                <Button onClick={() => setSent(true)} size="lg"><Icon.Send size={18} /> Send Message</Button>
              </div>
            </>
          )}
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-slate-800 mb-4">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3"><div className="w-9 h-9 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0"><Icon.MapPin size={18} /></div><div><p className="font-semibold text-slate-700">Address</p><p className="text-slate-500">123 Health Avenue, Gulshan, Dhaka 1212</p></div></div>
              <div className="flex items-start gap-3"><div className="w-9 h-9 rounded-lg bg-success-100 text-success-600 flex items-center justify-center flex-shrink-0"><Icon.Phone size={18} /></div><div><p className="font-semibold text-slate-700">Phone</p><p className="text-slate-500">+880 1711-100100</p></div></div>
              <div className="flex items-start gap-3"><div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0"><Icon.Mail size={18} /></div><div><p className="font-semibold text-slate-700">Email</p><p className="text-slate-500">info@medicare.org</p></div></div>
              <div className="flex items-start gap-3"><div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0"><Icon.Clock size={18} /></div><div><p className="font-semibold text-slate-700">Working Hours</p><p className="text-slate-500">Mon - Sat: 8:00 AM - 10:00 PM</p><p className="text-slate-500">Emergency: 24/7</p></div></div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center relative">
              <Icon.Map size={64} className="text-primary-300" />
              <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow-md px-3 py-2">
                <p className="text-xs font-semibold text-slate-700">MediCare Central Hospital</p>
                <p className="text-[10px] text-slate-400">Gulshan, Dhaka</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
