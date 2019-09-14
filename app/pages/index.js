import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/auth/google">
      <button type="button">
        Login
      </button>
    </Link>
  </div>
);

export default Index;
