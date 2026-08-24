/**
 * Card — Modern elevated surface.
 * Uses the shared design token classes for consistent shadow, border and radius.
 */
export default function Card({ className = '', children, ...props }) {
    return (
        <div
            className={`ds-card ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
