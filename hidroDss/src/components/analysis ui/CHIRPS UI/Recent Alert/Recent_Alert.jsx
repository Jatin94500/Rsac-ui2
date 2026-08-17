import React from "react";

const AlertTriangle = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm1 16h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
);

const DropletCircle = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-16.5l3.5 3.5c1.37 1.37 1.62 3.41.74 5.04-.88 1.63-2.71 2.43-4.24 2.43-1.53 0-3.36-.8-4.24-2.43-.88-1.63-.63-3.67.74-5.04L12 5.5z" />
    </svg>
);

export default function Recent_Alert() {
    const alerts = [
        {
            id: 1,
            type: "critical",
            title: "High Flood Risk",
            location: "Gorakhpur District",
            time: "10 Jun 2025, 11:15 AM",
        },
        {
            id: 2,
            type: "warning",
            title: "Heavy Rainfall Warning",
            location: "Sitapur District",
            time: "10 Jun 2025, 10:45 AM",
        },
        {
            id: 3,
            type: "moderate",
            title: "Moderate Drought",
            location: "Lakhimpur Kheri District",
            time: "10 Jun 2025, 09:30 AM",
        },
        {
            id: 4,
            type: "info",
            title: "Water Level Rising",
            location: "Sharda River",
            time: "10 Jun 2025, 08:20 AM",
        }
    ];

    const typeConfig = {
        critical: {
            iconColor: "text-red-600",
            titleColor: "text-red-600",
            Icon: AlertTriangle
        },
        warning: {
            iconColor: "text-orange-500",
            titleColor: "text-orange-500",
            Icon: AlertTriangle
        },
        moderate: {
            iconColor: "text-yellow-400",
            titleColor: "text-orange-500",
            Icon: AlertTriangle
        },
        info: {
            iconColor: "text-blue-600",
            titleColor: "text-blue-700",
            Icon: DropletCircle
        }
    };

    return (
        <div className="w-full h-full flex flex-col font-sans p-2">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-transparent">
                <h3 className="text-xl font-bold text-blue-900">
                    Recent Alerts
                </h3>
                <button
                    className="text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                    View All
                </button>
            </div>

            {/* List */}
            <div className="flex-1 flex flex-col overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {alerts.map((alert, index) => {
                    const config = typeConfig[alert.type];
                    const IconComponent = config.Icon;

                    return (
                        <div
                            key={alert.id}
                            className={`flex items-center justify-between py-3.5 ${index !== alerts.length - 1 ? 'border-b border-slate-100' : ''}`}
                        >
                            {/* Left: Icon and Details */}
                            <div className="flex items-center gap-3.5">
                                <IconComponent className={`w-10 h-10 ${config.iconColor}`} />
                                <div className="flex flex-col space-y-0.5">
                                    <span className={`text-lg font-bold leading-tight ${config.titleColor}`}>
                                        {alert.title}
                                    </span>
                                    <span className="text-base text-slate-500 font-medium">
                                        {alert.location}
                                    </span>
                                </div>
                            </div>

                            {/* Right: Date */}
                            <div className="text-sm text-slate-500 font-medium text-right whitespace-nowrap">
                                {alert.time}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}