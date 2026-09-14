import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Globe, 
  Compass, 
  Search, 
  RotateCcw, 
  ShieldCheck, 
  Filter, 
  BookOpen, 
  ArrowRight, 
  ZoomIn,
  ZoomOut,
  Volume2,
  Navigation,
  Crosshair,
  Award,
  Layers,
  MapPin,
  Anchor
} from 'lucide-react';
import { 
  STRATEGIC_LOCATIONS_DATA, 
  MARITIME_CORRIDORS,
  VOYAGE_ROUTE_OPTIONS,
  MAP_RADAR_QUESTIONS
} from '../../data/diplomaticMapData';
import type { 
  StrategicLocation, 
  LocationCategory, 
  MapTheater,
  VoyageRouteOption
} from '../../data/diplomaticMapData';
import { speakText } from '../../utils/audioPlayer';
import { useLocalization, resolveLocalizedText } from '../../services/localizationService';

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
  // onNavigateDossier,
  onNavigateFellowship
}) => {
  // Main view mode: 'map' | 'voyage-simulator' | 'radar-challenge'
  const [activeMode, setActiveMode] = useState<'map' | 'voyage-simulator' | 'radar-challenge'>('map');
  const { lang, currentMeta } = useLocalization();

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

  // Voyage Simulator State
  const [selectedVoyage, setSelectedVoyage] = useState<VoyageRouteOption>(VOYAGE_ROUTE_OPTIONS[0]);

  // Radar Challenge (Quiz) State
  const [radarQuestionIdx, setRadarQuestionIdx] = useState(0);
  const [radarScore, setRadarScore] = useState(0);
  const [radarCompleted, setRadarCompleted] = useState(false);
  const [radarFeedback, setRadarFeedback] = useState<{ success: boolean; message: string } | null>(null);
  const [showRadarClue, setShowRadarClue] = useState(false);

  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Focus on initialLocationId if passed via props
  useEffect(() => {
    if (initialLocationId) {
      const loc = STRATEGIC_LOCATIONS_DATA.find(l => l.id === initialLocationId);
      if (loc) {
        setSelectedLocation(loc);
        flyToLocation(loc);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Diplomatic & Geopolitical World Map | DH Shishir';
  }, [initialLocationId]);

  // Smooth Fly-to Camera animation
  const flyToLocation = (loc: StrategicLocation) => {
    const targetScale = 2.4;
    const targetX = -(loc.xPct * 10 - 500) * targetScale * 0.7;
    const targetY = -(loc.yPct * 6 - 300) * targetScale * 0.7;

    setScale(targetScale);
    setPosition({ x: targetX, y: targetY });
  };

  const handleSelectLocation = (loc: StrategicLocation) => {
    if (activeMode === 'radar-challenge' && !radarCompleted) {
      // Evaluate radar guess
      const currentQ = MAP_RADAR_QUESTIONS[radarQuestionIdx];
      if (loc.id === currentQ.targetLocationId) {
        setRadarScore(prev => prev + 10);
        setRadarFeedback({
          success: true,
          message: `Correct! ${loc.name} pinpointed successfully.`
        });
      } else {
        setRadarFeedback({
          success: false,
          message: `Incorrect. You clicked ${loc.name}. Try reviewing strategic locations.`
        });
      }

      setTimeout(() => {
        setRadarFeedback(null);
        setShowRadarClue(false);
        if (radarQuestionIdx < MAP_RADAR_QUESTIONS.length - 1) {
          setRadarQuestionIdx(prev => prev + 1);
        } else {
          setRadarCompleted(true);
        }
      }, 2200);
      return;
    }

    setSelectedLocation(loc);
    flyToLocation(loc);
  };

  // Play audio intelligence briefing
  const handlePlayBriefing = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakText(text, true);
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
      setPosition({ x: -550, y: -130 });
    } else if (theater === 'europe_eurasia') {
      setScale(2.2);
      setPosition({ x: -380, y: -50 });
    } else if (theater === 'americas') {
      setScale(1.8);
      setPosition({ x: 50, y: -80 });
    } else if (theater === 'africa') {
      setScale(1.9);
      setPosition({ x: -350, y: -220 });
    } else {
      setScale(1.2);
      setPosition({ x: -150, y: -50 });
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

  const handleZoom = (delta: number) => {
    setScale(prev => Math.min(3.5, Math.max(0.9, prev + delta)));
  };

  const handleResetView = () => {
    setScale(1.2);
    setPosition({ x: -150, y: -50 });
    setSelectedTheater('all');
    setSelectedCategory('all');
  };

  // Filtered dataset
  const filteredLocations = useMemo(() => {
    return STRATEGIC_LOCATIONS_DATA.filter(loc => {
      const matchCat = selectedCategory === 'all' || loc.category === selectedCategory;
      const matchTheater = selectedTheater === 'all' || loc.theater === selectedTheater;
      const matchQuery = 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (loc.banglaName && loc.banglaName.includes(searchQuery)) ||
        loc.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.theaterLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchTheater && matchQuery;
    });
  }, [selectedCategory, selectedTheater, searchQuery]);

  // Restart Radar Challenge
  const handleRestartRadar = () => {
    setRadarQuestionIdx(0);
    setRadarScore(0);
    setRadarCompleted(false);
    setRadarFeedback(null);
    setShowRadarClue(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 font-sans">
      {/* Top Breadcrumb & Status Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2 text-slate-500">
            {onNavigateHome && (
              <button 
                onClick={onNavigateHome}
                className="hover:text-teal-900 font-semibold transition cursor-pointer"
              >
                dhshishir.com
              </button>
            )}
            <span>/</span>
            {onNavigateDiplomacy && (
              <button 
                onClick={onNavigateDiplomacy}
                className="hover:text-teal-900 font-semibold transition cursor-pointer"
              >
                Diplomatic Intelligence Hub
              </button>
            )}
            <span>/</span>
            <span className="text-teal-900 font-bold">Interactive Geopolitical Map & Transit Radar</span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveMode('map')}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                activeMode === 'map'
                  ? 'bg-white text-teal-950 shadow-xs'
                  : 'text-slate-600 hover:text-teal-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>World Map ({STRATEGIC_LOCATIONS_DATA.length})</span>
            </button>

            <button
              onClick={() => setActiveMode('voyage-simulator')}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                activeMode === 'voyage-simulator'
                  ? 'bg-teal-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-teal-900'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Voyage Route Simulator</span>
            </button>

            <button
              onClick={() => setActiveMode('radar-challenge')}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                activeMode === 'radar-challenge'
                  ? 'bg-teal-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-teal-900'
              }`}
            >
              <Crosshair className="w-3.5 h-3.5" />
              <span>Radar Challenge</span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">Quiz</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">

        {/* Hero Title & Description */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200 uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-teal-800" /> Strategic Geography & Global Sea Lines of Communication
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-serif-title">
              Interactive Geopolitical & <span className="text-teal-900">Diplomatic World Map</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
              Explore <strong>55+ strategic maritime chokepoints, naval bases, diplomatic treaty seats, and flashpoints</strong> analyzed through the lens of Bangladesh statecraft and great-power competition.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500 font-mono">
              Displaying {filteredLocations.length} of {STRATEGIC_LOCATIONS_DATA.length} Strategic Nodes
            </span>
          </div>
        </div>

        {/* RADAR CHALLENGE ACTIVE BANNER */}
        {activeMode === 'radar-challenge' && (
          <div className="p-5 bg-teal-900 text-white rounded-3xl space-y-3 shadow-md border border-teal-800 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-800 pb-3">
              <div className="flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm tracking-wider uppercase">Geopolitical Map Radar Challenge</span>
                <span className="bg-teal-800 text-teal-200 text-xs font-mono px-2.5 py-0.5 rounded-full">
                  Question {radarQuestionIdx + 1} of {MAP_RADAR_QUESTIONS.length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-amber-300">Score: {radarScore} Pts</span>
                <button
                  onClick={handleRestartRadar}
                  className="px-2.5 py-1 bg-teal-800 hover:bg-teal-700 text-teal-100 rounded-lg text-xs font-bold transition cursor-pointer"
                >
                  Restart
                </button>
              </div>
            </div>

            {!radarCompleted ? (
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-bold text-teal-50">
                  {MAP_RADAR_QUESTIONS[radarQuestionIdx].prompt}
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={() => setShowRadarClue(prev => !prev)}
                    className="text-amber-300 hover:text-amber-200 underline font-semibold cursor-pointer"
                  >
                    {showRadarClue ? 'Hide Strategic Clue' : '💡 Need a Clue?'}
                  </button>
                  {showRadarClue && (
                    <span className="text-teal-200 italic font-bangla">
                      {MAP_RADAR_QUESTIONS[radarQuestionIdx].banglaClue} ({MAP_RADAR_QUESTIONS[radarQuestionIdx].clue})
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="py-4 text-center space-y-3">
                <Award className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Radar Evaluation Completed!</h3>
                <p className="text-xs text-teal-200">
                  Final Geopolitical Acumen Score: <strong className="text-amber-300 text-base">{radarScore} / {MAP_RADAR_QUESTIONS.length * 10} Points</strong>
                </p>
                <button
                  onClick={handleRestartRadar}
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl text-xs transition cursor-pointer"
                >
                  Play Again
                </button>
              </div>
            )}

            {radarFeedback && (
              <div className={`p-3 rounded-xl text-xs font-bold ${
                radarFeedback.success ? 'bg-emerald-800/80 text-emerald-100 border border-emerald-500' : 'bg-rose-800/80 text-rose-100 border border-rose-500'
              }`}>
                {radarFeedback.message}
              </div>
            )}
          </div>
        )}

        {/* VOYAGE ROUTE SIMULATOR ACTIVE SELECTOR */}
        {activeMode === 'voyage-simulator' && (
          <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Navigation className="w-4 h-4 text-teal-800" />
                <span>Maritime Transit & Chokepoint Voyage Route Simulator</span>
              </div>
              <span className="text-xs font-mono text-slate-500">Cruising Speed Benchmark: 15 Knots</span>
            </div>

            {/* Route selection buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {VOYAGE_ROUTE_OPTIONS.map(route => (
                <button
                  key={route.id}
                  onClick={() => setSelectedVoyage(route)}
                  className={`p-3 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between gap-2 ${
                    selectedVoyage.id === route.id
                      ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-teal-50/50 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="font-bold text-xs leading-snug">{route.routeName}</div>
                  <div className="flex items-center justify-between text-[10px] opacity-80 font-mono">
                    <span>{route.totalNauticalMiles} NM</span>
                    <span>~{route.transitDaysAt15Knots} Days</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Route Analytics Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-slate-900">{selectedVoyage.routeName}</div>
                <p className="text-slate-600 text-xs">{selectedVoyage.strategicSummary}</p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="font-bold text-slate-500 uppercase text-[10px]">Chokepoints Passed:</span>
                  {selectedVoyage.chokepointsEncountered.map((chk, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-teal-950 font-bold text-[10px]">
                      {chk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Transit Distance</div>
                  <div className="text-base font-black text-teal-900 font-mono">{selectedVoyage.totalNauticalMiles} NM</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-center">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Voyage Duration</div>
                  <div className="text-base font-black text-teal-900 font-mono">{selectedVoyage.transitDaysAt15Knots} Days</div>
                </div>
                <div className={`p-2.5 rounded-xl border text-center ${
                  selectedVoyage.riskRating === 'High' ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-teal-50 border-teal-200 text-teal-900'
                }`}>
                  <div className="text-[10px] font-bold uppercase">Transit Threat Index</div>
                  <div className="text-base font-black font-mono">{selectedVoyage.riskRating}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MAIN CONTROLS BAR (Theaters & Categories) */}
        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
          {/* Theater Quick Presets */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 pl-1">
              <Compass className="w-3.5 h-3.5 text-teal-800" /> Theaters:
            </span>
            {[
              { id: 'all', label: 'Global View' },
              { id: 'bay_of_bengal', label: 'Bay of Bengal & South Asia' },
              { id: 'indo_pacific', label: 'Indo-Pacific & East Asia' },
              { id: 'middle_east', label: 'Middle East & Gulf' },
              { id: 'europe_eurasia', label: 'Europe & Eurasia' },
              { id: 'americas', label: 'Americas' },
              { id: 'africa', label: 'Africa' }
            ].map(th => (
              <button
                key={th.id}
                onClick={() => handleTheaterChange(th.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedTheater === th.id
                    ? 'bg-teal-900 text-white font-bold shadow-2xs'
                    : 'bg-slate-50 text-slate-700 hover:text-teal-900 hover:bg-teal-50/60 border border-slate-200'
                }`}
              >
                {th.label}
              </button>
            ))}
          </div>

          {/* Search and Category Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search strait, port, treaty, or city..."
                className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-teal-800 focus:bg-white transition text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-teal-800" /> Type:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'chokepoint', label: 'Chokepoints' },
                { id: 'port', label: 'Ports' },
                { id: 'diplomatic_hq', label: 'Treaty HQs' },
                { id: 'flashpoint', label: 'Flashpoints' },
                { id: 'island_base', label: 'Naval Bases' },
                { id: 'energy_resource', label: 'Energy Hubs' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-teal-900 text-white font-bold'
                      : 'bg-white text-slate-600 hover:text-teal-900 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAP & DETAIL SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* INTERACTIVE SVG WORLD MAP CANVAS (7 COLS) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-800 shadow-lg overflow-hidden relative min-h-[500px] flex flex-col justify-between select-none">
            
            {/* Map Top Overlay Controls */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-slate-200 flex items-center gap-2 shadow-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zoom: {Math.round(scale * 100)}%</span>
              </div>

              <button
                onClick={() => setShowMaritimeCorridors(prev => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 ${
                  showMaritimeCorridors 
                    ? 'bg-teal-900/90 text-teal-200 border-teal-700' 
                    : 'bg-slate-900/90 text-slate-400 border-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Sea Lanes (SLOC)</span>
              </button>
            </div>

            {/* Map Zoom / Reset Float Buttons */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5">
              <button
                onClick={() => handleZoom(0.3)}
                className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 transition cursor-pointer shadow-sm"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom(-0.3)}
                className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 transition cursor-pointer shadow-sm"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetView}
                className="p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 transition cursor-pointer shadow-sm"
                title="Reset Camera"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* SVG Interactive Canvas */}
            <div 
              ref={svgContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`w-full h-[520px] flex items-center justify-center overflow-hidden cursor-${isDragging ? 'grabbing' : 'grab'}`}
            >
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <defs>
                  {/* Subtle Grid Pattern */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeOpacity="0.4" />
                  </pattern>

                  {/* Node Glow Filters */}
                  <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Ocean Background */}
                <rect width="1000" height="600" fill="#090d16" />
                <rect width="1000" height="600" fill="url(#grid)" />

                {/* Continental Landmass Silhouettes (Accurate Scaled Vectors) */}
                <g fill="#1e293b" stroke="#334155" strokeWidth="0.75">
                  {/* North America */}
                  <path d="M 120 70 Q 180 50 260 75 Q 310 110 290 180 Q 260 220 240 280 Q 210 320 230 380 Q 180 340 140 280 Q 100 210 110 130 Z" />
                  {/* Central America & Caribbean */}
                  <path d="M 230 380 Q 250 420 242 485 Q 220 440 230 380 Z" />
                  {/* South America */}
                  <path d="M 242 485 Q 310 490 350 560 Q 320 660 280 730 Q 240 680 230 580 Z" />
                  {/* Europe & Scandinavia */}
                  <path d="M 470 120 Q 520 80 580 110 Q 590 180 550 220 Q 500 240 470 190 Z" />
                  <path d="M 500 80 Q 530 40 560 70 Q 540 120 500 80 Z" />
                  {/* British Isles */}
                  <path d="M 465 140 Q 485 130 480 170 Q 455 165 465 140 Z" />
                  {/* Africa */}
                  <path d="M 460 280 Q 550 260 620 310 Q 640 440 580 580 Q 545 780 480 560 Q 440 410 460 280 Z" />
                  {/* Madagascar */}
                  <path d="M 640 580 Q 655 570 650 630 Q 635 620 640 580 Z" />
                  {/* Eurasia & Russia */}
                  <path d="M 580 110 Q 750 70 920 100 Q 960 160 880 240 Q 780 220 670 200 Q 590 180 580 110 Z" />
                  {/* Middle East & Arabian Peninsula */}
                  <path d="M 600 280 Q 680 290 690 380 Q 630 410 600 340 Z" />
                  {/* South Asia & Indian Subcontinent */}
                  <path d="M 700 320 Q 760 300 800 340 Q 780 460 745 510 Q 710 440 700 320 Z" />
                  {/* Sri Lanka */}
                  <path d="M 744 525 Q 755 525 750 545 Q 740 540 744 525 Z" />
                  {/* Southeast Asia & Indochina */}
                  <path d="M 780 360 Q 840 370 850 460 Q 800 520 780 440 Z" />
                  {/* Indonesian Archipelago & Philippines */}
                  <path d="M 790 560 Q 860 550 900 590 Q 850 640 790 560 Z" />
                  {/* East Asia & Japan */}
                  <path d="M 860 240 Q 910 240 920 320 Q 860 350 830 300 Z" />
                  <path d="M 900 260 Q 930 250 920 330 Q 895 310 900 260 Z" />
                  {/* Australia */}
                  <path d="M 850 640 Q 940 620 960 700 Q 920 790 840 760 Q 820 690 850 640 Z" />
                </g>

                {/* Sea Lines of Communication (Maritime Corridors) */}
                {showMaritimeCorridors && activeMode !== 'voyage-simulator' && (
                  <g>
                    {MARITIME_CORRIDORS.map(corridor => (
                      <g key={corridor.id}>
                        <path
                          d={corridor.pathD}
                          fill="none"
                          stroke={corridor.color}
                          strokeWidth="2.5"
                          strokeDasharray="6 6"
                          strokeOpacity="0.75"
                          className="animate-pulse"
                        />
                      </g>
                    ))}
                  </g>
                )}

                {/* VOYAGE SIMULATOR ACTIVE ROUTE TRACE */}
                {activeMode === 'voyage-simulator' && selectedVoyage && (
                  <g>
                    {/* Shadow halo */}
                    <path
                      d={selectedVoyage.pathD}
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="6"
                      strokeOpacity="0.3"
                    />
                    {/* Pulsing route line */}
                    <path
                      d={selectedVoyage.pathD}
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="3.5"
                      strokeDasharray="8 6"
                    />
                  </g>
                )}

                {/* Strategic Location Pinpoints */}
                {filteredLocations.map(loc => {
                  const isSelected = selectedLocation?.id === loc.id;
                  const isHovered = hoveredLocation?.id === loc.id;
                  const isCritical = loc.threatLevel === 'Critical Alert';
                  const isHq = loc.category === 'diplomatic_hq';

                  const cx = loc.xPct * 10;
                  const cy = loc.yPct * 6;

                  let pinColor = '#0d9488'; // Teal default
                  if (isCritical) pinColor = '#ef4444'; // Red for critical alert
                  if (isHq) pinColor = '#f59e0b'; // Amber for diplomatic HQs
                  if (loc.category === 'port') pinColor = '#06b6d4'; // Cyan for ports
                  if (loc.category === 'energy_resource') pinColor = '#10b981'; // Green for energy

                  return (
                    <g 
                      key={loc.id}
                      onClick={() => handleSelectLocation(loc)}
                      onMouseEnter={() => setHoveredLocation(loc)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      className="cursor-pointer transition-all duration-200"
                    >
                      {/* Outer animated ripple for selected or critical nodes */}
                      {(isSelected || isCritical) && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? "14" : "10"}
                          fill="none"
                          stroke={pinColor}
                          strokeWidth="1.5"
                          strokeOpacity="0.6"
                          className="animate-ping"
                          style={{ transformOrigin: `${cx}px ${cy}px` }}
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "7" : isHovered ? "6" : "4.5"}
                        fill={pinColor}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? "2" : "1"}
                        filter={isCritical ? "url(#glow-red)" : "url(#glow-teal)"}
                      />

                      {/* Node Label (Visible on zoom > 1.8 or when selected/hovered) */}
                      {(scale >= 1.9 || isSelected || isHovered) && (
                        <text
                          x={cx}
                          y={cy - 9}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight={isSelected ? "bold" : "600"}
                          className="pointer-events-none drop-shadow-md select-none font-sans"
                        >
                          {loc.name.split('(')[0].trim()}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Bottom Legend Ribbon */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-300">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 font-bold text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Critical Chokepoint / Flashpoint
                </span>
                <span className="flex items-center gap-1.5 font-bold text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Deep-Sea Port / Maritime Base
                </span>
                <span className="flex items-center gap-1.5 font-bold text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Diplomatic Treaty HQ / ICJ
                </span>
                <span className="flex items-center gap-1.5 font-bold text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Energy Terminal / Minerals
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">
                Click pin to load intelligence dossier
              </span>
            </div>

          </div>

          {/* RIGHT SIDEBAR: DETAILED STRATEGIC DOSSIER SHEET (5 COLS) */}
          <div className="lg:col-span-5 space-y-4">
            {selectedLocation ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6 animate-fade-in">
                
                {/* Header Badge & Category */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200 flex items-center gap-1.5">
                      <Anchor className="w-3.5 h-3.5 text-teal-800" />
                      {selectedLocation.categoryLabel}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      selectedLocation.threatLevel === 'Critical Alert'
                        ? 'bg-rose-50 text-rose-800 border border-rose-200'
                        : selectedLocation.threatLevel === 'Diplomatic Center'
                        ? 'bg-amber-50 text-amber-900 border border-amber-200'
                        : 'bg-teal-50 text-teal-900 border border-teal-200'
                    }`}>
                      {selectedLocation.threatLevel}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title tracking-tight">
                    {selectedLocation.name}
                  </h2>
                  {selectedLocation.banglaName && (
                    <div className="text-sm font-bangla text-teal-900 font-semibold">
                      {selectedLocation.banglaName}
                    </div>
                  )}
                  <div className="text-xs text-slate-500 font-mono">
                    Theater: <strong>{selectedLocation.theaterLabel}</strong> • Lat {selectedLocation.lat.toFixed(2)}°, Lng {selectedLocation.lng.toFixed(2)}°
                  </div>
                </div>

                {/* Audio Briefing Action Button */}
                <button
                  onClick={e => handlePlayBriefing(selectedLocation.audioBriefingText, e)}
                  className="w-full py-2.5 px-4 bg-teal-900 hover:bg-teal-800 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
                >
                  <Volume2 className="w-4 h-4 text-teal-200" />
                  <span>Listen to Diplomatic Intelligence Briefing (Smart Audio)</span>
                </button>

                {/* Core Significance (English & Bangla) */}
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                    <strong className="text-slate-900 block font-sans">Strategic Significance:</strong>
                    <p>{selectedLocation.significance}</p>
                    {(() => {
                      const locInfo = resolveLocalizedText(lang, selectedLocation.banglaSignificance, selectedLocation.significance);
                      return (
                        <div className="pt-2 border-t border-slate-200 text-teal-950 font-medium">
                          <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">
                            {currentMeta.flag} {locInfo.languageLabel}
                          </span>
                          <p className={lang === 'bn' ? 'font-bangla' : ''} dir={locInfo.isRtl ? 'rtl' : 'ltr'}>
                            {locInfo.text}
                          </p>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Bangladesh Foreign Policy Relevance */}
                  <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-200 text-xs text-teal-950 leading-relaxed space-y-1">
                    <strong className="text-teal-900 block font-sans flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-teal-800" /> Bangladesh Strategic Interest:
                    </strong>
                    <p>{selectedLocation.bangladeshRelevance}</p>
                  </div>
                </div>

                {/* Great Power Dynamics Accordion / Grid */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Great Power Competition Dynamics:
                  </span>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {selectedLocation.greatPowerDynamics.us && (
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900">🇺🇸 United States: </strong>
                        <span className="text-slate-600">{selectedLocation.greatPowerDynamics.us}</span>
                      </div>
                    )}
                    {selectedLocation.greatPowerDynamics.china && (
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900">🇨🇳 China: </strong>
                        <span className="text-slate-600">{selectedLocation.greatPowerDynamics.china}</span>
                      </div>
                    )}
                    {selectedLocation.greatPowerDynamics.india && (
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900">🇮🇳 India: </strong>
                        <span className="text-slate-600">{selectedLocation.greatPowerDynamics.india}</span>
                      </div>
                    )}
                    {selectedLocation.greatPowerDynamics.regional && (
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900">🌐 Regional Actors: </strong>
                        <span className="text-slate-600">{selectedLocation.greatPowerDynamics.regional}</span>
                      </div>
                    )}
                    {selectedLocation.greatPowerDynamics.global && (
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900">⚖️ Multilateral System: </strong>
                        <span className="text-slate-600">{selectedLocation.greatPowerDynamics.global}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Treaties and Accords */}
                {selectedLocation.keyTreaties.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Governing Treaties & Accords:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedLocation.keyTreaties.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[11px] font-semibold text-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Academic & Intelligence Links */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  {onNavigateDiplomacy && (
                    <button
                      onClick={onNavigateDiplomacy}
                      className="text-xs font-bold text-teal-900 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Foreign Policy Desk</span>
                    </button>
                  )}
                  {onNavigateFellowship && (
                    <button
                      onClick={onNavigateFellowship}
                      className="text-xs font-bold text-teal-900 hover:text-teal-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Study IR Fellowship Pillars</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            ) : (
              <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-3">
                <MapPin className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="font-bold text-slate-800 text-sm">Select Any Strategic Location</h3>
                <p className="text-xs text-slate-500">
                  Click any pin on the map or use the search bar to load the complete diplomatic and geopolitical intelligence briefing.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
