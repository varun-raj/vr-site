import { Download } from '@phosphor-icons/react';
import React from 'react';

import Title from '../ui/Title';

const images = [
  {
    alt: 'Picture Three',
    src: '/assets/press-kit/picture_three.jpg',
  },

  {
    alt: 'Picture Two',
    src: '/assets/press-kit/picture_two.JPG',
  },
];

export default function PKPhotos() {
  return (
    <>
      <div>
        <Title title="📸 Portrait Picture" level={3} className="text-3xl" />
        <p>
          Use either of the following pictures for portrait, please do not crop
          or edit the pictures.
        </p>
      </div>
      <div className="flex gap-2">
        {images.map((image) => (
          <div
            key={image.src}
            style={{
              backgroundImage: `url(${image.src})`,
            }}
            className="group h-[150px] w-[150px] rounded-lg bg-cover bg-center bg-no-repeat "
          >
            <div
              className="invisible m-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-800 group-hover:visible"
              onClick={() => {
                window.open(image.src, '_blank');
              }}
            >
              <Download size={14} className="text-white" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
