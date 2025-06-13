import React from 'react';
import Resume from '../components/Resume';
import DownloadButton from '../components/DownloadButton';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <DownloadButton />
        </div>
        <div id="resume" className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default ResumePage; 