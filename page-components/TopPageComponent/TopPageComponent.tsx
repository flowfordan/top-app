import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    return (
        <>
            {products && products.length}  
        </> 
    );
    
};