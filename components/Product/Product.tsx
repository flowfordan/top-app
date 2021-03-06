import { ProductProps } from "./Product.props";
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from "../Card/Card";
import Image from "next/image";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";


export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    
    const [isReviewOpened, setIsReviewOpened] = useState(false);
    const [isFormOpened, setFormOpened] = useState(false);
    const reviewRef = useRef<HTMLDivElement>(null);


    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <div className={className} {...props}>
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image 
                src={product.image.includes('cdn-bucket')? product.image : process.env.NEXT_PUBLIC_DOMAIN + product.image} 
                alt={product.title}
                width={70} height={70}/>
            </div>
            
            <div className={styles.title}>{product.title}</div>
            
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color='green' size="s">
                    {priceRu(product.price - product.oldPrice)}
                </Tag>}
            </div>
            
            <div className={styles.credit}>
                {priceRu(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            
            <div className={styles.rate}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
            
            <div className={styles.tags}>
                {product.categories.map( c => <Tag key={c} color='ghost' size="s">{c}</Tag>)}
            </div>
            
            <div className={styles.priceTitle}>цена</div>
            
            <div className={styles.creditTitle}>кредит</div>
            
            <div className={styles.rateTitle}>
                <a href="#ref" onClick={() => scrollToReview()}>
                  {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}  
                </a>
                
            </div>
            
            
            <Divider className={styles.hr}/>
            
            <div className={styles.description}>{product.description}</div>
            
            <div className={styles.features}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))}
            </div>
            
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <div>{product.disadvantages}</div>                    
                </div> }
                               
            </div>

            <Divider className={styles.hr2}/>
            
            <div className={styles.actions}>

                <Button appearance="primary">
                    Узнать подробнее
                </Button>

                <Button appearance="ghost" 
                arrow={isReviewOpened? 'down':'right'} 
                className={styles.reviewButton} 
                onClick={() => {
                    setIsReviewOpened(!isReviewOpened);
                    setFormOpened(false);
                }}
                disabled={product.reviews.length === 0}>
                    {product.reviews.length === 0? 'Отзывов нет...пока' : 'Читать отзывы'}
                </Button>

                <Button appearance="ghost" 
                arrow={isFormOpened? 'down':'right'} 
                className={styles.reviewButton} 
                onClick={() => {
                    setFormOpened(!isFormOpened);
                    setIsReviewOpened(false);
                }}>
                    Написать отзыв
                </Button>
            </div>
        </Card>

        <Card color="blue" className={cn(styles.reviews, {
            [styles.opened]: isReviewOpened,
            [styles.closed]: !isReviewOpened,
        })}>
            {product.reviews.map(review => (
                <div key={review._id}>
                    <Review review={review}/>
                    <Divider />
                </div>
            ))}
        </Card>

        <Card color="blue" className={cn(styles.reviews, {
            [styles.opened]: isFormOpened,
            [styles.closed]: !isFormOpened,
        })} ref={reviewRef}>
            <ReviewForm productId={product._id} />
        </Card>

        </div>
    );
    
};