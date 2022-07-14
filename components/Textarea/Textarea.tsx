import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(function Textarea({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) {

    return (
        <textarea  className={cn(className, styles.input)} ref={ref} {...props}/>
    );
    
});