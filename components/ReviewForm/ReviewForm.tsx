import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {


    const { register, control, handleSubmit } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
            {...props}
            >
                <div className={styles.header}>
                    <Input {...register("name")} placeholder="Имя"/>
                    <Input {...register("rating")} placeholder="Заголовок отзыва"/>
                </div>
                

                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller control={control}
                    name="rating" render={
                        ({field}) => (
                            <Rating rating={field.value} ref={field.ref} isEditable setRating={field.onChange}/>
                        )
                    }/>
                    
                </div>

            <Textarea {...register("description")} className={styles.textarea} placeholder="Текст отзыва"/>

            <div className={styles.submit}>
                    <Button appearance="primary">Отправить отзыв</Button>
                    <span>* Перед публикацией отзыв пройдет проверку модераторами</span>
            </div>
            </div>

            <div className={styles.success}>
                <div className={styles.successTitle}>
                    Ваш отзыв отправлен
                </div>
                <div>
                    Спасибо за ваш отзыв!
                </div>
                <CloseIcon className={styles.close}/>
            </div>
        
        
        
        </form>
    );
    
};