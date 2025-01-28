import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
    const images: string[] = [
        '/logo.jpg',
        '/gallery/me_sign_hill.JPG',
        '/gallery/sign_hill.JPG',
        '/gallery/beach.JPG',
        '/gallery/orange_park1.JPG',
        '/gallery/orange_park_tree.JPG',
        // '/WIP.jpg',
        // '/WIP.jpg',
        // '/WIP.jpg'
    ];

    const [loaded, setLoaded] = useState(Array(images.length).fill(false));

    const handleImageLoad = (index: number) => {
        setLoaded((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <section id="gallery" className="bg-gradient-to-r from-gray-300 to-gray-200 py-20">
            <div className="container mx-auto px-4">
                {/* Gallery Title */}
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Photo Gallery</h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* Loading Skeleton */}
                            {!loaded[index] && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                            )}

                            <Image
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                onLoadingComplete={() => handleImageLoad(index)}
                            />
                            {/* Optional: Add a hover overlay with a caption */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Photo {index + 1}
                                </p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;