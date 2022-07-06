import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
import React from "react";


const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input ({ className, ...props }: InputProps, ref) {

    return (
        <input type="text" className={cn(className, styles.input)} ref={ref} {...props}/>
    );
    
});

export { Input };