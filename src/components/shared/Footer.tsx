import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="flex items-center justify-center p-2">
        <p className="inline font-mono text-xs text-gray-400 dark:text-gray-600">
          Copyright &copy; {new Date().getFullYear()} {AppConfig.site_name}
        </p>
      </div>
    </footer>
  );
}
