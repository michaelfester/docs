export const icon = ({ className }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
            d="M20 21V19C20 15.134 16.866 12 13 12H11C7.13401 12 4 15.134 4 19V21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);
