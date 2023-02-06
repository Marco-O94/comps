import classNames from "classnames";

function Button({ children,
    primary,
    secondary,
    success,
    danger,
    warning,
    ...rest //Collect all the remain properties and assign them to the variable rest
}) {

   const classes = classNames(rest.className, 'btn', {
    'btn-primary': primary,
    'btn-secondary': secondary,
    'btn-success': success,
    'btn-danger': danger,
    'btn-warning': warning
   });
    return (

        <button {...rest} className={classes} >{children}</button>
    );
}

export default Button;


