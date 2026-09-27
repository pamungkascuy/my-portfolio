import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export function LaravelLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 6.4L18.7 4.8C18.4 4.6 18 4.6 17.7 4.8L12.5 7.8L9.7 6.2C9.4 6 9 6 8.7 6.2L3.5 9.2C3.2 9.4 3 9.7 3 10.1V16.1C3 16.5 3.2 16.8 3.5 17L8.7 20C9 20.2 9.4 20.2 9.7 20L17.7 15.4C18 15.2 18.2 14.9 18.2 14.5V11.5L21.5 9.6C21.8 9.4 22 9.1 22 8.7V7.3C22 6.9 21.8 6.6 21.5 6.4ZM8.6 18.6L4.7 16.3V11.8L8.6 14.1V18.6ZM8.6 12.5L4.7 10.2L8.6 7.9L12.5 10.2L8.6 12.5ZM16.5 14L9.8 17.9V14.8L13.8 12.5L16.5 14ZM16.5 12.5L13.8 11L17.1 9.1L19.8 10.6L16.5 12.5ZM20.3 8.3L17.7 6.8L19.8 5.6L20.3 5.9V8.3Z"
        fill="#FF2D20"
      />
    </svg>
  );
}

export function DartLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 17L3 20H6L17 9L14 6L4 17Z" fill="#0081C6" />
      <path d="M14 6L17 9L21 5L18 2L14 6Z" fill="#00B4AB" />
      <path d="M4 17L14 6L11 3L3 11V17H4Z" fill="#01579B" />
      <path d="M6 20H13L21 12L17 9L6 20Z" fill="#29B6F6" />
    </svg>
  );
}

export function FlutterLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.3 2L4 12.3L7.2 15.5L20.7 2H14.3Z" fill="#02569B" />
      <path d="M14.3 12.2L9.4 17.1L12.6 20.3L20.7 12.2H14.3Z" fill="#0175C2" />
      <path d="M8.2 15.9L5 19.1L7.9 22H14.3L11.4 19.1L8.2 15.9Z" fill="#29B6F6" />
      <path d="M11.4 19.1L14.3 22H20.7L14.3 15.6L11.4 19.1Z" fill="#02569B" />
    </svg>
  );
}

export function PythonLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.8H12.1V5.3H5.2C5.2 5.3 2 4.9 2 9.5C2 14.1 4.8 13.9 4.8 13.9H6.2V11.8C6.2 9.5 8.1 9.5 8.1 9.5H12V9C12 7.2 13.6 7.2 13.6 7.2H17.8C17.8 7.2 20.9 7.2 20.9 4.1C20.9 1 18.2 2 18.2 2H11.9ZM10.5 3.3C10.9 3.3 11.2 3.6 11.2 4C11.2 4.4 10.9 4.7 10.5 4.7C10.1 4.7 9.8 4.4 9.8 4C9.8 3.6 10.1 3.3 10.5 3.3Z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6V19.2H11.9V18.7H18.8C18.8 18.7 22 19.1 22 14.5C22 9.9 19.2 10.1 19.2 10.1H17.8V12.2C17.8 14.5 15.9 14.5 15.9 14.5H12V15C12 16.8 10.4 16.8 10.4 16.8H6.2C6.2 16.8 3.1 16.8 3.1 19.9C3.1 23 5.8 22 5.8 22H12.1ZM13.5 20.7C13.1 20.7 12.8 20.4 12.8 20C12.8 19.6 13.1 19.3 13.5 19.3C13.9 19.3 14.2 19.6 14.2 20C14.2 20.4 13.9 20.7 13.5 20.7Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function TypeScriptLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M4.5 10H9.5V11.5H7.7V18H6.3V11.5H4.5V10ZM12.7 14.2C12.7 13.4 13.2 12.8 14.2 12.4C14.9 12.1 15.6 11.8 15.6 11.2C15.6 10.8 15.2 10.5 14.5 10.5C13.8 10.5 13.3 10.8 13.2 11.4H11.7C11.9 10.1 13 9.2 14.6 9.2C16.1 9.2 17.2 10.1 17.2 11.2C17.2 12.1 16.6 12.7 15.6 13.1C14.8 13.4 14.3 13.7 14.3 14.3C14.3 14.8 14.8 15.1 15.5 15.1C16.3 15.1 16.9 14.7 17 14H18.5C18.3 15.4 17.1 16.4 15.4 16.4C13.7 16.4 12.7 15.4 12.7 14.2Z"
        fill="white"
      />
    </svg>
  );
}

