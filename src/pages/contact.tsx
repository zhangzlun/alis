import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
  userAgent?: string;
}

const Contact: NextPage<Props> = ({ userAgent }) => {
  const router = useRouter();
  const { pid } = router.query;

  console.log(router);

  return (
    <main>
      Your user agent:
      {userAgent}
      {pid}
    </main>
  );
};

export default Contact;
