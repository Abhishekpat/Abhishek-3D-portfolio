import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';
import './RollingGallery.css';
import {
  image1,
  image2,
  image3,
  image4,
  image5,

  image7,
  image8,
  image9,
  image10,
  image11,
  image12

} from '../assets';

const IMGS = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = images.length > 0 ? images : IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

//   const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
//   const faceCount = galleryImages.length;
//   const faceWidth = cylinderWidth / faceCount;
//   const dragFactor = 0.05;
//   const radius = cylinderWidth / (2 * Math.PI);

const IMAGE_WIDTH = 250;
const IMAGE_WIDTH_SM = 180;

const faceCount = galleryImages.length;

// The total circumference is now calculated based on the image width
const cylinderWidth = isScreenSizeSm
  ? IMAGE_WIDTH_SM * faceCount
  : IMAGE_WIDTH * faceCount;

// The width of each container is now simply the width of one image
const faceWidth = isScreenSizeSm ? IMAGE_WIDTH_SM : IMAGE_WIDTH;

const dragFactor = 0.05;

// The radius will update automatically based on the new cylinderWidth
const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
    });
  };

  const transform = useTransform(rotation, value => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: 'linear' }
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 4000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 3, ease: 'linear' }
      });
      rotation.set(rotation.get() - 360 / faceCount);

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 3, ease: 'linear' }
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 4000);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`
              }}
            >
              <img src={url} alt="achievement" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