export function ReactLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12" cy="12" rx="3.5" ry="9.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" fill="#000000" />
      <path
        d="M16.5 8.5V15.5M16.5 8.5L9.5 17.5M9.5 8.5V17.5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TailwindLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6C9 6 7.2 7.5 6.6 10.5C7.8 8.8 9.3 8.2 11.1 8.7C12.1 9 12.9 9.8 13.8 10.7C15.2 12.1 16.8 13.8 21 13.8C24 13.8 25.8 12.3 26.4 9.3C25.2 11 23.7 11.6 21.9 11.1C20.9 10.8 20.1 10 19.2 9.1C17.8 7.7 16.2 6 12 6ZM3 13.8C0 13.8 -1.8 15.3 -2.4 18.3C-1.2 16.6 0.3 16 2.1 16.5C3.1 16.8 3.9 17.6 4.8 18.5C6.2 19.9 7.8 21.6 12 21.6C15 21.6 16.8 20.1 17.4 17.1C16.2 18.8 14.7 19.4 12.9 18.9C11.9 18.6 11.1 17.8 10.2 16.9C8.8 15.5 7.2 13.8 3 13.8Z"
        transform="scale(0.8) translate(3, 1)"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function MySQLLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 13.2C20.9 11.5 19.3 10.5 17.6 10.8C16.3 11 15.4 11.9 14.8 13C14.2 11.8 13 11 11.5 11C9.6 11 8 12.4 7.6 14.2C7.3 13.3 6.6 12.6 5.6 12.6C4.4 12.6 3.4 13.6 3.4 14.8C3.4 16.7 5.2 18.5 7.5 18.5C9.7 18.5 11.4 17 11.8 15.1C12.1 16.5 13.4 17.5 14.9 17.5C16.6 17.5 18 16.3 18.4 14.7C19.2 15.3 20.2 15.4 21 14.9C21.8 14.4 21.8 13.7 21.5 13.2Z"
        fill="#00758F"
      />
      <circle cx="19.5" cy="8.5" r="1.5" fill="#F29111" />
    </svg>
  );
}

export function PostgreSQLLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.5 2 2 6.5 2 12C2 15.6 3.9 18.7 6.8 20.4C6.5 18.8 6.5 17.1 6.8 15.6C7.3 13.4 8.7 11.5 10.6 10.4C10.1 9.4 10.1 8.2 10.6 7.2C11.3 5.9 12.7 5.1 14.2 5.2C15.8 5.3 17.1 6.3 17.6 7.8C18.6 8.5 19.3 9.6 19.5 10.9C20.8 12.2 21.4 14.1 21.1 16C21.7 14.8 22 13.4 22 12C22 6.5 17.5 2 12 2Z"
        fill="#336791"
      />
    </svg>
  );
}

export function SupabaseLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2 2.5L3.6 13.7C3.1 14.3 3.5 15.2 4.4 15.2H11.5L10.8 21.5C10.7 22.3 11.8 22.7 12.3 22.1L20.4 12.8C20.9 12.2 20.5 11.3 19.6 11.3H13.5L14.2 3.1C14.3 2.3 13.7 1.9 13.2 2.5Z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

export function DockerLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 11.5C21.8 11.5 21.2 11.9 20.8 12.4C19.7 11.2 18.2 10.5 16.5 10.5V9.5H18.5V7.5H16.5V5.5H14.5V7.5H12.5V5.5H10.5V7.5H8.5V9.5H14.5V10.5H4.5C3.2 10.5 2.1 11.3 1.7 12.5C1.3 13.7 1.6 15 2.5 15.9C4.5 17.9 7.8 19.5 12 19.5C18.2 19.5 21.5 16.2 22.3 13.2C22.8 13.2 23.2 12.8 23.2 12.3C23.2 11.9 22.9 11.5 22.5 11.5Z"
        fill="#2496ED"
      />
    </svg>
  );
}

