
import React from 'react';
import { CrawledUrl } from '../types';
import CrawledUrlItem from './CrawledUrlItem';

interface CrawledUrlsListProps {
  crawledUrls: CrawledUrl[];
}

const CrawledUrlsList: React.FC<CrawledUrlsListProps> = ({ crawledUrls }) => {
  return (
    <div className="mt-8">
      <h3 className="text-md font-medium mb-4">Crawled URLs ({crawledUrls.length})</h3>
      <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
        {crawledUrls.map((item, index) => (
          <CrawledUrlItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CrawledUrlsList;
