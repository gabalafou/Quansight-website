import { useEffect } from 'react';

import { useRouter } from 'next/router';

// The URL of the Storyblok iframe is like:
// https://quansight-consulting.vercel.app/testing-components?_storyblok=150968726
// &_storyblok_c=page
// &_storyblok_tk[space_id]=147759
// etc.
// - a bunch of query string parameters that all begin with `_storyblok`.
// So this is essentially checking if the site is loaded in
// the Storyblok editor preview iframe.
const isStoryblok =
  typeof window !== 'undefined' &&
  window.location.search.includes('_storyblok');

const isProduction = process.env['NODE_ENV'] === 'production';

export const usePreviewMode = (
  // isPreviewMode comes from getStaticProps (Next.js preview mode feature)
  isPreviewMode: boolean,
): boolean => {
  const { reload } = useRouter();

  useEffect(() => {
    if (!isPreviewMode && isStoryblok && isProduction) {
      fetch(`/api/enter-preview`).then(reload);
    }
  }, [isPreviewMode]);

  // useEffect(() => {
  //   if (isPreviewMode && !isStoryblok) {
  //     fetch('/api/exit-preview').then(reload);
  //   }
  // });

  return isPreviewMode;
};
