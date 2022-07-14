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


    const { register, control, handleSubmit, formState: {errors} } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
            {...props}
            >
                <div className={styles.header}>
                    <Input 
                    {...register("name", {required: {value: true, message: "Введите имя"}})} 
                    placeholder="Имя"
                    error={errors.name}/>

                    <Input 
                    {...register("title", {required: {value: true, message: "Введите заголовок"}})} 
                    placeholder="Заголовок отзыва"
                    error={errors.title}/>
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

            <Textarea 
            {...register("description", {required: {value: true, message: "Введите текст отзыва"}})} 
            className={styles.textarea} 
            placeholder="Текст отзыва"
            error={errors.description}/>

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