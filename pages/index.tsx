import React from 'react';
import Layout from '#/components/Layout';
import { cn } from '#/lib/utils';

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className={cn(' text-red-500')}>Hai</h1>
      </main>
    </Layout>
  );
}
