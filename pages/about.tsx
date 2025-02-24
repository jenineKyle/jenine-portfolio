"use client"; // This is necessary for hooks like useEffect to work in this file

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/place1.jpg",
        "/place2.jpg",
        "/place3.jpg",
        "/place4.jpg",
        "/place5.jpg",
        "/place6.jpg",
        "/place7.jpg",
        "/place8.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

    return (
        <div className="w-full bg-[#F9F9F9]">

            <div
                className="relative w-full bg-cover bg-center mb-6"
                style={{
                    backgroundImage: `url(${images[4]})`,
                    height: '300px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Black overlay with opacity */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text on top of the background */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
                    <h1 className="text-5xl md:text-9xl font-bold color-black" style={{ margin: 'auto auto', fontSize: '80px', color: '#B95C17', fontWeight: 700, marginTop: '100px' }}>ABOUT ME</h1>
                </div>
            </div>



            {/* About Me Section */}
            <div className="w-full bg-[#F3F4F6] py-20 px-8 sm:px-20">
                <div className="flex sm:flex-row justify-between">

                    <div className="mr-[20px]">
                        <Image
                            src={images[currentImageIndex]}
                            alt={`Jenine Kyle ${currentImageIndex}`}
                            width={400}
                            height={400}
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>


                    {/* About Me Text */}
                    <div className="w-full sm:w-[55%] text-lg text-gray-600">
                        <p >Hi, I'm <span className="text-xl font-medium text-[#234C5D]">Jenine Gutierrez</span></p>
                        <p style={{ marginTop: '20px' }}>
                            a dedicated Diagnostic Medical Sonography student at the Canadian National Institute of Health (CNIH), on track to graduate in December 2025.
              <br /><br />
              From an early age, I was drawn to the healthcare field, inspired by the impact that compassionate, skilled professionals can have on people’s lives. My journey began with earning a Medical Office Assistant certificate in December 2022, equipping me with essential knowledge of medical office operations and patient care. Working as a Clerk at an ultrasound clinic, I became immersed in the world of diagnostic imaging, gaining hands-on experience with patient interactions, clinic workflows, and the vital role sonographers play in early detection and diagnosis.
              <br /><br />
              This experience solidified my passion for medical imaging and patient-centered care. Sonography is more than just a profession to me—it’s a way to combine my love for science, technology, and human connection. Every scan tells a story, and I am committed to ensuring that each patient feels seen, heard, and cared for during their healthcare journey.
              <br /><br />
              My sonography program consists of 12 months of theory and scan lab training, followed by an 8-month practicum rotation, where I will refine my technical skills and bedside manner in a clinical setting. I am in good standing with CNIH and a proud student member of Sonography Canada, ARDMS, and OARMS, staying engaged with the latest advancements in the field.
              <br /><br />
              With a strong foundation in both technical expertise and compassionate care, I am excited to contribute to the healthcare industry, helping to provide accurate diagnoses and make a meaningful difference in patients' lives.
            </p>
                    </div>

                </div>
            </div>
        </div>

    );
}
