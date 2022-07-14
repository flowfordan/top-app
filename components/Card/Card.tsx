import { CardProps } from "./Card.props";
import styles from './Card.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(function Card(
    { color='white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>){

    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color == 'blue'
        })}
        {...props}
        ref={ref}
        >
            {children}
        </div>
    );
    
});