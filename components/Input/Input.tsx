import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {

    return (
        <input type="text" className={cn(className, styles.input)} {...props}/>
    );
    
};