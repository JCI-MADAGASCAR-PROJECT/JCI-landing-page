// 'use client';

// import { useLayoutEffect, useRef, useCallback } from 'react';
// import Lenis from 'lenis';

// export const ScrollStackItem = ({ children, itemClassName = '' , BGColor}) => (
//   <div
//     className={`scroll-stack-card relative w-full h-full overflow-hidden  p-5 rounded-[5px] shadow-[0_0_30px_rgba(0,0,0,0.1)] ${BGColor} box-border origin-top will-change-transform ${itemClassName}`.trim()}
//     style={{
//       backfaceVisibility: 'hidden',
//       transformStyle: 'preserve-3d'
//     }}
//   >
//     {children}
//   </div>
// );

// const ScrollStack = ({
//   children,
//   className = '',
//   itemDistance = 100,
//   itemScale = 0.03,
//   itemStackDistance = 5,
//   stackPosition = '5%',
//   scaleEndPosition = '10%',
//   baseScale = 0.85,
//   scaleDuration = 0.5,
//   rotationAmount = 0,
//   blurAmount = 0,
//   useWindowScroll = false,
//   onStackComplete
// }) => {
//   const scrollerRef = useRef(null);
//   const stackCompletedRef = useRef(false);
//   const animationFrameRef = useRef(null);
//   const lenisRef = useRef(null);
//   const cardsRef = useRef([]);
//   const lastTransformsRef = useRef(new Map());
//   const isUpdatingRef = useRef(false);

//   const calculateProgress = useCallback((scrollTop, start, end) => {
//     if (scrollTop < start) return 0;
//     if (scrollTop > end) return 1;
//     return (scrollTop - start) / (end - start);
//   }, []);

//   const parsePercentage = useCallback((value, containerHeight) => {
//     if (typeof value === 'string' && value.includes('%')) {
//       return (parseFloat(value) / 100) * containerHeight;
//     }
//     return parseFloat(value);
//   }, []);

//   const getScrollData = useCallback(() => {
//     if (useWindowScroll) {
//       return {
//         scrollTop: window.scrollY,
//         containerHeight: window.innerHeight,
//         scrollContainer: document.documentElement
//       };
//     } else {
//       const scroller = scrollerRef.current;
//       return {
//         scrollTop: scroller.scrollTop,
//         containerHeight: scroller.clientHeight,
//         scrollContainer: scroller
//       };
//     }
//   }, [useWindowScroll]);

//   const getElementOffset = useCallback(
//     element => {
//       if (useWindowScroll) {
//         const rect = element.getBoundingClientRect();
//         return rect.top + window.scrollY;
//       } else {
//         return element.offsetTop;
//       }
//     },
//     [useWindowScroll]
//   );

//   const updateCardTransforms = useCallback(() => {
//     if (!cardsRef.current.length || isUpdatingRef.current) return;

//     isUpdatingRef.current = true;

//     const { scrollTop, containerHeight } = getScrollData();
//     const stackPositionPx = parsePercentage(stackPosition, containerHeight);
//     const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

//     const endElement = useWindowScroll
//       ? document.querySelector('.scroll-stack-end')
//       : scrollerRef.current?.querySelector('.scroll-stack-end');

//     const endElementTop = endElement ? getElementOffset(endElement) : 0;

//     cardsRef.current.forEach((card, i) => {
//       if (!card) return;

//       const cardTop = getElementOffset(card);
//       const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
//       const triggerEnd = cardTop - scaleEndPositionPx;
//       const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
//       const pinEnd = endElementTop - containerHeight / 2;

//       const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
//       const targetScale = baseScale + i * itemScale;
//       const scale = 1 - scaleProgress * (1 - targetScale);
//       const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

//       let blur = 0;
//       if (blurAmount) {
//         let topCardIndex = 0;
//         for (let j = 0; j < cardsRef.current.length; j++) {
//           const jCardTop = getElementOffset(cardsRef.current[j]);
//           const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
//           if (scrollTop >= jTriggerStart) {
//             topCardIndex = j;
//           }
//         }

//         if (i < topCardIndex) {
//           const depthInStack = topCardIndex - i;
//           blur = Math.max(0, depthInStack * blurAmount);
//         }
//       }

//       let translateY = 0;
//       const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

//       if (isPinned) {
//         translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
//       } else if (scrollTop > pinEnd) {
//         translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
//       }

