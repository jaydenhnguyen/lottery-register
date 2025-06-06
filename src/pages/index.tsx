import * as React from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/home').then();
  }, [router]);

  return null;
}
