import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Search, Check, MapPin } from 'lucide-react';
import './TimeSeries.css';
import React from 'react';
import Chart from 'react-apexcharts';

const upDistricts = [
    { label: "Agra", value: "agra" },
    { label: "Aligarh", value: "aligarh" },
    { label: "Ambedkar Nagar", value: "ambedkar_nagar" },
    { label: "Amethi", value: "amethi" },
    { label: "Amroha", value: "amroha" },
    { label: "Auraiya", value: "auraiya" },
    { label: "Ayodhya", value: "ayodhya" },
    { label: "Azamgarh", value: "azamgarh" },
    { label: "Baghpat", value: "baghpat" },
    { label: "Bahraich", value: "bahraich" },
    { label: "Ballia", value: "ballia" },
    { label: "Balrampur", value: "balrampur" },
    { label: "Banda", value: "banda" },
    { label: "Barabanki", value: "barabanki" },
    { label: "Bareilly", value: "bareilly" },
    { label: "Basti", value: "basti" },
    { label: "Bhadohi", value: "bhadohi" },
    { label: "Bijnor", value: "bijnor" },
    { label: "Budaun", value: "budaun" },
    { label: "Bulandshahr", value: "bulandshahr" },
    { label: "Chandauli", value: "chandauli" },
    { label: "Chitrakoot", value: "chitrakoot" },
    { label: "Deoria", value: "deoria" },
    { label: "Etah", value: "etah" },
    { label: "Etawah", value: "etawah" },
    { label: "Farrukhabad", value: "farrukhabad" },
    { label: "Fatehpur", value: "fatehpur" },
    { label: "Firozabad", value: "firozabad" },
    { label: "Gautam Buddha Nagar", value: "gautam_buddha_nagar" },
    { label: "Ghaziabad", value: "ghaziabad" },
    { label: "Ghazipur", value: "ghazipur" },
    { label: "Gonda", value: "gonda" },
    { label: "Gorakhpur", value: "gorakhpur" },
    { label: "Hamirpur", value: "hamirpur" },
    { label: "Hapur", value: "hapur" },
    { label: "Hardoi", value: "hardoi" },
    { label: "Hathras", value: "hathras" },
    { label: "Jalaun", value: "jalaun" },
    { label: "Jaunpur", value: "jaunpur" },
    { label: "Jhansi", value: "jhansi" },
    { label: "Kannauj", value: "kannauj" },
    { label: "Kanpur Dehat", value: "kanpur_dehat" },
    { label: "Kanpur Nagar", value: "kanpur_nagar" },
    { label: "Kasganj", value: "kasganj" },
    { label: "Kaushambi", value: "kaushambi" },
    { label: "Kheri", value: "kheri" },
    { label: "Kushinagar", value: "kushinagar" },
    { label: "Lalitpur", value: "lalitpur" },
    { label: "Lucknow", value: "lucknow" },
    { label: "Maharajganj", value: "maharajganj" },
    { label: "Mahoba", value: "mahoba" },
    { label: "Mainpuri", value: "mainpuri" },
    { label: "Mathura", value: "mathura" },
    { label: "Mau", value: "mau" },
    { label: "Meerut", value: "meerut" },
    { label: "Mirzapur", value: "mirzapur" },
    { label: "Moradabad", value: "moradabad" },
    { label: "Muzaffarnagar", value: "muzaffarnagar" },
    { label: "Pilibhit", value: "pilibhit" },
    { label: "Pratapgarh", value: "pratapgarh" },
    { label: "Prayagraj", value: "prayagraj" },
    { label: "Raebareli", value: "raebareli" },
    { label: "Rampur", value: "rampur" },
    { label: "Saharanpur", value: "saharanpur" },
    { label: "Sambhal", value: "sambhal" },
    { label: "Sant Kabir Nagar", value: "sant_kabir_nagar" },
    { label: "Shahjahanpur", value: "shahjahanpur" },
    { label: "Shamli", value: "shamli" },
    { label: "Shravasti", value: "shravasti" },
    { label: "Siddharthnagar", value: "siddharthnagar" },
    { label: "Sitapur", value: "sitapur" },
    { label: "Sonbhadra", value: "sonbhadra" },
    { label: "Sultanpur", value: "sultanpur" },
    { label: "Unnao", value: "unnao" },
    { label: "Varanasi", value: "varanasi" },
];

