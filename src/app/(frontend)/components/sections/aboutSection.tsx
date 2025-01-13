import React from 'react';

export default function AboutSection() {
    return (
        <section id="about" className="h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
                <p className="text-lg md:text-xl text-gray-700">
                    Hello! I&#39;m a passionate developer with a love for creating dynamic and responsive web applications. With a strong foundation in modern web technologies, I strive to build user-friendly and efficient solutions. Let&#39;s work together to bring your ideas to life!
                </p>
            </div>
        </section>
    );
}
