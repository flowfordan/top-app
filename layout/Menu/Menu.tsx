import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';




export const Menu = (): JSX.Element => {

    const router = useRouter();
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const variants = {
        visible: {
            marginBottom: 20,
            transition:{
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        }
    };

    const variantsChildren = {
        visible: {
            opacity: [0, 1, 1],
            height: [0, 30, 30]
        },
        hidden: {
            opacity: [1, 0, 0],
            height: [30, 30, 0]
        }
    };

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
                           <motion.div
                           layout
                           variants={variants}
                           initial={menuItem.isOpened? 'visible':'hidden'}
                           animate={menuItem.isOpened? 'visible':'hidden'}
                           className={cn(styles.secondLevelBlock)}>
                                {buildThirdLevel(menuItem.pages, firstLevelItem.route)}
                           </motion.div>

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
                <motion.div key={page.category} variants={variantsChildren}>
                    <Link href={`/${route}/${page.alias}`} >
                        <a   className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
                        })}>
                            {page.category}
                        </a>
                    </Link>
                </motion.div>
                
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