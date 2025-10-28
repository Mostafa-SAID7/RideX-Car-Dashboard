
import React, { useState, useCallback } from 'react';
import { getAiRecommendations } from '../services/geminiService';
import { MOCK_GUIDES, MOCK_POSTS } from '../constants';
import type { Recommendation } from '../types';
import { WandIcon } from '../constants';

const AiRecommendations: React.FC<{ topic: string }> = ({ topic }) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const allContent = [...MOCK_POSTS, ...MOCK_GUIDES];
      const result = await getAiRecommendations(topic, allContent);
      setRecommendations(result);
    } catch (e) {
      setError('Failed to fetch recommendations.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [topic]);

  return (
    <div className="bg-metallic-gray/50 p-6 rounded-lg border border-metallic-gray">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                <WandIcon className="w-6 h-6 text-accent-red" />
                AI-Powered Recommendations
            </h3>
            <p className="text-gray-400 mt-1">Based on: <span className="font-semibold text-gray-300">"{topic}"</span></p>
        </div>
        <button
          onClick={fetchRecommendations}
          disabled={isLoading}
          className="px-5 py-2.5 font-semibold text-white bg-accent-red rounded-md hover:bg-accent-red-hover transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed w-full sm:w-auto flex-shrink-0"
        >
          {isLoading ? 'Thinking...' : 'Get Suggestions'}
        </button>
      </div>

      {error && <p className="mt-4 text-red-400">{error}</p>}
      
      <div className="mt-6">
        {isLoading ? (
            <div className="grid md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-metallic-gray p-4 rounded-md animate-pulse">
                        <div className="h-5 bg-gray-600 rounded w-3/4 mb-3"></div>
                        <div className="h-3 bg-gray-600 rounded w-full mb-1"></div>
                        <div className="h-3 bg-gray-600 rounded w-5/6"></div>
                    </div>
                ))}
            </div>
        ) : (
             recommendations.length > 0 && (
                <div className="grid md:grid-cols-3 gap-4">
                {recommendations.map((rec) => (
                    <div key={rec.id} className="bg-metallic-gray p-4 rounded-md border border-gray-700 hover:border-accent-red transition-colors">
                    <h4 className="font-bold text-white">{rec.title}</h4>
                    <p className="text-sm text-gray-400 mt-2">{rec.reason}</p>
                    </div>
                ))}
                </div>
            )
        )}
      </div>
    </div>
  );
};

export default AiRecommendations;
