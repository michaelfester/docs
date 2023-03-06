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
            d="M12 16.5L2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10L12 16.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M19 9V4C19 2.89543 18.1046 2 17 2H7C5.89543 2 5 2.89543 5 4V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path d="M9 6H15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 10H15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);
