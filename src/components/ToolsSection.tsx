import React, { useState } from 'react';
import { ALL_TOOLS } from './tools/StandaloneToolPage';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

interface ToolsSectionProps {
  onLaunchStandaloneTool?: (toolId: string) => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ onLaunchStandaloneTool }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Career & Jobs' | 'IELTS & English' | 'Academic & BCS'>('All');
  const [activeToolId, setActiveToolId] = useState<string>('cover-letter');

  const categories = ['All', 'Career & Jobs', 'IELTS & English', 'Academic & BCS'] as const;

  const filteredTools = selectedCategory === 'All' 
    ? ALL_TOOLS 
    : ALL_TOOLS.filter(t => t.category === selectedCategory);

  const currentTool = ALL_TOOLS.find(t => t.id === activeToolId) || ALL_TOOLS[0];
  const CurrentToolComponent = currentTool.component;

  const handleLaunch = (toolId: string) => {
    if (onLaunchStandaloneTool) {
      onLaunchStandaloneTool(toolId);
    } else {
      window.location.hash = `#/tools/${toolId}`;
    }
  };

  return (
    <section id="tools" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Visitor & Career Tools Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Smart Self-Diagnostic & Generator Utilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Free, instant interactive tools designed for Bangladeshi graduates, BCS aspirants, job seekers, and IELTS candidates.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            const isSelected = tool.id === activeToolId;
            return (
              <div
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/40'
                    : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${isSelected ? 'bg-indigo-600/20 border-indigo-500/40 text-indigo-300' : 'bg-slate-950 border-slate-800 text-emerald-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800 font-semibold">
                      {tool.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{tool.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{tool.tagline}</p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className={`font-bold ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {isSelected ? '● Currently Active' : 'Click to Load'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLaunch(tool.id);
                    }}
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 text-[11px]"
                    title="Open standalone shareable page"
                  >
                    Open Page <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Active Tool Workspace */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" /> Active Workspace: {currentTool.name}
            </span>
            <button
              onClick={() => handleLaunch(currentTool.id)}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
            >
              Open Dedicated Standalone Page <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <CurrentToolComponent />
        </div>

      </div>
    </section>
  );
};
