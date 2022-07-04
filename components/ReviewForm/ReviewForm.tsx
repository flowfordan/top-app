import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import UserIcon from "./user.svg";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import { Rating } from "../Rating/Rating";


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    return (
        <div className={cn(styles.reviewForm, className)}
        {...props}
        >
            test
        </div>
    );
    
};