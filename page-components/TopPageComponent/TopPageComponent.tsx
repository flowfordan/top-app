import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { Advantages, Htag, Paragraph, Sort, Tag } from "../../components";
import { HHData } from "../../components/HHData/HHData";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {


    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort});
    };

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="grey" size="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}/>
                {products && products.length}
            </div>

            <div>
                {sortedProducts && sortedProducts.map(p => (<div key={p._id}>{p.title}</div>))}
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
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <span key={t}><Tag  color="primary">{t}</Tag></span>)}
        </div> 
    );
    
};