"use client";
import Image from 'next/image'
import { useState } from "react";

  const imageWrapperStyle = {
    border: '1px solid white',
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // subtle transparent background
    borderRadius: 4,
    padding: 16,
  };
const navigation = [
  { name: "Home", href: "/home" },
  { name: "Technology", href: "/technology" },
  { name: "Research", href: "/research" },
];

export default function Example() {
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Technology", href: "/technology" },
    { name: "Research", href: "/research" },
  ];


  return (
    <div className="bg-grey">
<header className="absolute inset-x-0 top-0 z-50">
  <nav
    aria-label="Global"
    className="relative flex items-center justify-between p-6 lg:px-8"
  >
    {/* Logo on the left */}
    <div className="flex">
      <a href="/home">
        <img
          src="/Brain.png"
          alt="F1 Logo"
          className="h-12 w-15"
        />
      </a>
    </div>

    {/* Nav links perfectly centered */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-x-12">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold text-white-900"
        >
          {item.name}
        </a>
      ))}
    </div>

    {/* Optional Log in on the right */}
    <div className="flex">
      <a href="#" className="text-sm font-semibold text-white-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </nav>
</header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl pb-32 lg:py-20">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white-900 sm:text-7xl">
            How It Works
            </h1>
            <p className="mt-8 text-lg font-normal text-pretty text-gray-200 sm:text">
            The model uses Convolutional Neural Networks (CNNs) to extract features from brain MRI images and classify them as either Normal or Tumor based on the patterns it learned during training. After preprocessing the images (resizing, normalization), the model processes them through a series of convolutional and dense layers, and then makes predictions about whether the brain image contains a tumor or not.
            </p>
            </div>
        </div>
        <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
      }}
    >
      {/* Row 1 - Two side-by-side images */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <div style={imageWrapperStyle}>
          <Image
            src="/normal_cell_sample.png"
            width={300}
            height={300}
            alt="Normal Cell"
          />
        </div>
        <div style={imageWrapperStyle}>
          <Image
            src="/tumor_cell_sample.png"
            width={300}
            height={300}
            alt="Tumor Cell"
          />
        </div>
      </div>

      {/* Row 2 - Centered single image */}
      <div style={imageWrapperStyle}>
        <Image
          src="/class_distribution.png"
          width={600}
          height={300}
          alt="Class Distribution"
        />
      </div>

      {/* Row 3 - Centered single image */}
      <div style={imageWrapperStyle}>
        <Image
          src="/learning_curves.png"
          width={600}
          height={300}
          alt="Learning Curves"
        />
      </div>
    </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />

        </div>

      </div>
      <footer className="mt-20 bg-blue-10 border-t">
  <div className="mx-auto w-full max-w-screen-xl p-5 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a className="flex items-center">
          <img src="/Brain.png" className="h-11 w-14 me-3" alt="F1 Logo" />
        </a>
      </div>
    </div>
    <hr className="my-6 border-white-100 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm sm:text-center text-gray-400">
        © 2025 {" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Brain Tumor Detection
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </div>
</footer>
    </div>

  );
}






