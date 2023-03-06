export const icon = ({ className }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M3 6H7M3 12H14M3 18H6.5M11 18H21M18 12H21M11 6H21"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
