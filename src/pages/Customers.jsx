import React, { useState, useMemo } from "react";
import { Search, Plus, MoreVertical, Upload } from "lucide-react";

const mockCustomers = [
  {
    id: "1",
    fullName: "James Brown",
    email: "jamesbrown@gmail.com",
    companyName: "Jaco - Jaguar Corporation",
    plan: "Ignite",
    agents: 600,
    status: "Active",
  },
  {
    id: "2",
    fullName: "James Brown",
    email: "curtis.weaver@example.com",
    companyName: "Chico - Charlie Corporation",
    plan: "Propel",
    agents: 740,
    status: "Active",
  },
  {
    id: "3",
    fullName: "James Brown",
    email: "felicia.reid@example.com",
    companyName: "Apex - Apex Enterprise",
    plan: "Ignite",
    agents: 583,
    status: "Active",
  },
  {
    id: "4",
    fullName: "James Brown",
    email: "tim.jennings@example.com",
    companyName: "Ome - Omega Corporation",
    plan: "Propel",
    agents: 798,
    status: "Active",
  },
  {
    id: "5",
    fullName: "James Brown",
    email: "debbie.baker@example.com",
    companyName: "VG - Van Group",
    plan: "Ignite",
    agents: 196,
    status: "Active",
  },
  {
    id: "6",
    fullName: "James Brown",
    email: "sara.cruz@example.com",
    companyName: "Echo - Echo Corporation",
    plan: "Ignite",
    agents: 185,
    status: "Active",
  },
  {
    id: "7",
    fullName: "James Brown",
    email: "alma.lawson@example.com",
    companyName: "Base - Base Corporation",
    plan: "Ignite",
    agents: 453,
    status: "Active",
  },
  {
    id: "8",
    fullName: "James Brown",
    email: "tanya.hill@example.com",
    companyName: "Beco - Beta Corporation",
    plan: "Ignite",
    agents: 984,
    status: "Active",
  },
  {
    id: "9",
    fullName: "James Brown",
    email: "bill.saunders@example.com",
    companyName: "Gen - General Enterprise",
    plan: "Ignite",
    agents: 877,
    status: "Active",
  },
  {
    id: "10",
    fullName: "James Brown",
    email: "jessica.hanson@example.com",
    companyName: "UKco - United Kingdom Co.",
    plan: "Ignite",
    agents: 883,
    status: "Active",
  },
];

function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers] = useState(mockCustomers);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return customers;

    return customers.filter(
      (customer) =>
        customer.fullName.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.companyName.toLowerCase().includes(query) ||
        customer.plan.toLowerCase().includes(query) ||
        customer.status.toLowerCase().includes(query) ||
        customer.agents.toString().includes(query)
    );
  }, [customers, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-200/30 rounded-xl dark:bg-gray-800 dark:border-gray-800 text-blue-500 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Customers</h1>
          <p className="text-gray-700 text-sm">Display all the customers.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-violet-600 text-white hover:bg-violet-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
        >
          <Plus size={18} />
          Create Customer
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[240px] bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 pl-10 pr-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:border-violet-600 text-sm"
          />
        </div>
        <button className="dark:bg-[#1E1E1E] bg-gray-100 px-4 py-2 rounded-lg border border-gray-800 text-sm">
          Filter
        </button>
      </div>

      {/* Table */}
      <div className=" rounded-lg border bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-700 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded bg-gray-800 border-gray-700"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Full Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Email Address
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Company Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">Plan</th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Number of Agents
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-800 hover:bg-gray-900/30"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="rounded bg-gray-200 border-gray-700"
                  />
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-900 rounded-full flex items-center justify-center text-sm">
                    JB
                  </div>
                  <span className="text-sm">{customer.fullName}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-400">
                  {customer.email}
                </td>
                <td className="px-4 py-3 text-sm">{customer.companyName}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1 text-sm">
                    <span className="text-amber-400">⚡</span> {customer.plan}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{customer.agents}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-900/30 text-green-800 rounded-full text-xs">
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="hover:bg-gray-700 p-1 rounded">
                    <MoreVertical size={18} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-gray-400">Page 2 of 16</span>
        <div className="flex gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-400">
            «
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-400">
            ‹
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                page === 2
                  ? "bg-violet-600 text-white"
                  : "bg-gray-100 dark:bg-gray-900 dark:border-gray-800 text-blue-300"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="w-8 h-8 flex items-center justify-center  text-gray-400">
            ...
          </span>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-900 dark:border-gray-800 text-blue-400">
            16
          </button>
          <button className="w-8 h-8 flex items-center justify-center roundedbg-gray-100 dark:bg-gray-900 dark:border-gray-800 text-blue-400">
            ›
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-900 dark:border-gray-800 text-blue-400">
            »
          </button>
        </div>
      </div>

      {/* Create Customer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 p-6 rounded-lg w-[500px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Create New Customer</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm">Upload Image</p>
                <div className="border-2 border-dashed border-gray-800 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Upload className="text-gray-400" size={24} />
                  </div>
                  <p className="text-sm text-gray-400">Upload New Picture</p>
                  <p className="text-xs text-gray-500">
                    Image must be under 40 MB
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600"
                    placeholder="Thomas Wilson"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600"
                    placeholder="thomaswilson@gmail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Company Name</label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600"
                    placeholder="Apple"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Plan</label>
                  <select className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600 appearance-none">
                    <option>Propel</option>
                    <option>Ignite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Status</label>
                <select className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600 appearance-none">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">City</label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">State</label>
                  <select className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600 appearance-none">
                    <option>UK</option>
                    <option>US</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Zip code</label>
                  <input
                    type="text"
                    className="w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-400 rounded border border-gray-800 px-3 py-2 text-sm focus:outline-none focus:border-violet-600"
                    placeholder="30000"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded text-sm hover:bg-gray-600 bg-gray-500 text-white"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded bg-violet-600 hover:bg-violet-700 text-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;
