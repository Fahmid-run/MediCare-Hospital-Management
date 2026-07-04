import { Icon } from '../../components/Icon';
import Card from '../../components/ui/Card';
import Avatar from '../../components/ui/Avatar';
import Badge from '../../components/ui/Badge';
import { adminUsers } from '../../data/misc';

export default function DemoAdmins() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Demo Admin Accounts</h2>
        <p className="text-slate-500 mt-1">Read-only view of demo administrator accounts for testing.</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <Icon.AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-amber-800">Demo Environment</p>
          <p className="text-sm text-amber-700 mt-0.5">These are read-only demo accounts. No editing, deletion, or login functionality is available.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {adminUsers.map((admin) => (
          <Card key={admin.id} className="p-5">
            <div className="flex items-start gap-4">
              <Avatar src={admin.photo} name={admin.name} size="lg" ring />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-slate-800">{admin.name}</h3>
                  <Badge tone="warning">Demo</Badge>
                </div>
                <p className="text-sm text-slate-400 truncate">{admin.email}</p>
                <p className="text-sm text-primary-600 font-medium mt-1">{admin.role}</p>
                <p className="text-xs text-slate-400 mt-1">Last active: {admin.lastActive}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-50">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Permissions</p>
              <div className="flex flex-wrap gap-1.5">
                {admin.permissions.map((p) => <Badge key={p} tone="primary">{p}</Badge>)}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
