declare module 'aos' {
    export interface AOSOptions {
      duration?: number;
      delay?: number;
      once?: boolean;
      offset?: number;
      easing?: string;
      disable?: string | boolean;
      startEvent?: string;
    }
  
    export function init(options?: AOSOptions): void;
    export function refresh(): void;
    export function refreshHard(): void;
  }
  