function TimeSeries() {
    const [selectedDistrict, setSelectedDistrict] = useState("lucknow");
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);
    const listRef = useRef(null);

    const [chartData, setChartData] = useState({
        series: [
            { name: 'Group A', data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65] },
            { name: 'Group B', data: [13, 23, 20, 8, 13, 27, 33, 12, 54, 22, 12, 10] },
            { name: 'Group C', data: [11, 17, 15, 15, 21, 14, 15, 13, 21, 41, 23, 11] }
        ],
        options: {
            chart: {
                type: "bar",
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 4,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            fill: {
                opacity: 1
            },
            colors: ['#3b82f6', '#ef4444', '#f59e0b']
        }
    });
    const selectedLabel = upDistricts.find(d => d.value === selectedDistrict)?.label || 'Select District';

    const filteredDistricts = useMemo(() => {
        if (!searchQuery.trim()) return upDistricts;
        const q = searchQuery.toLowerCase();
        return upDistricts.filter(d => d.label.toLowerCase().includes(q));
    }, [searchQuery]);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
                setSearchQuery("");
                setHighlightedIndex(-1);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);



        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Focus search when opened
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    // Scroll highlighted item into view
    useEffect(() => {
        if (highlightedIndex >= 0 && listRef.current) {
            const items = listRef.current.querySelectorAll('[data-dropdown-item]');
            if (items[highlightedIndex]) {
                items[highlightedIndex].scrollIntoView({ block: 'nearest' });
            }
        }
    }, [highlightedIndex]);

    function handleToggle() {
        setIsOpen(prev => !prev);
        if (isOpen) {
            setSearchQuery("");
            setHighlightedIndex(-1);
        }
    }

    function handleSelect(value) {
        setSelectedDistrict(value);
        setIsOpen(false);
        setSearchQuery("");
        setHighlightedIndex(-1);
    }

    function handleKeyDown(e) {
        if (!isOpen) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                setIsOpen(true);
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prev =>
                    prev < filteredDistricts.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prev =>
                    prev > 0 ? prev - 1 : filteredDistricts.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (highlightedIndex >= 0 && filteredDistricts[highlightedIndex]) {
                    handleSelect(filteredDistricts[highlightedIndex].value);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsOpen(false);
                setSearchQuery("");
                setHighlightedIndex(-1);
                break;
        }
    }

    return (
        <div className="ts-wrapper h-full w-full !p-0">
            <div className="ts-card h-full w-full flex flex-col justify-between">
                {/* Header Row */}
                <div className="ts-header">
                    <div className="ts-title-group">
                        <h2 className="ts-title text-lg text-blue-700 font-bold">Time Series — Uttar Pradesh</h2>
                        <p className="ts-subtitle text-xs text-gray-500 font-medium mt-1">Monthly rainfall distribution by district</p>
                    </div>

                    {/* Dropdown */}
                    <div className="ts-dropdown-area" ref={dropdownRef} onKeyDown={handleKeyDown}>
                        <label className="ts-dropdown-label">
                            <MapPin size={14} />
                            District
                        </label>
                        <button
                            type="button"
                            className={`ts-dropdown-trigger ${isOpen ? 'ts-dropdown-trigger--open' : ''}`}
                            onClick={handleToggle}
                            aria-haspopup="listbox"
                            aria-expanded={isOpen}
                        >
                            <span className="ts-dropdown-trigger-text">{selectedLabel}</span>
                            <ChevronDown
                                size={16}
                                className={`ts-dropdown-chevron ${isOpen ? 'ts-dropdown-chevron--open' : ''}`}
                            />
                        </button>

                        {/* Dropdown Panel */}
                        {isOpen && (
                            <div className="ts-dropdown-panel">
                                {/* Search */}
                                <div className="ts-dropdown-search-wrap">
                                    <Search size={14} className="ts-dropdown-search-icon" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        className="ts-dropdown-search"
                                        placeholder="Search districts..."
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setHighlightedIndex(0);
                                        }}
                                    />
                                </div>

                                {/* Options List */}
                                <ul className="ts-dropdown-list" ref={listRef} role="listbox">
                                    {filteredDistricts.length === 0 ? (
                                        <li className="ts-dropdown-empty">
                                            No districts found
                                        </li>
                                    ) : (
                                        filteredDistricts.map((d, index) => {
                                            const isSelected = selectedDistrict === d.value;
                                            const isHighlighted = highlightedIndex === index;
                                            return (
                                                <li
                                                    key={d.value}
                                                    data-dropdown-item
                                                    role="option"
                                                    aria-selected={isSelected}
                                                    className={`ts-dropdown-item ${isSelected ? 'ts-dropdown-item--selected' : ''} ${isHighlighted ? 'ts-dropdown-item--highlighted' : ''}`}
                                                    onClick={() => handleSelect(d.value)}
                                                    onMouseEnter={() => setHighlightedIndex(index)}
                                                >
                                                    <span className="ts-dropdown-item-label">{d.label}</span>
                                                    {isSelected && (
                                                        <Check size={14} className="ts-dropdown-item-check" />
                                                    )}
                                                </li>
                                            );
                                        })
                                    )}
                                </ul>

                                {/* Footer count */}
                                <div className="ts-dropdown-footer">
                                    {filteredDistricts.length} of {upDistricts.length} districts
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full flex-1 min-h-0">
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="bar"
                        height="100%"
                    />
                </div>

            </div>
            {/* Dataset Summary */}

        </div>
    );
}

export default TimeSeries;
