import React from 'react';
import ContentLoader from 'react-content-loader';

export default function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="120" cy="120" r="120" />
    </ContentLoader>
  );
}
