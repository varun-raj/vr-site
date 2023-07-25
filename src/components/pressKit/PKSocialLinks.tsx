import React from 'react';

import Title from '../ui/Title';

export default function PKSocialLinks() {
  return (
    <>
      <div>
        <Title title="🔗 Social Links" level={3} className="text-3xl" />
        <p>Here are my social links that you can use to mention me or tag me</p>
      </div>
      <ul className="flex flex-col gap-3">
        <li>
          <p className="font-bold">Twitter (X)</p>
          <p>
            <a target="_blank" href="https://twitter.com/zathvarun">
              https://twitter.com/zathvarun
            </a>
          </p>
        </li>
        <li>
          <p className="font-bold">LinkedIn</p>
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/varunrajm/">
              https://www.linkedin.com/in/varunrajm/
            </a>
          </p>
        </li>
        <li>
          <p className="font-bold">Instagram</p>
          <p>
            <a target="_blank" href="https://www.instagram.com/varunraj22/">
              https://www.instagram.com/varunraj22/
            </a>
          </p>
        </li>
        <li>
          <p className="font-bold">Threads</p>
          <p>
            <a target="_blank" href="https://www.threads.net/varunraj22/">
              https://www.threads.net/varunraj22/
            </a>
          </p>
        </li>
        <li>
          <p className="font-bold">Facebook</p>
          <p>
            <a target="_blank" href="https://www.facebook.com/zathvarun/">
              https://www.facebook.com/zathvarun/
            </a>
          </p>
        </li>
      </ul>
    </>
  );
}
