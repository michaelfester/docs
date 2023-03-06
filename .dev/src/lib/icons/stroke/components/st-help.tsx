export const icon = ({ className }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M12 18V18.001"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
        />
        <path
            d="M9 9.11111C9 7.39289 10.3431 6 12 6C13.6569 6 15 7.39289 15 9.11111C15 10.1884 14.472 11.1379 13.6696 11.6963C12.8637 12.2571 12 13.0182 12 14V14V15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);