export function GitLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7 10.9L13.1 2.3C12.7 1.9 12 1.9 11.6 2.3L9.6 4.3L12 6.7C12.6 6.5 13.3 6.6 13.8 7.1C14.3 7.6 14.4 8.3 14.2 8.9L16.6 11.3C17.2 11.1 17.9 11.2 18.4 11.7C19.1 12.4 19.1 13.5 18.4 14.2C17.7 14.9 16.6 14.9 15.9 14.2C15.4 13.7 15.3 13 15.5 12.4L13.3 10.2V15.2C13.5 15.4 13.7 15.7 13.8 16C14.3 17 13.8 18.2 12.8 18.7C11.8 19.2 10.6 18.7 10.1 17.7C9.6 16.7 10.1 15.5 11.1 15C11.4 14.8 11.7 14.7 12 14.7V9.7C11.7 9.7 11.4 9.6 11.1 9.4C10.4 8.9 10.1 8 10.4 7.2L8 4.8L2.3 10.5C1.9 10.9 1.9 11.6 2.3 12L10.9 20.6C11.3 21 12 21 12.4 20.6L21.7 11.3C22.1 12 22.1 11.3 21.7 10.9Z"
        fill="#F05032"
      />
    </svg>
  );
}

export function PHPLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#777BB4" />
      <path
        d="M6.5 14V10H8.5C9.3 10 9.8 10.4 9.8 11.1C9.8 11.8 9.3 12.2 8.5 12.2H7.5V14H6.5ZM11 14V10H12V11.5H13.5V10H14.5V14H13.5V12.5H12V14H11ZM16 14V10H18C18.8 10 19.3 10.4 19.3 11.1C19.3 11.8 18.8 12.2 18 12.2H17V14H16Z"
        fill="white"
      />
    </svg>
  );
}

export function NodeLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L3.5 6.9V16.8L12 21.7L20.5 16.8V6.9L12 2ZM12 4.3L18.7 8.2V15.7L12 19.6L5.3 15.7V8.2L12 4.3Z"
        fill="#5FA04E"
      />
      <path d="M12 7.5L8.5 9.5V13.5L12 15.5L15.5 13.5V9.5L12 7.5Z" fill="#5FA04E" />
    </svg>
  );
}

export function GoogleMLKitLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z"
        stroke="#4285F4"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="2" fill="#EA4335" />
      <circle cx="7.5" cy="14.5" r="2" fill="#FBBC05" />
      <circle cx="16.5" cy="14.5" r="2" fill="#34A853" />
      <path
        d="M12 9V12M12 12L9 13.5M12 12L15 13.5"
        stroke="#4285F4"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MediaPipeLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="5" r="2.5" fill="#00796B" />
      <circle cx="6" cy="12" r="2.5" fill="#00897B" />
      <circle cx="18" cy="12" r="2.5" fill="#00897B" />
      <circle cx="9" cy="19" r="2.5" fill="#4DB6AC" />
      <circle cx="15" cy="19" r="2.5" fill="#4DB6AC" />
      <path d="M12 7.5L6 12L9 19M12 7.5L18 12L15 19M6 12H18" stroke="#004D40" strokeWidth="1.5" />
    </svg>
  );
}

export function MikroTikLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#293241" />
      <path d="M5 12H7M9 12H11M13 12H15M17 12H19" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="6" cy="8" r="1" fill="#06D6A0" />
      <circle cx="9" cy="8" r="1" fill="#FFD166" />
      <circle cx="12" cy="8" r="1" fill="#EF476F" />
    </svg>
  );
}

export function CSSLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 3L5 20L12 22L19 20L21 3H3Z" fill="#1572B6" />
      <path d="M12 4.5V20.2L17.5 18.7L19.2 4.5H12Z" fill="#33A9DC" />
      <path
        d="M12 8.5H7.7L8 11.2H12M12 13.8H9.3L9.5 16.2L12 16.9M16.3 8.5H12V11.2H16.1L15.7 15.5L12 16.5V18.2L16.8 16.8L17.2 8.5H16.3Z"
        fill="white"
      />
    </svg>
  );
}

export function TriPayLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#1E40AF" />
      <path d="M2 9H22" stroke="white" strokeWidth="2" />
      <circle cx="7" cy="14" r="1.5" fill="#60A5FA" />
      <rect x="11" y="13" width="7" height="2" rx="1" fill="#93C5FD" />
    </svg>
  );
}

export function ComputerVisionLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#6B9080" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="#6B9080" />
      <path d="M4 12H7M17 12H20M12 4V7M12 17V20" stroke="#6B9080" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function RestAPILogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="6" width="18" height="12" rx="3" fill="#6B9080" />
      <path d="M7 12H9M11 12H13M15 12H17" stroke="#F6FFF8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="6" cy="12" r="1" fill="#F6FFF8" />
    </svg>
  );
}

