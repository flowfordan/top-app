import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.css';
import cn from 'classnames';
import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, ...props }: TextareaProps, ref) {

    return (
        <textarea  className={cn(className, styles.input)} ref={ref} {...props}/>
    );
    
});