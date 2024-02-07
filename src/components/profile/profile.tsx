import React from 'react';
import Image from 'next/image';

export default function ProfileCard({ imageUrl, name }: { imageUrl: string; name: string }) {
    return (
        <div className="text-center flex flex-col items-center">
            <div className="inline-block rounded-full overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <Image
                    src={imageUrl}
                    alt={name}
                    width={100}
                    height={100}
                    layout="fixed"
                />
            </div>
            <h3 className="mt-2">{name}</h3>
        </div>
    );
};
