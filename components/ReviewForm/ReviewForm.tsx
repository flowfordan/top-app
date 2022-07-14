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
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {


    const { register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
    const [isFormSuccess, toggleFormSuccess] = useState<boolean>(false);
    const [formError, setFormError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
          const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
          if(data.message){
            toggleFormSuccess(true);
            reset();
          }  else {
            setFormError('Что-то пошло не так');
          }
        } catch (e) {
            if (typeof e === "string"){
                setFormError(e);
            } else if (e instanceof Error){
                setFormError(e.message);
            }
        }
        
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
                    rules={{required: {value: true, message: "Установите рейтинг"}}}
                    name="rating" render={
                        ({field}) => (
                            <Rating rating={field.value} ref={field.ref} 
                            isEditable setRating={field.onChange}
                            error={errors.rating}/>
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

            {isFormSuccess && 
            
            <div className={styles.success}>
                <div className={styles.successTitle}>
                    Ваш отзыв отправлен
                </div>
                <div>
                    Спасибо за ваш отзыв!
                </div>
                <CloseIcon className={styles.close} onClick={() => toggleFormSuccess(false)}/>
            </div>}

            {formError && 
            
            <div className={styles.error}>
                <div className={styles.errorTitle}>
                    {`Произошла ошибка :(`}
                </div>
                <div>
                    <div>
                        {formError}
                    </div>
                    <div>
                        {`Попробуйте обновить страницу`}
                    </div>
                    
                    
                </div>
                <CloseIcon className={styles.close} onClick={() => setFormError(undefined)}/>
            </div>}

        </form>
    );
    
};