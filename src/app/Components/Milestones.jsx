"use client";

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const slides = [
  {
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/71afce28-10bd-4516-84d8-e31321dd953d.png",
    alt: "Animated character running on a glowing colorful cosmic trail with planet Saturn and sun flare in the background in space",
    title: "Achievements & Milestones",
    desc: "Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc."
  },
  {
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8508f67-00ac-4403-b13f-97dc63c92490.png",
    alt: "Futuristic cityscape at night with glowing skyscrapers and neon lights reflecting on water",
    title: "Innovative Designs",
    desc: "Pellentesque habitant morbi tristique senectus. Curabitur venenatis suscipit quam, quis imperdiet elit luctus."
  },
  {
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/85eeb024-c674-4b22-ad02-3fd926b8574f.png",
    alt: "Serene mountain lake with crystal clear reflection and a soft sunrise in amber tones",
    title: "Nature Inspirations",
    desc: "Suspendisse potenti. Cras mollis nibh a lacinia blandit. Donec sed sem sed nulla pulvinar faucibus."
  }
];

const CarouselContainer = styled.div`
  
  height : 55vh;
  margin: 3rem auto;
  margin-bottom : 40vh;
  position: relative;
  text-align: center;
`;

const CarouselInner = styled.div`
    
  height : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  overflow: visible;
`;

const SideCardContainer = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SideImage = styled.div`
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  opacity: ${props => props.isActive ? '1' : '0.3'};
  filter: ${props => props.isActive ? 'brightness(1)' : 'brightness(0.7)'};
  transition: all 0.3s ease;
  aspect-ratio: 4/3;
`;

const SideContent = styled.div`
  text-align: center;
  color: #ccc;
  opacity: ${props => props.isActive ? '1' : '0.7'};
  transition: opacity 0.3s ease;
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${props => props.isActive ? '#fff' : '#aaa'};
  }
  
  p {
    font-size: 0.8rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #bbb;
  }
`;

const MainCard = styled.div`
  width: 50vw;
  background-color: transparent;
  border-radius: 0.5rem;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const CaptionContainer = styled.div`
  margin-top: 1rem;
  color: #ccc;
`;

const CaptionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const CaptionDesc = styled.p`
  max-width: 70%;
  margin: 0 auto;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #aaa;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  bottom:-5;
  transform: translateY(-50%);
  background: white;
  border-radius: 9999px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.25);
  cursor: pointer;
  transition: background-color 0.25s ease;
  border: none;
  z-index: 10;
  
  &:hover {
    background-color: #e5e7eb;
  }
  
  &#prev-btn {
    left: 10px;
  }
  
  &#next-btn {
    right: 10px;
  }
`;

const Milestones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setSlide = (index) => {
    // Clamp index
    let newIndex = index;
    if (newIndex < 0) newIndex = slides.length - 1;
    else if (newIndex >= slides.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => setSlide(currentIndex - 1);
  const goToNext = () => setSlide(currentIndex + 1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      else if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];
  const leftIndex = (currentIndex - 1 + slides.length) % slides.length;
  const rightIndex = (currentIndex + 1) % slides.length;

  return (
    <CarouselContainer role="region" aria-label="Image Carousel">
      <CarouselInner>
        <SideCardContainer>
          <SideImage 
            style={{ backgroundImage: `url('${slides[leftIndex].img}')` }}
            isActive={false}
          />
          <SideContent isActive={false}>
            <h3>{slides[leftIndex].title}</h3>
            <p>{slides[leftIndex].desc}</p>
          </SideContent>
        </SideCardContainer>
        <MainCard>
          <div style={{ 
            flex: 1,
            backgroundImage: `url('${currentSlide.img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0.5rem'
          }} />
        </MainCard>
        <SideCardContainer>
          <SideImage 
            style={{ backgroundImage: `url('${slides[rightIndex].img}')` }}
            isActive={false}
          />
          <SideContent isActive={false}>
            <h3>{slides[rightIndex].title}</h3>
            <p>{slides[rightIndex].desc}</p>
          </SideContent>
        </SideCardContainer>
      </CarouselInner>
      
      <CaptionContainer aria-live="polite" aria-atomic="true">
        <CaptionTitle>{currentSlide.title}</CaptionTitle>
        <CaptionDesc>{currentSlide.desc}</CaptionDesc>
      </CaptionContainer>

      <CarouselButton 
        id="prev-btn" 
        aria-label="Previous Slide" 
        onClick={goToPrev}
        className='ml-[6vw]'
      >
        ←
      </CarouselButton>
      <CarouselButton 
        id="next-btn" 
        aria-label="Next Slide" 
        onClick={goToNext}
        className='mr-[6vw]'
      >
        →
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Milestones;

