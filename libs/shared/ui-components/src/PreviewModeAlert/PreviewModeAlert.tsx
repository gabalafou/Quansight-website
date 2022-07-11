import type { FC } from 'react';

import type { TPreviewModeAlertProps } from './types';

// A thin full-width banner alert to display at the top of the page if the site
// is in Next.js preview mode.
export const PreviewModeAlert: FC<TPreviewModeAlertProps> = ({ preview }) => {
  if (!preview) {
    return null;
  }

  return (
    <div className="z-30 text-black bg-[rgb(255,255,0)]">
      <div className="py-2 text-center">
        This is page is a preview.{' '}
        <a
          href="/api/exit-preview"
          className="underline transition-colors duration-200 hover:text-cyan"
        >
          Exit preview mode.
        </a>
      </div>
    </div>
  );
};

export default PreviewModeAlert;
