import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";


const Input = forwardRef(function Input ({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {

    return (
        <input type="text" className={cn(className, styles.input)} ref={ref} {...props}/>
    );
    
});

export { Input };