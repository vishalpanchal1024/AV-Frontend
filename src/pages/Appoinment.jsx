import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const appointments = [
  {
    id: "43178",
    companyName: "Gen - General Enterprise",
    agentName: "Kappa - Kappa Corporation",
    leadName: "Outbound",
    appointmentDate: "May 12, 2019",
    appointmentTime: "05:14 pm",
    leadAddress: "London",
    leadCity: "New York",
    leadState: "UK",
    appointmentDateTime: "2/2/2024",
  },
  {
    id: "97174",
    companyName: "Mu - Mu Group",
    agentName: "Zeta - Zeta Enterprise",
    leadName: "Nguyen, Shane",
    appointmentDate: "May 29, 2017",
    appointmentTime: "06:41 pm",
  },
  {
    id: "43756",
    companyName: "Ome - Omega Corporation",
    agentName: "Apex - Apex Enterprise",
    leadName: "Miles, Esther",
    appointmentDate: "August 7, 2017",
    appointmentTime: "03:48 am",
  },
  {
    id: "97174",
    companyName: "Tech - Technologies",
    agentName: "Mu - Mu Group",
    leadName: "Flores, Juanita",
    appointmentDate: "May 6, 2012",
    appointmentTime: "11:49 pm",
  },
  {
    id: "22739",
    companyName: "Base - Base Corp",
    agentName: "Ind - Indian Corp",
    leadName: "Black, Marvin",
    appointmentDate: "October 24, 2018",
    appointmentTime: "05:49 pm",
  },
  {
    id: "39635",
    companyName: "Life - Life Corporation",
    agentName: "Gen - General Enterprise",
    leadName: "Henry, Arthur",
    appointmentDate: "February 11, 2014",
    appointmentTime: "07:40 am",
  },
  {
    id: "43756",
    companyName: "Kappa - Kappa Corp",
    agentName: "Base - Base Corp",
    leadName: "Henry, Arthur",
    appointmentDate: "September 9, 2013",
    appointmentTime: "01:55 pm",
  },
  {
    id: "39635",
    companyName: "Yates - Yates Enterprise",
    agentName: "Alpha - Alpha Enterprise",
    leadName: "Cooper, Kristin",
    appointmentDate: "March 6, 2018",
    appointmentTime: "01:34 pm",
  },
  {
    id: "43178",
    companyName: "VG - Van Group",
    agentName: "Beco - Beta Corp",
    leadName: "Henry, Arthur",
    appointmentDate: "November 7, 2017",
    appointmentTime: "07:59 pm",
  },
  {
    id: "39635",
    companyName: "Nation - National",
    agentName: "Nation - National",
    leadName: "Cooper, Kristin",
    appointmentDate: "July 14, 2015",
    appointmentTime: "10:41 pm",
  },
  {
    id: "70668",
    companyName: "Ind - Indian Corp",
    agentName: "Delta - Delta Corp",
    leadName: "Nguyen, Shane",
    appointmentDate: "November 28, 2015",
    appointmentTime: "07:13 pm",
  },
];

function Appointment() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto">
        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 rounded-md border border-gray-700/50 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-md border border-gray-700/50">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-md border border-gray-700/50">
              Sort by
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Table Section */}
          <div className="flex-1 bg-gray-800/50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      className="rounded bg-gray-700/50 border-gray-600"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    #ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Agent Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Lead Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Appt Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Appt Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="hover:bg-gray-700/30 cursor-pointer"
                    onClick={() => setSelectedAppointment(appointment)}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="rounded bg-gray-700/50 border-gray-600"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm">{appointment.id}</td>
                    <td className="px-6 py-4 text-sm">
                      {appointment.companyName}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {appointment.agentName}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {appointment.leadName}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {appointment.appointmentDate}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {appointment.appointmentTime}
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-4 py-1 bg-gray-700/50 rounded-md text-sm hover:bg-gray-600">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-700/50">
              <div className="text-sm text-gray-400">
                Page {currentPage} of 16
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-gray-700/50">
                  <ChevronsLeft className="h-4 w-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-700/50">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="px-3 py-1 rounded bg-gray-700/50">1</button>
                <button className="px-3 py-1 rounded bg-blue-500">2</button>
                <button className="px-3 py-1 rounded bg-gray-700/50">3</button>
                <button className="px-3 py-1 rounded bg-gray-700/50">4</button>
                <button className="px-3 py-1 rounded bg-gray-700/50">5</button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 rounded bg-gray-700/50">16</button>
                <button className="p-1 rounded hover:bg-gray-700/50">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-700/50">
                  <ChevronsRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">10 / page</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Details Panel */}
          {selectedAppointment && (
            <div className="w-full lg:w-96 bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <h2 className="text-sm font-medium">Appointment Details</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Appointment Reminder</span>
                  <div className="w-12 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedAppointment.companyName}
                  </h3>
                  <p className="text-sm text-gray-400">
                    ID: {selectedAppointment.id}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Agent Name</p>
                    <p className="text-sm">{selectedAppointment.agentName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Lead Name</p>
                    <p className="text-sm">{selectedAppointment.leadName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Lead Address</p>
                    <p className="text-sm">
                      {selectedAppointment.leadAddress || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Lead City</p>
                    <p className="text-sm">
                      {selectedAppointment.leadCity || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Lead State</p>
                    <p className="text-sm">
                      {selectedAppointment.leadState || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Appointment Date
                    </p>
                    <p className="text-sm">
                      {selectedAppointment.appointmentDateTime ||
                        selectedAppointment.appointmentDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Appointment Time
                    </p>
                    <p className="text-sm">
                      {selectedAppointment.appointmentTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Integration</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-500 rounded"></div>
                      <span className="text-sm">GoHighLevel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
