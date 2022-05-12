import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';


const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    {route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {

    const router = useRouter();

    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if(m._id.secondCategory === secondCategory){
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
              {firstLevelMenu.map(menuItem => (
                  <div key={menuItem.route}>
                      <Link href={`/${menuItem.route}`}>
                        <a>
                          <div className={cn(styles.firstLevel, {
                              [styles.firstLevelActive]: menuItem.id === firstCategory
                          })}>
                              {menuItem.icon}
                              <span>{menuItem.name}</span>
                          </div>
                        </a>
                      </Link>
                      
                      {menuItem.id === firstCategory && buildSecondLevel(menuItem)}
                  </div>
              ))}  
            </>
        )
    };

    const buildSecondLevel = (firstLevelItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(menuItem => {

                    if(menuItem.pages.map(p => p.alias).includes(router.asPath.split('/')[2])){
                        menuItem.isOpened = true;
                    }

                    return (
                       <div key={menuItem._id.secondCategory}>
                           <div className={styles.secondLevel} onClick={() => openSecondLevel(menuItem._id.secondCategory)}>
                                {menuItem._id.secondCategory}
                           </div>
                           <div className={cn(styles.secondLevelBlock, {
                               [styles.secondLevelBlockOpened]: menuItem.isOpened
                           })}>
                                {buildThirdLevel(menuItem.pages, firstLevelItem.route)}
                           </div>

                       </div> 
                    );
                }  
                )}
            </div>
        )
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <Link href={`/${route}/${page.alias}`} key={page.category}>
                    <a   className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
                    })}>
                        {page.category}
                    </a>
                </Link>
                
            ))
        )
        ;
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
    
};