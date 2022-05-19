import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { Advantages, Htag, Paragraph, Tag } from "../../components";
import { HHData } from "../../components/HHData/HHData";
import { TopLevelCategory } from "../../interfaces/page.interface";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <span>Сортировка</span>
                {products && products.length}
            </div>

            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color="red" size="m">hh.ru</Tag>
            </div>

             {firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh}/>}
             {page.advantages && page.advantages.length > 0 && <>
                <Htag tag="h2">Преимущества</Htag>
                <Advantages advantages={page.advantages}></Advantages>
             </>}
            {page.seoText && <Paragraph>{page.seoText}</Paragraph>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <span key={t}><Tag  color="primary">{t}</Tag></span>)}
        </div> 
    );
    
};