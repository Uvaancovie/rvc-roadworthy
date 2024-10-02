declare module '@splidejs/react-splide' {
    import { ComponentType } from 'react';
  
    export interface SplideProps {
      options?: Record<string, any>;
      children: React.ReactNode;
    }
  
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<{ children: React.ReactNode }>;
  }
  