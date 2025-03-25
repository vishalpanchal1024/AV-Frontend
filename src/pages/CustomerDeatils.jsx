import React from "react";
import {
  ArrowLeft,
  Link2,
  Trash2,
  Zap,
  Calendar,
  CreditCard,
  Play,
  AudioWaveform as Waveform,
} from "lucide-react";

function CustomerDetails() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-gray-600">
          <ArrowLeft size={24} />
          <span className="ml-2">Back</span>
        </button>
        <h1 className="text-2xl font-semibold">Customer Details</h1>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Log in as user
        </button>
        <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Change password
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Link2 size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

function CustomerInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
          alt="James Brown"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">James Brown</h2>
          <p className="text-gray-500">jamesbown@gmail.com</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Company Name</p>
        <p className="font-medium">Jaco-Jagur Corporation</p>
        <p className="text-sm text-gray-500 mt-4 mb-1">Email Address</p>
        <p className="font-medium">Jamesbrown@gmail.com</p>
        <p className="text-sm text-gray-500 mt-4 mb-1">Current Plan</p>
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-yellow-500" />
          <span className="font-medium">Ignite</span>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">City</p>
        <p className="font-medium">New York</p>
        <p className="text-sm text-gray-500 mt-4 mb-1">State</p>
        <p className="font-medium">London</p>
        <p className="text-sm text-gray-500 mt-4 mb-1">Zip code</p>
        <p className="font-medium">3000</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">Number of Agents</p>
        <p className="font-medium">340</p>
        <p className="text-sm text-gray-500 mt-4 mb-1">Status</p>
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
          Active
        </span>
      </div>
    </div>
  );
}

function BillingHistory() {
  return (
    <div className="bg-gray-900 rounded-xl p-4 sm:p-6 mb-8 overflow-x-auto">
      <h3 className="text-xl font-semibold text-white mb-6">Billing History</h3>

      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <CreditCard size={24} className="text-gray-400" />
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Plan:</p>
                <p className="text-white">Ignite</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Date:</p>
                <p className="text-white">40 min</p>
              </div>
              <button className="text-indigo-400 hover:text-indigo-300">
                Change Plan
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Next payment on 23/3/2028
            </p>
          </div>
        </div>
      </div>

      <div className="min-w-[600px]">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left font-medium pb-4">Plan Name</th>
              <th className="text-left font-medium pb-4">Method</th>
              <th className="text-left font-medium pb-4">Date</th>
              <th className="text-left font-medium pb-4">Amount</th>
              <th className="text-left font-medium pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr>
              <td className="py-4 text-white">Ignite</td>
              <td className="py-4">
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                  alt="PayPal"
                  className="h-6"
                />
              </td>
              <td className="py-4 text-white">2/3/2024</td>
              <td className="py-4 text-white">$56.00</td>
              <td className="py-4">
                <span className="text-indigo-400">Processing</span>
              </td>
            </tr>
            <tr>
              <td className="py-4 text-white">Propel</td>
              <td className="py-4">
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                  alt="PayPal"
                  className="h-6"
                />
              </td>
              <td className="py-4 text-white">2/3/2024</td>
              <td className="py-4 text-white">$56.00</td>
              <td className="py-4">
                <span className="text-green-400">Success</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Appointments() {
  return (
    <div className="bg-gray-900 rounded-xl p-4 sm:p-6 mb-8 overflow-x-auto">
      <h3 className="text-xl font-semibold text-white mb-6">Appointments</h3>

      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Calendar size={24} className="text-gray-400" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div>
              <p className="text-sm text-gray-400">Client:</p>
              <p className="text-white">Riki Lamba</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Date:</p>
              <p className="text-white">2/3/2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Time:</p>
              <p className="text-white">40 min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[500px]">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left font-medium pb-4">Client</th>
              <th className="text-left font-medium pb-4">Date</th>
              <th className="text-left font-medium pb-4">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {[...Array(3)].map((_, i) => (
              <tr key={i}>
                <td className="py-4 text-white">Riki Lamba</td>
                <td className="py-4 text-white">2/3/2024</td>
                <td className="py-4 text-white">40 min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AgentsManagement() {
  return (
    <div className="bg-gray-900 rounded-xl p-4 sm:p-6 mb-8 overflow-x-auto">
      <h3 className="text-xl font-semibold text-white mb-6">
        Agents Management
      </h3>

      <div className="min-w-[500px]">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left font-medium pb-4">Agent Name</th>
              <th className="text-left font-medium pb-4">Email</th>
              <th className="text-left font-medium pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                <td className="py-4 text-white">Jaco-Jagur</td>
                <td className="py-4 text-white">josin@gmail.com</td>
                <td className="py-4">
                  <span className="text-red-400">Inactive</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CallRecords() {
  return (
    <div className="bg-gray-900 rounded-xl p-4 sm:p-6 overflow-x-auto">
      <h3 className="text-xl font-semibold text-white mb-6">Call Records</h3>

      <div className="min-w-[600px]">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left font-medium pb-4">Note</th>
              <th className="text-left font-medium pb-4">Time</th>
              <th className="text-left font-medium pb-4">Date</th>
              <th className="text-left font-medium pb-4">Records</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {[...Array(4)].map((_, i) => (
              <tr key={i}>
                <td className="py-4 text-white">Jaco-Jagur Jac...</td>
                <td className="py-4 text-white">34 min</td>
                <td className="py-4 text-white">2/2024</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 rounded-full bg-indigo-500 text-white">
                      <Play size={16} />
                    </button>
                    <Waveform size={100} className="text-indigo-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-4 sm:p-8">
      <CustomerHeader />
      <CustomerInfo />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <BillingHistory />
          <Appointments />
        </div>
        <div>
          <AgentsManagement />
          <CallRecords />
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
