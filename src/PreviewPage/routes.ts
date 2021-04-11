import React from 'react';
const WrapperExample = React.lazy(() => import('../components/Wrapper/WrapperExample'));
const HeadingExample = React.lazy(() => import('../components/Heading/HeadingExample'));
const FlexExample = React.lazy(() => import('../components/Flex/FlexExample'));

interface RoutesObject {
  name: string;
  path: string;
  Component: React.LazyExoticComponent<React.FC<{}>>;
}

const routes: Array<RoutesObject> = [
  { name: 'Wrapper', path: '/wrapper', Component: WrapperExample },
  { name: 'Heading', path: '/heading', Component: HeadingExample },
  { name: 'Flex', path: '/flex', Component: FlexExample },
];

export default routes;