//       const newTransform = {
//         translateY: Math.round(translateY * 100) / 100,
//         scale: Math.round(scale * 1000) / 1000,
//         rotation: Math.round(rotation * 100) / 100,
//         blur: Math.round(blur * 100) / 100
//       };

//       const lastTransform = lastTransformsRef.current.get(i);
//       const hasChanged =
//         !lastTransform ||
//         Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
//         Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
//         Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
//         Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

//       if (hasChanged) {
//         const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
//         const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

//         card.style.transform = transform;
//         card.style.filter = filter;

//         lastTransformsRef.current.set(i, newTransform);
//       }

//       if (i === cardsRef.current.length - 1) {
//         const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
//         if (isInView && !stackCompletedRef.current) {
//           stackCompletedRef.current = true;
//           onStackComplete?.();
//         } else if (!isInView && stackCompletedRef.current) {
//           stackCompletedRef.current = false;
//         }
//       }
//     });

//     isUpdatingRef.current = false;
//   }, [
//     itemScale,
//     itemStackDistance,
//     stackPosition,
//     scaleEndPosition,
//     baseScale,
//     rotationAmount,
//     blurAmount,
//     useWindowScroll,
//     onStackComplete,
//     calculateProgress,
//     parsePercentage,
//     getScrollData,
//     getElementOffset
//   ]);

//   const handleScroll = useCallback(() => {
//     updateCardTransforms();
//   }, [updateCardTransforms]);

//   const setupLenis = useCallback(() => {
//     if (useWindowScroll) {
//       const lenis = new Lenis({
//         duration: 1.2,
//         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         smoothWheel: true,
//         touchMultiplier: 2,
//         infinite: false,
//         wheelMultiplier: 1,
//         lerp: 0.1,
//         syncTouch: true,
//         syncTouchLerp: 0.075
//       });

//       lenis.on('scroll', handleScroll);

//       const raf = time => {
//         lenis.raf(time);
//         animationFrameRef.current = requestAnimationFrame(raf);
//       };
//       animationFrameRef.current = requestAnimationFrame(raf);

//       lenisRef.current = lenis;
//       return lenis;
//     } else {
//       const scroller = scrollerRef.current;
//       if (!scroller) return;

//       const lenis = new Lenis({
//         wrapper: scroller,
//         content: scroller.querySelector('.scroll-stack-inner'),
//         duration: 1.2,
//         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         smoothWheel: true,
//         touchMultiplier: 2,
//         infinite: false,
//         wheelMultiplier: 1,
//         lerp: 0.1,
//         syncTouch: true,
//         syncTouchLerp: 0.075
//       });

//       lenis.on('scroll', handleScroll);

//       const raf = time => {
//         lenis.raf(time);
//         animationFrameRef.current = requestAnimationFrame(raf);
//       };
//       animationFrameRef.current = requestAnimationFrame(raf);

//       lenisRef.current = lenis;
//       return lenis;
//     }
//   }, [handleScroll, useWindowScroll]);

//   useLayoutEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const cards = Array.from(
//       useWindowScroll
//         ? document.querySelectorAll('.scroll-stack-card')
//         : scroller.querySelectorAll('.scroll-stack-card')
//     );

//     cardsRef.current = cards;
//     const transformsCache = lastTransformsRef.current;

//     cards.forEach((card, i) => {
//       if (i < cards.length - 1) {
//         card.style.marginBottom = `${itemDistance}px`;
//       }
//       card.style.willChange = 'transform, filter';
//       card.style.transformOrigin = 'top center';
//       card.style.backfaceVisibility = 'hidden';
//       card.style.transform = 'translateZ(0)';
//       card.style.webkitTransform = 'translateZ(0)';
//       card.style.perspective = '1000px';
//       card.style.webkitPerspective = '1000px';
//     });

//     setupLenis();

