export const icon = ({ className }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M8 13L16 17" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 11L16 7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
