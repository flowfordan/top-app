import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from "react";
import { ForwardedRef, forwardRef } from "react";

export const Rating = forwardRef(function Rating({ isEditable = false, rating, setRating, error, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>) {

    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    
    
    
    const constructRating = (currentRating: number) => {

        const updatedArr = ratingArr.map((r: JSX.Element, i:number) => {
            return(
                <span key={i}
                className={cn(styles.star, {
                    [styles.filled]: i < currentRating ,
                    [styles.editable]: isEditable
                    })}

                    onMouseEnter={() => {changeDisplay(i + 1);}}
                    onMouseLeave={() => {changeDisplay(rating);}}
                    onClick={() => onClick(i + 1)}>

                        <StarIcon key={i} 
                        tabIndex={isEditable? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}

                    />
                </span>
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

    const onClick = (r: number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(r);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if(e.code != 'Space' || !setRating){
            return;
        }
        setRating(i);
    };

    return (
        <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
            [styles.error]: error
        })}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
    
});