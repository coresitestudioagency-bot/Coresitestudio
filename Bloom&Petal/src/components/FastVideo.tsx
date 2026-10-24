import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

type FastVideoProps = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
  src: string;
  type?: string;
  eager?: boolean;
};

const FastVideo = forwardRef<HTMLVideoElement, FastVideoProps>(function FastVideo(
  { src, type = 'video/webm', eager = false, poster, className, autoPlay, muted = true, loop = true, ...rest },
  ref
) {
  const inner = useRef<HTMLVideoElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLVideoElement);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;

    const tryPlay = () => {
      el.muted = true;
      const playPromise = el.play();
      if (playPromise) playPromise.catch(() => {});
    };

    if (eager) {
      tryPlay();
      el.addEventListener('canplay', tryPlay);
      return () => el.removeEventListener('canplay', tryPlay);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          tryPlay();
        } else {
          el.pause();
        }
      },
      { rootMargin: '120px 0px', threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [eager, src]);

  return (
    <video
      ref={inner}
      muted={muted}
      loop={loop}
      playsInline
      autoPlay={eager || autoPlay}
      preload={eager ? 'auto' : 'none'}
      poster={poster}
      className={className}
      disablePictureInPicture
      {...rest}
    >
      <source src={src} type={type} />
    </video>
  );
});

export default FastVideo;
