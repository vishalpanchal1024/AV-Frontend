import React, { useState } from "react";
import {
  LineChart,
  Activity,
  Users,
  Phone,
  Calendar,
  PhoneCall,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { PieChart, Pie, Cell, Legend } from "recharts";

function HomePage() {
  const data = [
    { name: "2-6", inbound: 4000, outbound: 2400 },
    { name: "6-12", inbound: 3000, outbound: 1398 },
    { name: "12-18", inbound: 2000, outbound: 9800 },
    { name: "18-20", inbound: 2780, outbound: 3908 },
    { name: "20-28", inbound: 1890, outbound: 4800 },
    { name: "28-30", inbound: 2390, outbound: 3800 },
  ];

  const CallMetrics = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
        <h3 className="text-sm text-gray-400 mb-4">Call Distribution</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F3F4F6",
                }}
              />
              <Bar dataKey="inbound" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="outbound" fill="#A78BFA" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const data2 = [
    { name: "Ignite", value: 80 },
    { name: "Propel", value: 80 },
    { name: "Ascend", value: 85 },
  ];

  const COLORS = ["#8B5CF6", "#A78BFA", "#C4B5FD"];

  const DonutChart = () => {
    return (
      <div className="h-[300px] bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#33FFFF",
                border: "none",
                borderRadius: "8px",
                color: "#F3F4F6",
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              content={({ payload }) => (
                <ul className="flex justify-center gap-6">
                  {payload?.map((entry, index) => (
                    <li
                      key={`item-${index}`}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm text-gray-400">
                        {entry.value}
                      </span>
                      <span className="text-sm text-purple-400">$80.00</span>
                    </li>
                  ))}
                </ul>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const HeatMap = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const getRandomActivity = () => Math.random();

    return (
      <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
        <h3 className="text-sm text-gray-400 mb-4">Peak Usage Time</h3>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[auto_repeat(24,1fr)] gap-1">
              <div className="h-6" /> {/* Empty corner */}
              {hours.map((hour) => (
                <div key={hour} className="text-xs text-gray-500 text-center">
                  {hour}
                </div>
              ))}
              {days.map((day) => (
                <React.Fragment key={day}>
                  <div className="text-xs text-gray-500 pr-2 flex items-center">
                    {day}
                  </div>
                  {hours.map((hour) => {
                    const activity = getRandomActivity();
                    return (
                      <div
                        key={`${day}-${hour}`}
                        className="h-6 rounded-sm"
                        style={{
                          backgroundColor: `rgba(139, 92, 246, ${activity})`,
                        }}
                      />
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const data3 = [
    {
      name: "2-6",
      Highrise: 1000,
      "Housecall Pro": 4000,
      Make: 4000,
      ServiceTitan: 4000,
      "Sales Force": 4000,
      "Google Calendar": 4000,
    },
    {
      name: "8-12",
      Highrise: 1500,
      "Housecall Pro": 3500,
      Make: 3800,
      ServiceTitan: 4200,
      "Sales Force": 3800,
      "Google Calendar": 4100,
    },
    {
      name: "12-16",
      Highrise: 2000,
      "Housecall Pro": 4500,
      Make: 3600,
      ServiceTitan: 3800,
      "Sales Force": 4200,
      "Google Calendar": 3900,
    },
  ];

  const COLORS1 = [
    "#8B5CF6",
    "#A78BFA",
    "#C4B5FD",
    "#DDD6FE",
    "#EDE9FE",
    "#F5F3FF",
  ];

  const IntegrationUsage = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
        <h3 className="text-sm text-gray-400 mb-4">Integration Usage</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data3}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F3F4F6",
                }}
              />
              <Legend />
              {Object.keys(data[0])
                .filter((key) => key !== "name")
                .map((key, index) => (
                  <Bar
                    key={key}
                    dataKey={key}
                    fill={COLORS1[index % COLORS1.length]}
                    stackId="a"
                  />
                ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const LineGraph = () => {
    return (
      <div className="h-48 relative bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300">
        {/* This is a placeholder for the actual graph implementation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500">Graph Placeholder</span>
        </div>
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q25,45 50,55 T100,50"
            fill="none"
            stroke="rgb(167, 139, 250)"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  };

  const OverviewCard = ({ icon, title, value, change, isPositive }) => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
          <h3 className="text-semibold   dark:border-gray-800 dark:text-white text-black">
            {title}
          </h3>
        </div>
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-semibold ">{value}</p>
          <span
            className={`text-sm px-2 py-1 rounded-full ${
              isPositive
                ? "text-green-400 bg-green-400/10"
                : "text-red-400 bg-red-400/10"
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    );
  };

  const generateData = () => {
    const data = [];
    const now = new Date();
    const points = 12;

    for (let i = 0; i < points; i++) {
      const date = new Date(now);
      date.setHours(now.getHours() - i * 2);

      data.unshift({
        time: date,
        value: Math.floor(Math.random() * 5000) + 7000,
      });
    }

    return data;
  };

  const RevenueChart = () => {
    const data = generateData();

    return (
      <div className="h-[300px] w-full bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="time"
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "8px",
                color: "#F3F4F6",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const TimeFilter = ({ selected, onChange }) => {
    const options = ["daily", "monthly", "quarterly", "yearly"];

    return (
      <div className="flex space-x-2 text-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-lg p-1">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-4 py-1.5 rounded-md transition-colors ${
              selected === option
                ? "bg-purple-500/20 text-purple-400"
                : "text-gray-500 hover:bg-gray-700/50"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  };

  const UsageStats = ({ timeRange }) => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6 space-y-6">
        <div>
          <h3 className="text-sm text-gray-400 mb-2">Call Success Rate</h3>
          <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div className="h-full w-[80%] bg-green-400 rounded-full" />
          </div>
          <div className="mt-2 flex justify-between text-xs">
            <span className="text-gray-400">80%</span>
            <span className="text-green-400">+12% from last {timeRange}</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-gray-400 mb-2">Average Call Duration</h3>
          <p className="text-2xl font-semibold">
            29,000
            <span className="text-sm text-gray-400 ml-1">Min</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={16} className="text-purple-400" />
              <span>12,000</span>
            </div>
            <span className="text-xs text-gray-500 mt-1 block">
              Inbound Calls
            </span>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <PhoneCall size={16} className="text-purple-400" />
              <span>3,000</span>
            </div>
            <span className="text-xs text-gray-500 mt-1 block">
              Outbound Calls
            </span>
          </div>
        </div>
      </div>
    );
  };

  const users = [
    {
      name: "James Brown",
      email: "jamesbrown@gmail.com",
      progress: 100,
      lastActive: "14 min ago",
    },
    {
      name: "Alex Smith",
      email: "alexsmith@gmail.com",
      progress: 85,
      lastActive: "34 min ago",
    },
    {
      name: "Jordan Rix",
      email: "jordanrix@gmail.com",
      progress: 75,
      lastActive: "40 min ago",
    },
  ];

  const UserList = () => {
    return (
      <div className="space-y-6 bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300">
        <div className="flex justify-between items-center">
          <h3 className="text-sm text-gray-400">Most Active Users</h3>
          <div className="flex gap-4">
            <button className="text-sm text-purple-400">All</button>
            <button className="text-sm text-gray-400">Top Performing</button>
            <button className="text-sm text-gray-400">Top Risk</button>
          </div>
        </div>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-500 rounded-full flex items-center justify-center  font-medium">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {user.lastActive}
                  </span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${user.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const [timeRange, setTimeRange] = useState("daily");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:border-gray-800 text-blue-500 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Overview Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <OverviewCard
              icon={<Users className="w-5 h-5 text-purple-400" />}
              title="Total Active Customers"
              value="24,000"
              change="+15%"
              isPositive={true}
            />
            <OverviewCard
              icon={<Users className="w-5 h-5 text-purple-400" />}
              title="Total Onboarded Customers"
              value="5,000"
              change="-30%"
              isPositive={false}
            />
            <OverviewCard
              icon={<Users className="w-5 h-5 text-purple-400" />}
              title="Customer Churn Rate"
              value="45%"
              change="+5%"
              isPositive={false}
            />
          </div>
        </div>

        {/* Revenue & Financial */}
        <div className="space-y-4">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Revenue & Financial</h2>
            </div>
            <TimeFilter selected={timeRange} onChange={setTimeRange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Revenue</span>
                <span className="text-purple-400 font-semibold">$12,000</span>
              </div>
              <RevenueChart timeRange={timeRange} />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Financial Distribution</span>
              </div>
              <DonutChart />
            </div>
          </div>
        </div>

        {/* Platform Usage */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Platform Usage</h2>
            </div>
            <TimeFilter selected={timeRange} onChange={setTimeRange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <UsageStats timeRange={timeRange} />
              <CallMetrics timeRange={timeRange} />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <HeatMap />
              <IntegrationUsage />
            </div>
          </div>
        </div>

        {/* User Engagement */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <h2 className="text-xl font-semibold">User Engagement</h2>
            </div>
            <TimeFilter selected={timeRange} onChange={setTimeRange} />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 dark:border-gray-800 text-blue-300 rounded-xl p-6">
            <UserList timeRange={timeRange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
