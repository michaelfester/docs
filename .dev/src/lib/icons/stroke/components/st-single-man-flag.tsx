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
            d="M3 22V9.38889M3 9.38889V3H11L9 6L11 9.38889H3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <circle
            cx="17.5"
            cy="4.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M14 15V10C14 8.89543 14.8954 8 16 8H19C20.1046 8 21 8.89543 21 10V15"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path d="M16 15V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 15V22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
