import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ size='m', children, className, ...props }: ParagraphProps): JSX.Element => {

    return (
        <p className={cn(styles.paragraph, className, {
            [styles.paragraphS]: size == 's',
            [styles.paragraphM]: size == 'm',
            [styles.paragraphL]: size == 'l',
        })}
        {...props}>
            {children}
        </p>
    );
    
};