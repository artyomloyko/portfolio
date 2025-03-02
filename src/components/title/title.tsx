'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import './styles.css';

const initialText = 'Artyom';
const finalText = ' Loiko';
const delay = 700;
const duration = 1200;

export const Title = () => {
  const [currentText, setCurrentText] = useState(initialText);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setCurrentText(initialText);
    setIsAnimating(false);

    let counter = 0;
    const ms = duration / finalText.length;
    const timerId = setTimeout(() => {
      setIsAnimating(true);
      const intervalId = setInterval(() => {
        setCurrentText(initialText + finalText.slice(0, counter));
        counter += 1;
        if (counter > finalText.length) clearInterval(intervalId);
      }, ms);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="hero-section__content">
        <h1
          className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl hero-section__title"
          data-text={currentText}
        >
          {currentText}
          <span
            className={classNames('typewrite-animation__cursor', {
              'is-animating': isAnimating,
            })}
          />
        </h1>
        <h2 className="text-3xl font-medium sm:text-5xl md:text-6xl xl:text-7xl hero-section__subtitle">
          <span className="hero-section__subtitle-highlight">I build things for the web.</span>
          <span className="hero-section__subtitle-selection" />
        </h2>
      </div>
      <Link
        href="/about"
        className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl hero-section__link"
      >
        Read more about me &rarr;
      </Link>
    </>
  );
};
