
import React, { useState, useEffect, useCallback } from 'react';
import FileTree from './components/FileTree';
import FileContent from './components/FileContent';
import { fileSystemData, findFileByPath } from './constants';
import type { FileNode } from './types';
import { GithubIcon } from './components/Icons';

const App: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string>('README.md');
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);

  useEffect(() => {
    const file = findFileByPath(fileSystemData, selectedPath);
    setSelectedFile(file);
  }, [selectedPath]);

  const handleFileSelect = useCallback((path: string) => {
    setSelectedPath(path);
  }, []);

  return (
    <div className="flex flex-col h-screen font-sans bg-slate-900 text-slate-300">
      <header className="flex items-center justify-between p-3 border-b border-slate-700 bg-slate-800/50">
        <div className="flex items-center">
          <GithubIcon className="w-8 h-8 mr-3 text-white" />
          <div>
            <h1 className="text-lg font-bold text-white">Quantum-Hemp Bio-Composites</h1>
            <p className="text-sm text-slate-400">NSF–DARPA Submission Repository</p>
          </div>
        </div>
      </header>
      <div className="flex flex-1 min-h-0">
        <aside className="w-1/4 max-w-xs p-4 overflow-y-auto bg-slate-900/70 border-r border-slate-800">
          <h2 className="mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">Project Files</h2>
          <FileTree
            nodes={fileSystemData}
            onSelectFile={handleFileSelect}
            selectedPath={selectedPath}
          />
        </aside>
        <main className="flex-1 flex flex-col min-w-0">
          <FileContent file={selectedFile} path={selectedPath} />
        </main>
      </div>
    </div>
  );
};

export default App;
