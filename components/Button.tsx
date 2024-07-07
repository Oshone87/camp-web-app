type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
      <button
          className={`flex items-center justify-center gap-2 rounded-full ${variant} ${full ? 'w-full' : ''}`}
          type={type}
          style={{ padding: '1rem 1.5rem' }} 
      >
          {icon && <img src={icon} alt="icon" width={20} height={20} />}
          <label className="bold-16 text-center whitespace-nowrap">{title}</label>
      </button>
  );
};

export default Button;
