import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

export default function VideoShowcaseCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <motion.div
      className="h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden relative cursor-hover group"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
      >
        <source src="https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm" type="video/webm" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F1A]/90 via-[#1A2F1A]/30 to-transparent pointer-events-none" />
      
      {/* Animated Badge */}
      <motion.div
        className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 bg-[#F9F6F0]/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium text-[#1A2F1A]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#c4738a] rounded-full animate-pulse"></span>
          Live Showcase
        </span>
      </motion.div>

      {/* Play/Pause & Mute Controls */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleMute}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F9F6F0]/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#F9F6F0] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-[#1A2F1A]" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#1A2F1A]" />
              )}
            </motion.button>
            <motion.button
              onClick={togglePlay}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F9F6F0]/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#F9F6F0] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-[#1A2F1A]" />
              ) : (
                <Play className="w-4 h-4 text-[#1A2F1A] ml-0.5" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Play Button (when paused) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            className="absolute inset-0 z-20 flex items-center justify-center"
            onClick={togglePlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F9F6F0]/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#1A2F1A] ml-1" fill="#1A2F1A" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-5xl text-[#F9F6F0] tracking-tight leading-tight">
            Spring Garden<br />
            <span className="text-[#F9F6F0]/60">Collection</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-[#F9F6F0]/80 text-sm sm:text-base lg:text-lg max-w-md">
            Watch our artisans craft vibrant sunflowers, dahlias, and wildflowers that capture the essence of the season.
          </p>
        </motion.div>

        {/* Hover CTA */}
        <motion.div
          className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <AnimatedButton variant="secondary" hoverText="Shop Now →">
            Explore Collection
          </AnimatedButton>
          <span className="hidden sm:block font-serif italic text-lg text-[#F9F6F0]/80">From $45</span>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F9F6F0]/10 z-30">
        <motion.div
          className="h-full bg-[#F9F6F0]/60"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Animated Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4738a]/30 to-transparent rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
