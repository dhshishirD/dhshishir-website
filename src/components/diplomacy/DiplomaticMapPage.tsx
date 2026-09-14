import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Globe, 
  Compass, 
  Search, 
  RotateCcw, 
  ShieldCheck, 
  Radio, 
  Filter, 
  BookOpen, 
  ArrowRight, 
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { 
  STRATEGIC_LOCATIONS_DATA, 
  MARITIME_CORRIDORS 
} from '../../data/diplomaticMapData';
import type { 
  StrategicLocation, 
  LocationCategory, 
  MapTheater 
} from '../../data/diplomaticMapData';

interface DiplomaticMapPageProps {
  initialLocationId?: string | null;
  onNavigateHome?: () => void;
  onNavigateDiplomacy?: () => void;
  onNavigateDossier?: (slug: string) => void;
  onNavigateFellowship?: () => void;
}

export const DiplomaticMapPage: React.FC<DiplomaticMapPageProps> = ({
  initialLocationId,
  onNavigateHome,
  onNavigateDiplomacy,
  onNavigateDossier,
  onNavigateFellowship
}) => {
  const [selectedLocation, setSelectedLocation] = useState<StrategicLocation | null>(() => {
    if (initialLocationId) {
      return STRATEGIC_LOCATIONS_DATA.find(l => l.id === initialLocationId) || STRATEGIC_LOCATIONS_DATA[0];
    }
    return STRATEGIC_LOCATIONS_DATA[0]; // Default to Matarbari
  });

  const [selectedCategory, setSelectedCategory] = useState<LocationCategory | 'all'>('all');
  const [selectedTheater, setSelectedTheater] = useState<MapTheater | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMaritimeCorridors, setShowMaritimeCorridors] = useState(true);
  const [hoveredLocation, setHoveredLocation] = useState<StrategicLocation | null>(null);

  // Pan and Zoom Camera State
  const [scale, setScale] = useState(1.2);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -150, y: -50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Focus on initialLocationId if passed via props or URL
  useEffect(() => {
    if (initialLocationId) {
      const loc = STRATEGIC_LOCATIONS_DATA.find(l => l.id === initialLocationId);
      if (loc) {
        setSelectedLocation(loc);
        flyToLocation(loc);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Interactive Diplomatic & Geopolitical World Map | DH Shishir';
  }, [initialLocationId]);

  // Smooth Fly-to Camera animation
  const flyToLocation = (loc: StrategicLocation) => {
    const targetScale = 2.4;
    // Calculate translate offset based on 1000x600 SVG viewBox
    const targetX = -(loc.xPct * 10 - 500) * targetScale * 0.7;
    const targetY = -(loc.yPct * 6 - 300) * targetScale * 0.7;

    setScale(targetScale);
    setPosition({ x: targetX, y: targetY });
  };

  const handleSelectLocation = (loc: StrategicLocation) => {
    setSelectedLocation(loc);
    flyToLocation(loc);
  };

  // Theater quick presets
  const handleTheaterChange = (theater: MapTheater | 'all') => {
    setSelectedTheater(theater);
    if (theater === 'bay_of_bengal') {
      setScale(2.5);
      setPosition({ x: -750, y: -180 });
    } else if (theater === 'indo_pacific') {
      setScale(2.0);
      setPosition({ x: -800, y: -200 });
    } else if (theater === 'middle_east') {
      setScale(2.2);
      setPosition({ x: -450, y: -180 });
    } else if (theater === 'europe_eurasia') {
      setScale(2.2);
      setPosition({ x: -200, y: 50 });
    } else if (theater === 'americas') {
      setScale(1.8);
      setPosition({ x: 350, y: -150 });
    } else {
      setScale(1.1);
      setPosition({ x: 0, y: 0 });
    }
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.0015;
    const newScale = Math.min(Math.max(0.8, scale + delta), 4.5);
    setScale(newScale);
  };

  const handleZoomIn = () => setScale(prev => Math.min(4.5, prev + 0.4));
  const handleZoomOut = () => setScale(prev => Math.max(0.8, prev - 0.4));
  const handleResetCamera = () => {
    setScale(1.2);
    setPosition({ x: -150, y: -50 });
  };

  // Filter locations
  const filteredLocations = useMemo(() => {
    return STRATEGIC_LOCATIONS_DATA.filter(loc => {
      const matchCat = selectedCategory === 'all' || loc.category === selectedCategory;
      const matchTheater = selectedTheater === 'all' || loc.theater === selectedTheater;
      const matchSearch = 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.theaterLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.significance.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchTheater && matchSearch;
    });
  }, [selectedCategory, selectedTheater, searchQuery]);

  // Color helper for pins
  const getCategoryColor = (cat: LocationCategory) => {
    switch (cat) {
      case 'chokepoint': return { bg: 'bg-teal-700', border: 'border-teal-300', fill: '#0f766e', glow: '#14b8a6' };
      case 'flashpoint': return { bg: 'bg-rose-700', border: 'border-rose-300', fill: '#be123c', glow: '#f43f5e' };
      case 'port': return { bg: 'bg-indigo-700', border: 'border-indigo-300', fill: '#4338ca', glow: '#6366f1' };
      case 'island_base': return { bg: 'bg-emerald-700', border: 'border-emerald-300', fill: '#047857', glow: '#10b981' };
      case 'river_basin': return { bg: 'bg-cyan-700', border: 'border-cyan-300', fill: '#0e7490', glow: '#06b6d4' };
      case 'diplomatic_hq': return { bg: 'bg-amber-700', border: 'border-amber-300', fill: '#b45309', glow: '#f59e0b' };
      default: return { bg: 'bg-slate-700', border: 'border-slate-300', fill: '#334155', glow: '#64748b' };
    }
  };

  return (
    <div className="pt-20 pb-24 bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Top Header Card */}
        <div className="bg-slate-950 border border-teal-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/80 border border-teal-600 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-teal-400" /> Interactive Geopolitical Intelligence Map
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-serif-title">
              World Diplomatic, Strategic & Maritime Map
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Global cartographic command center featuring <strong className="text-teal-400">50+ critical maritime chokepoints, terrestrial flashpoints, deep-sea ports, and multilateral headquarters</strong>, evaluated through the lens of Bangladesh statecraft and sovereign diplomacy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-2 cursor-pointer"
              >
                <span>← Home</span>
              </button>
            )}
            {onNavigateDiplomacy && (
              <button
                onClick={onNavigateDiplomacy}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Strategic Dossiers</span>
              </button>
            )}
            {onNavigateFellowship && (
              <button
                onClick={onNavigateFellowship}
                className="px-4 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 border border-teal-700 text-white text-xs font-bold transition flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-teal-300" />
                <span>IR Fellowship Studio</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls & Theater Presets Bar */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl text-xs">
          
          {/* Theater Camera Switchers */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 shrink-0 mr-1">
              <Globe className="w-3.5 h-3.5 text-teal-400" /> Theaters:
            </span>
            {[
              { id: 'all', label: 'Global View' },
              { id: 'bay_of_bengal', label: 'Bay of Bengal & South Asia' },
              { id: 'indo_pacific', label: 'Indo-Pacific' },
              { id: 'middle_east', label: 'Middle East & Bab-el-Mandeb' },
              { id: 'europe_eurasia', label: 'Europe & Eurasia' },
              { id: 'americas', label: 'Americas' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => handleTheaterChange(t.id as any)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition cursor-pointer font-semibold ${
                  selectedTheater === t.id
                    ? 'bg-teal-900 text-white font-bold border border-teal-600 shadow-xs'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

                    {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full pt-2 border-t border-slate-900">
            <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-teal-400" /> Categories:
            </span>
            {[
              { id: 'all', label: 'All Types (50+)' },
              { id: 'chokepoint', label: '⚓ Chokepoints' },
              { id: 'flashpoint', label: '⚡ Flashpoints' },
              { id: 'port', label: '🚢 Deep-Sea Ports' },
              { id: 'island_base', label: '🏝️ Island Bases' },
              { id: 'river_basin', label: '🌊 River Basins' },
              { id: 'diplomatic_hq', label: '🏛️ Diplomatic HQs' }
            ].map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id as any)}
                className={`px-3 py-1 rounded-xl whitespace-nowrap transition cursor-pointer text-xs font-semibold ${
                  selectedCategory === c.id
                    ? 'bg-teal-900 text-white font-bold border border-teal-600 shadow-2xs'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search bar & Corridors Toggle */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search 50+ locations or chokepoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>

            <button
              onClick={() => setShowMaritimeCorridors(!showMaritimeCorridors)}
              className={`px-3 py-1.5 rounded-xl border font-bold transition flex items-center gap-1.5 cursor-pointer text-xs ${
                showMaritimeCorridors
                  ? 'bg-teal-950/80 text-teal-300 border-teal-600'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>SLOC Corridors</span>
            </button>
          </div>

        </div>

        {/* Main Interactive Map & Intelligence Briefing Drawer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* MAP CANVAS CONTAINER (Col span 8 on desktop) */}
          <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col h-[580px] sm:h-[650px]">
            
            {/* Map Canvas Floating Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-1.5 shadow-xl">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetCamera}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
                title="Reset Global View"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Map Legend Overlay */}
            <div className="absolute bottom-4 left-4 z-20 hidden sm:flex flex-wrap items-center gap-3 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl px-4 py-2 text-[11px] shadow-xl">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                <span className="text-slate-300">Chokepoint</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                <span className="text-slate-300">Flashpoint</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                <span className="text-slate-300">Deep-Sea Port</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">Island Base</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="text-slate-300">Diplomatic HQ</span>
              </div>
            </div>

            {/* Interactive Vector SVG Canvas */}
            <div 
              ref={svgContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              className={`w-full h-full cursor-grab ${isDragging ? 'cursor-grabbing' : ''} select-none overflow-hidden relative`}
            >
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full transition-transform duration-300 ease-out origin-center"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`
                }}
              >
                {/* Background Ocean & Grid */}
                <rect width="1000" height="600" fill="#090d16" />
                
                {/* Subtle Lat/Long Grid lines */}
                <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3">
                  <line x1="0" y1="150" x2="1000" y2="150" /> {/* Tropic of Cancer ~23.5 N */}
                  <line x1="0" y1="300" x2="1000" y2="300" /> {/* Equator */}
                  <line x1="0" y1="450" x2="1000" y2="450" /> {/* Tropic of Capricorn ~23.5 S */}
                  <line x1="250" y1="0" x2="250" y2="600" /> {/* 90 W Americas */}
                  <line x1="500" y1="0" x2="500" y2="600" /> {/* Prime Meridian */}
                  <line x1="750" y1="0" x2="750" y2="600" /> {/* 90 E Bay of Bengal */}
                </g>

                {/* Stylized World Continents Landmass Geometry */}
                <g fill="#131c2e" stroke="#1e293b" strokeWidth="0.8">
                  {/* Eurasia & Africa */}
                  <path d="M 480 120 Q 520 80 580 90 T 700 100 Q 800 120 880 160 T 920 250 Q 860 300 820 280 T 750 350 Q 720 400 680 380 T 600 450 Q 550 520 520 480 T 480 320 Q 420 260 450 180 Z" />
                  
                  {/* North America */}
                  <path d="M 120 100 Q 200 80 280 120 T 320 220 Q 280 280 240 320 T 180 260 Q 120 200 100 150 Z" />
                  
                  {/* South America */}
                  <path d="M 240 330 Q 320 360 340 420 T 300 550 Q 240 580 220 500 T 230 380 Z" />
                  
                  {/* Australia & Oceania */}
                  <path d="M 780 430 Q 860 410 900 460 T 880 530 Q 800 560 760 500 Z" />
                  
                  {/* Indian Subcontinent & Bay of Bengal Littoral Outline */}
                  <path 
                    d="M 690 260 L 755 260 L 780 330 L 740 420 L 710 330 Z" 
                    fill="#172439" 
                    stroke="#2dd4bf" 
                    strokeWidth="0.8" 
                  />
                </g>

                {/* Animated Flowing Maritime Trade Corridors (SLOCs) */}
                {showMaritimeCorridors && MARITIME_CORRIDORS.map(corridor => (
                  <g key={corridor.id}>
                    <path
                      d={corridor.pathD}
                      fill="none"
                      stroke={corridor.color}
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      strokeLinecap="round"
                      className="animate-pulse opacity-80"
                    />
                  </g>
                ))}

                {/* Location Interactive Markers */}
                {filteredLocations.map(loc => {
                  const isSelected = selectedLocation?.id === loc.id;
                  const isHovered = hoveredLocation?.id === loc.id;
                  const colors = getCategoryColor(loc.category);
                  const cx = loc.xPct * 10;
                  const cy = loc.yPct * 6;

                  return (
                    <g
                      key={loc.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectLocation(loc);
                      }}
                      onMouseEnter={() => setHoveredLocation(loc)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      className="cursor-pointer group"
                    >
                      {/* Pulsing Beacon Waves for Critical Alert or Selected Pin */}
                      {(isSelected || loc.threatLevel === 'Critical Alert') && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? "14" : "9"}
                          fill="none"
                          stroke={colors.glow}
                          strokeWidth="1.5"
                          className="animate-ping opacity-75 origin-center"
                        />
                      )}

                      {/* Outer Ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "7" : "5"}
                        fill={isSelected ? "#ffffff" : colors.fill}
                        stroke={isSelected ? colors.glow : "#090d16"}
                        strokeWidth={isSelected ? "2.5" : "1.5"}
                        className="transition-all duration-200"
                      />

                      {/* Center Pin Core */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="2.5"
                        fill={isSelected ? colors.fill : "#ffffff"}
                      />

                      {/* Pin Label (Visible on hover or selected) */}
                      {(isSelected || isHovered) && (
                        <g transform={`translate(${cx}, ${cy - 12})`}>
                          <rect
                            x="-60"
                            y="-18"
                            width="120"
                            height="18"
                            rx="6"
                            fill="#020617"
                            stroke={colors.glow}
                            strokeWidth="1"
                            opacity="0.95"
                          />
                          <text
                            x="0"
                            y="-6"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="8"
                            fontWeight="bold"
                            fontFamily="sans-serif"
                          >
                            {loc.name.length > 20 ? `${loc.name.substring(0, 18)}...` : loc.name}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* STRATEGIC INTELLIGENCE DRAWER (Col span 4 on desktop) */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 overflow-y-auto max-h-[650px]">
            {selectedLocation ? (
              <div className="space-y-4 animate-fade-in text-left">
                {/* Header Badge & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getCategoryColor(selectedLocation.category).bg} text-white ${getCategoryColor(selectedLocation.category).border}`}>
                    {selectedLocation.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {selectedLocation.lat}°N, {selectedLocation.lng}°E
                  </span>
                </div>

                {/* Location Title & Theater */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white font-serif-title">
                    {selectedLocation.name}
                  </h2>
                  <p className="text-xs text-teal-400 font-semibold mt-0.5">
                    {selectedLocation.theaterLabel} • <span className="text-rose-400 font-bold">{selectedLocation.threatLevel}</span>
                  </p>
                </div>

                {/* Strategic Significance */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Geopolitical Significance
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed bg-slate-900 p-3.5 rounded-2xl border border-slate-800">
                    {selectedLocation.significance}
                  </p>
                </div>

                {/* Bangladesh Foreign Policy Relevance */}
                <div className="p-4 bg-teal-950/40 rounded-2xl border border-teal-800/80 space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-teal-400" /> Significance for Bangladesh Statecraft
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {selectedLocation.bangladeshRelevance}
                  </p>
                </div>

                {/* Historical Context & Treaties */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" /> Historical Context & Legal Treaties
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-xl border border-slate-800">
                    {selectedLocation.historicalContext}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedLocation.keyTreaties.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-900 text-teal-300 px-2.5 py-0.5 rounded-lg border border-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Great Power Postures */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Great Power Strategic Postures:
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {selectedLocation.greatPowerDynamics.us && (
                      <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                        <strong className="text-blue-400">🇺🇸 United States: </strong>
                        <span className="text-slate-300">{selectedLocation.greatPowerDynamics.us}</span>
                      </div>
                    )}
                    {selectedLocation.greatPowerDynamics.china && (
                      <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                        <strong className="text-red-400">🇨🇳 China: </strong>
                        <span className="text-slate-300">{selectedLocation.greatPowerDynamics.china}</span>
                      </div>
                    )}
                    {selectedLocation.greatPowerDynamics.india && (
                      <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                        <strong className="text-amber-400">🇮🇳 India: </strong>
                        <span className="text-slate-300">{selectedLocation.greatPowerDynamics.india}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Related Dossiers Link */}
                {selectedLocation.relatedDossierSlugs && selectedLocation.relatedDossierSlugs.length > 0 && onNavigateDossier && (
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigateDossier(selectedLocation.relatedDossierSlugs![0])}
                      className="w-full py-2.5 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <span>Read Deep-Dive Intelligence Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-12 text-center text-slate-500 space-y-2">
                <Compass className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="text-xs">Select any pin on the map to inspect its strategic briefing.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
