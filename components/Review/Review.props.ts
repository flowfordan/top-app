import { ReviewModel } from './../../interfaces/product.interface';
import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: ReviewModel
}