//     updateCardTransforms();

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       if (lenisRef.current) {
//         lenisRef.current.destroy();
//       }
//       stackCompletedRef.current = false;
//       cardsRef.current = [];
//       transformsCache.clear();
//       isUpdatingRef.current = false;
//     };
//   }, [
//     itemDistance,
//     itemScale,
//     itemStackDistance,
//     stackPosition,
//     scaleEndPosition,
//     baseScale,
//     scaleDuration,
//     rotationAmount,
//     blurAmount,
//     useWindowScroll,
//     onStackComplete,
//     setupLenis,
//     updateCardTransforms
//   ]);

//   // Container styles based on scroll mode
//   const containerStyles = useWindowScroll
//     ? {
//         // Global scroll mode - no overflow constraints
//         overscrollBehavior: 'contain',
//         WebkitOverflowScrolling: 'touch',
//         WebkitTransform: 'translateZ(0)',
//         transform: 'translateZ(0)'
//       }
//     : {
//         // Container scroll mode - original behavior
//         overscrollBehavior: 'contain',
//         WebkitOverflowScrolling: 'touch',
//         scrollBehavior: 'smooth',
//         WebkitTransform: 'translateZ(0)',
//         transform: 'translateZ(0)',
//         willChange: 'scroll-position'
//       };

//   const containerClassName = useWindowScroll
//     ? `relative w-full ${className}`.trim()
//     : `relative w-full  h-full overflow-y-auto overflow-x-visible ${className}`.trim();

//   return (
//     <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
//       <div className="scroll-stack-inner w-full h-full min-h-screen ">
//         {children}
//         {/* Spacer so the last pin can release cleanly */}
//         <div className="scroll-stack-end w-full h-px" />
//       </div>
//     </div>
//   );
// };

// export default ScrollStack;

'use client';

import { Children, useEffect, useRef, useState } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '', BGColor = 'bg-white' }) => (
  <div
    className={`scroll-stack-card relative w-full h-full overflow-auto p-5 rounded-[5px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border ${BGColor} ${itemClassName}`.trim()}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  top = 80,
  cardHeight = '360px',
  maxWidth = '640px',
  gap = '30vh',
  accentColor = '#0097d7',   // couleur des indicateurs
  showProgressBar = true,    // barre fine en haut de la page
}) => {
  const items = Children.toArray(children);
  const total = items.length;

  const stackRef = useRef(null);
  const wrappersRef = useRef([]);
  const barRef = useRef(null);

  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      // carte épinglée = dernière dont le haut a atteint la position sticky
      let act = 0;
      wrappersRef.current.forEach((w, i) => {
        if (w && w.getBoundingClientRect().top <= top + 1) act = i;
      });
      setActive(act);

      const rect = stackRef.current?.getBoundingClientRect();
      if (rect) setVisible(rect.top < window.innerHeight * 0.5 && rect.bottom > 0);

      if (barRef.current) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        barRef.current.style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
      }
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [top]);

  const isLast = active === total - 1;

  return (
    <>
      <style>{`
        @keyframes ss-bounce { 0%,100% { transform: translateY(0) } 50% { transform: translateY(6px) } }
        @keyframes ss-pulse {
          0% { box-shadow: 0 0 0 0 ${accentColor}80 }
          100% { box-shadow: 0 0 0 18px ${accentColor}00 }
        }
      `}</style>

      {/* Barre de progression */}
      {showProgressBar && visible && (
        <div
          ref={barRef}
          className="fixed top-0 left-0 h-[3px] z-50"
          style={{ background: accentColor, width: 0 }}
        />
      )}

      <div
        ref={stackRef}
        className={`relative w-full mx-auto ${className}`.trim()}
        style={{ maxWidth}}
      >
        {items.map((child, i) => (
          <div
            key={i}
            ref={el => (wrappersRef.current[i] = el)}
            className="sticky w-full"
            style={{
              top,
              height: cardHeight,
              marginBottom: i < total - 1 ? gap : 0,
              zIndex: i + 1,
              borderRadius: 5,
              animation: isLast && i === active ? 'ss-pulse 1.6s ease-out infinite' : 'none'
            }}
          >
            {child}

            {/* Flèche : disparaît sur la dernière carte */}
            {i < total - 1 && (
              <span
                className="absolute left-0 right-0 bottom-2 text-center pointer-events-none"
                style={{ color: accentColor, animation: 'ss-bounce 1.2s ease-in-out infinite' }}
              >
                ↓
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Compteur + points */}
      <div
        className="fixed left-1/2 z-50 flex items-center gap-2.5 rounded-full px-3.5 py-2 text-[12px] text-white transition-all duration-300 pointer-events-none"
        style={{
          bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
          transform: 'translateX(-50%)',
          opacity: visible ? 1 : 0,
          background: isLast ? accentColor : '#1a1d24'
        }}
      >
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <i
              key={i}
              className="block w-[7px] h-[7px] rounded-full bg-white transition-all duration-300"
              style={{ opacity: i === active ? 1 : 0.35, transform: i === active ? 'scale(1.35)' : 'scale(1)' }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollStack;