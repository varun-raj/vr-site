import React from 'react';

import Title from '../ui/Title';

export default function PKBiography() {
  return (
    <>
      <div>
        <Title title="✍️ Biography" level={3} className="text-3xl" />
        <p>
          I&apos;ve written two versions of my biography, a short one and a long
          one. Please use the one that fits your needs.
        </p>
      </div>
      <div>
        <p className="mb-3">
          <strong className="font-mono text-sm">Short Biography</strong>
        </p>
        <blockquote className="border-l-4 border-primary pl-4">
          <p className="text-lg italic">
            Co-Founder and CIO at Skcript, Google Developer Expert for Firebase,
            and a software developer from India.
          </p>
        </blockquote>
      </div>
      <div>
        <p className="mb-3">
          <strong className="font-mono text-sm">Long Biography</strong>
        </p>
        <blockquote className="border-l-4 border-primary pl-4">
          <p className="text-lg italic">
            Varun Raj Manoharan is an entrepreneur and a software developer from
            India, Currently running Skcript Technologies Pvt, Ltd. a software
            consulting company based out of Chennai, India. He is also a Google
            Developer Expert for Firebase.
            <br />
            <br />
            He is into the software industry for more than 10 years now, and the
            world of web technology, Spent most of his time with Javascript and
            Typescript eco-system.
            <br /> <br />
            He loves traveling and exploring new places, mainly the trips that
            involves adventure and nature. Reads a lot of novels.
          </p>
        </blockquote>
      </div>
    </>
  );
}
