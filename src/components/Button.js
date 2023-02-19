import propTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    rounded,
    outlined,
    ...rest
}) => {

    const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outlined,
        'text-blue': outlined && primary,
        'text-gray': outlined && secondary,
        'text-green': outlined && success,
        'text-yellow': outlined && warning,
        'text-red': outlined && danger,
    });

    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkTypeValue: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
                + Number(!!secondary)
                + Number(!!success)
                + Number(!!warning)
                + Number(!!danger);
        
        if (count > 1) {
            return new Error('Button Type cannot be more than one value at the same time!');
        }
    }
}

export default Button;