export function FigmaLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
      <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
    </svg>
  );
}

export function CanvaLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
      <path d="M14.5 9.5C13.8 8.5 12.6 8 11.2 8C8.8 8 7 10 7 12.5C7 15 8.8 17 11.2 17C12.8 17 14 16.2 14.7 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function CorelDrawLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#00843D" />
      <path d="M12 4C8.5 4 6 7 6 10.5C6 13.5 8 16 10.5 17.5V19.5H13.5V17.5C16 16 18 13.5 18 10.5C18 7 15.5 4 12 4Z" fill="white" fillOpacity="0.9" />
      <path d="M10 20H14V21H10V20Z" fill="white" />
    </svg>
  );
}

export function PixelLabLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#1E88E5" />
      <path d="M7 6H13C15.2 6 17 7.8 17 10C17 12.2 15.2 14 13 14H10V18H7V6Z" fill="white" />
      <circle cx="10" cy="10" r="1.5" fill="#1E88E5" />
    </svg>
  );
}

export function AlightMotionLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0E1921" />
      <path d="M4 14C7 8 10 8 12 12C14 16 17 16 20 10" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#FF4081" />
    </svg>
  );
}

export function CapCutLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path d="M5 8L12 12L5 16V8Z" fill="white" />
      <path d="M19 8L12 12L19 16V8Z" fill="white" />
      <line x1="6" y1="6" x2="18" y2="18" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AdobePremiereLogo({ className = 'w-4 h-4', size }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#00005B" stroke="#9999FF" strokeWidth="1.5" />
      <text x="4.5" y="16.5" fill="#EA77FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Pr</text>
    </svg>
  );
}

export function getTechLogo(techName: string, className = 'w-4 h-4'): React.ReactNode {
  const norm = techName.toLowerCase().trim();

  if (norm.includes('flutter')) return <FlutterLogo className={className} />;
  if (norm.includes('dart')) return <DartLogo className={className} />;
  if (norm.includes('laravel')) return <LaravelLogo className={className} />;
  if (norm.includes('python')) return <PythonLogo className={className} />;
  if (norm.includes('typescript')) return <TypeScriptLogo className={className} />;
  if (norm.includes('react')) return <ReactLogo className={className} />;
  if (norm.includes('next')) return <NextjsLogo className={className} />;
  if (norm.includes('tailwind')) return <TailwindLogo className={className} />;
  if (norm.includes('mysql')) return <MySQLLogo className={className} />;
  if (norm.includes('postgres')) return <PostgreSQLLogo className={className} />;
  if (norm.includes('supabase')) return <SupabaseLogo className={className} />;
  if (norm.includes('docker')) return <DockerLogo className={className} />;
  if (norm.includes('git')) return <GitLogo className={className} />;
  if (norm.includes('php')) return <PHPLogo className={className} />;
  if (norm.includes('node') || norm.includes('express')) return <NodeLogo className={className} />;
  if (norm.includes('ml kit') || norm.includes('google ml') || norm.includes('mlkit'))
    return <GoogleMLKitLogo className={className} />;
  if (norm.includes('mediapipe') || norm.includes('opencv')) return <MediaPipeLogo className={className} />;
  if (norm.includes('mikrotik') || norm.includes('network') || norm.includes('routing'))
    return <MikroTikLogo className={className} />;
  if (norm.includes('tripay')) return <TriPayLogo className={className} />;
  if (norm.includes('computer vision')) return <ComputerVisionLogo className={className} />;
  if (norm.includes('css')) return <CSSLogo className={className} />;
  if (norm.includes('rest api')) return <RestAPILogo className={className} />;
  if (norm.includes('figma')) return <FigmaLogo className={className} />;
  if (norm.includes('canva')) return <CanvaLogo className={className} />;
  if (norm.includes('corel')) return <CorelDrawLogo className={className} />;
  if (norm.includes('pixel')) return <PixelLabLogo className={className} />;
  if (norm.includes('alight')) return <AlightMotionLogo className={className} />;
  if (norm.includes('capcut')) return <CapCutLogo className={className} />;
  if (norm.includes('premiere')) return <AdobePremiereLogo className={className} />;

  return null;
}
