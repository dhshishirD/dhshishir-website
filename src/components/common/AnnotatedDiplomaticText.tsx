import React, { useState, useMemo } from 'react';
import { MASTER_DIPLOMATIC_GLOSSARY } from '../../data/diplomaticGlossaryData';
import type { ExtendedGlossaryTerm } from '../../data/diplomaticGlossaryData';
import { GlossaryTermModal } from './GlossaryTermModal';

interface AnnotatedDiplomaticTextProps {
  text: string;
  className?: string;
  onNavigateToMap?: (locationId: string) => void;
}

export const AnnotatedDiplomaticText: React.FC<AnnotatedDiplomaticTextProps> = ({
  text,
  className = '',
  onNavigateToMap
}) => {
  const [selectedTerm, setSelectedTerm] = useState<ExtendedGlossaryTerm | null>(null);

  // Build a fast lookup dictionary for terms and their aliases
  const termsMap = useMemo(() => {
    const map = new Map<string, ExtendedGlossaryTerm>();
    MASTER_DIPLOMATIC_GLOSSARY.forEach(term => {
      map.set(term.term.toLowerCase(), term);
      if (term.aliases) {
        term.aliases.forEach(a => map.set(a.toLowerCase(), term));
      }
    });
    return map;
  }, []);

  // Sorted phrases by length descending to match longer multi-word terms first (e.g. "Strait of Malacca" before "Strait")
  const sortedKeywords = useMemo(() => {
    const keys: string[] = [];
    MASTER_DIPLOMATIC_GLOSSARY.forEach(t => {
      keys.push(t.term);
      if (t.aliases) keys.push(...t.aliases);
    });
    return keys.sort((a, b) => b.length - a.length);
  }, []);

  // Parse text into tokens (plain text vs matched terms)
  const renderedContent = useMemo(() => {
    if (!text || sortedKeywords.length === 0) return text;

    // Build regex with word boundaries where applicable
    const escaped = sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
      const matchText = match[0];
      const matchIndex = match.index;

      // Push preceding plain text
      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex));
      }

      // Find the matched glossary item
      const matchedTerm = termsMap.get(matchText.toLowerCase());

      if (matchedTerm) {
        parts.push(
          <button
            key={`${matchIndex}-${matchText}`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTerm(matchedTerm);
            }}
            className="inline text-teal-950 font-semibold border-b-2 border-dotted border-teal-700/60 hover:border-solid hover:border-teal-900 hover:bg-teal-50 px-0.5 rounded transition cursor-help text-inherit text-left"
            title={`Tap to view definition: ${matchedTerm.term}`}
          >
            {matchText}
          </button>
        );
      } else {
        parts.push(matchText);
      }

      lastIndex = matchIndex + matchText.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  }, [text, sortedKeywords, termsMap]);

  return (
    <>
      <span className={className}>{renderedContent}</span>

      {/* Term Detail Popover Modal */}
      {selectedTerm && (
        <GlossaryTermModal
          term={selectedTerm}
          onClose={() => setSelectedTerm(null)}
          onNavigateToMap={onNavigateToMap}
        />
      )}
    </>
  );
};
