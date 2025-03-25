import React, { useState, useMemo } from "react";
import {
  Search,
  ArrowUpDown,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Box, Globe, Wallet } from "lucide-react";

function SystemHealthOverView() {
  const services = [
    {
      name: "Google",
      icon: <Globe className="w-5 h-5" />,
      uptime: 100,
      latency: "100%",
      status: "Operational",
    },
    {
      name: "OpenAI",
      icon: <Box className="w-5 h-5" />,
      uptime: 100,
      latency: "10 minutes",
      status: "Operational",
    },
    {
      name: "DeepGram",
      icon: <Box className="w-5 h-5" />,
      uptime: 88,
      latency: "60 minutes",
      status: "Operational",
    },
    {
      name: "DeepGram",
      icon: <Box className="w-5 h-5" />,
      uptime: 88,
      latency: "10 minutes",
      status: "Operational",
    },
    {
      name: "NMI Payments",
      icon: <Wallet className="w-5 h-5" />,
      uptime: 100,
      latency: "30 minutes",
      status: "Operational",
    },
    {
      name: "NMI Payments",
      icon: <Wallet className="w-5 h-5" />,
      uptime: 100,
      latency: "60 minutes",
      status: "Operational",
    },
    {
      name: "Telnyx",
      icon: <Box className="w-5 h-5" />,
      uptime: 98,
      latency: "30 minutes",
      status: "Minor Issues",
    },
    {
      name: "Telnyx",
      icon: <Box className="w-5 h-5" />,
      uptime: 98,
      latency: "10 minutes",
      status: "Minor Issues",
    },
    {
      name: "Google",
      icon: <Globe className="w-5 h-5" />,
      uptime: 100,
      latency: "45 minutes",
      status: "Minor Issues",
    },
    {
      name: "Google",
      icon: <Globe className="w-5 h-5" />,
      uptime: 100,
      latency: "45 minutes",
      status: "Minor Issues",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return "text-green-500 bg-green-500/10";
      case "minor issues":
        return "text-red-400 bg-red-400/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const filteredAndSortedServices = useMemo(() => {
    let result = [...services];

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (service) =>
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc"
            ? aValue - bValue
            : bValue - aValue;
        }

        return 0;
      });
    }

    return result;
  }, [services, searchQuery, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedServices.length / itemsPerPage);
  const currentPageData = filteredAndSortedServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction:
        current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">System Health Overview</h1>
            <p className="text-gray-400 text-sm">
              Display all the system health overview
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Last updated 3 hours ago</span>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="bg-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Sort by</span>
            <button
              onClick={() => handleSort("status")}
              className="bg-gray-800 px-4 py-2 rounded-md text-sm flex items-center gap-2"
            >
              Status <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th
                  className="text-left py-4 px-6 text-gray-400 font-medium cursor-pointer hover:text-gray-200"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center gap-2">
                    Service Name
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
                <th
                  className="text-left py-4 px-6 text-gray-400 font-medium cursor-pointer hover:text-gray-200"
                  onClick={() => handleSort("uptime")}
                >
                  <div className="flex items-center gap-2">
                    Uptime
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
                <th
                  className="text-left py-4 px-6 text-gray-400 font-medium cursor-pointer hover:text-gray-200"
                  onClick={() => handleSort("latency")}
                >
                  <div className="flex items-center gap-2">
                    Latency
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
                <th
                  className="text-left py-4 px-6 text-gray-400 font-medium cursor-pointer hover:text-gray-200"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center gap-2">
                    Status
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((service, index) => (
                <tr key={index} className="border-b border-gray-700/50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span>{service.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">{service.uptime}%</td>
                  <td className="py-4 px-6">{service.latency}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                        service.status
                      )}`}
                    >
                      {service.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
            >
              <ChevronFirst className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm ${
                  currentPage === page ? "bg-gray-700" : "hover:bg-gray-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 hover:bg-gray-800 rounded-lg disabled:opacity-50"
            >
              <ChevronLast className="w-4 h-4" />
            </button>
          </div>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="bg-gray-800 rounded-md px-3 py-2 text-sm"
          >
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
            <option value={50}>50 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SystemHealthOverView;
