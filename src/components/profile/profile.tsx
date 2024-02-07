import React from 'react';
import Image from 'next/image';

export default function ProfileCard({ imageUrl, firstname, lastname }: { imageUrl: string; firstname: string, lastname: string }) {
    return (
        <div className="text-center flex flex-col items-center">
            <div className="inline-block rounded-full overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <Image
                    src={imageUrl}
                    alt={firstname + lastname}
                    width={100}
                    height={100}
                    layout="fixed"
                />
            </div>
            <h3 className="mt-1 text-lg">{firstname}</h3>
            <h3 className="text-lg">{lastname}</h3>
        </div>
    );
};
