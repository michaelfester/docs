export const icon = ({ className }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M17 3H7" stroke="currentColor" strokeWidth="1.5" />
        <rect
            x="2"
            y="6"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path d="M10 13H2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 13H22" stroke="currentColor" strokeWidth="1.5" />
        <rect
            x="10"
            y="11"
            width="4"
            height="4"
            stroke="currentColor"
            strokeWidth="1.5"
        />
    </svg>
);
