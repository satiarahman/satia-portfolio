import '@testing-library/jest-dom/vitest';

// Mock Next.js modules commonly used in components
vi.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      prefetch: vi.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
  } as const;
});

vi.mock('next/link', () => {
  return {
    default: ({ children, href, ...rest }: any) => (
      <a href={typeof href === 'string' ? href : '#'} {...rest}>{children}</a>
    ),
  };
});

vi.mock('next/image', () => {
  return {
    default: (props: any) => {
      // Render a basic img in tests
      const { src, alt, ...rest } = props || {};
      return <img src={src} alt={alt} {...rest} />;
    },
  };
});





