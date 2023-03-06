export const icon = ({ className }: { className?: string }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
            d="M20 9.8C20 16.63 12 22 12 22C12 22 4 16.63 4 9.8C4 5.49 7.58172 2 12 2C16.4183 2 20 5.49 20 9.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);
