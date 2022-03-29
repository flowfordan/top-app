import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState } from "react";

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {

    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    
    
    
    const constructRating = (currentRating: number) => {

        const updatedArr = ratingArr.map((r: JSX.Element, i:number) => {
            return(
                <StarIcon key={i} className={cn(styles.star, {
                 [styles.filled]: i < currentRating ,
                 [styles.editable]: isEditable
                })}

                onMouseEnter={() => {changeDisplay(i + 1)}}
                onMouseLeave={() => {changeDisplay(rating)}}

                />
            );
                
            
        });

        setRatingArr(updatedArr);
    };

    const changeDisplay = (r: number) => {
        if(!isEditable){
            return;
        }
        constructRating(r);
    };

    return (
        <div {...props}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
    
};