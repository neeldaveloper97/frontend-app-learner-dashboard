
// Utility function to combine class names (replace with your preferred method)
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// Simple Icon component (replace with your preferred icon library)
const Icon = ({ icon, className }) => {
    // This is a placeholder - replace with your actual icon implementation
    // You might use react-icons, heroicons, or any other icon library
    return <span className={className}>{icon}</span>;
};

const Input = ({
    className = "",
    type = "text",
    leftIcon,
    rightIcon,
    onRightIconClick,
    ...props
}) => {
    return (
        <div className="flex relative min-w-80 w-full md:w-fit">
            {leftIcon && (
                <div
                    className="absolute top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                    style={{ left: '16px' }}
                >
                    <img src={leftIcon} className="size-5" alt="" />
                </div>
            )}

            <input
                type={type}
                data-slot="input"
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border border-contentBorderSecondary bg-transparent pr-3 py-2.5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-neutral-200 focus-visible:ring-1",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    leftIcon && "pl-9",
                    rightIcon && "pr-9",
                    className
                )}
                {...props}
                style={leftIcon ? { paddingLeft: '44px' } : {}}
            />

            {rightIcon && (
                <div
                    className={cn(
                        "absolute right-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground",
                        onRightIconClick && "cursor-pointer hover:text-foreground"
                    )}
                    onClick={onRightIconClick}
                >
                    <Icon icon={rightIcon} className="size-5" />
                </div>
            )}
        </div>
    );
};

export default Input;