import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { SyntheticEvent, useState } from "react";
import { Button } from "../Button/Button";
import GlassIcon from './glass.svg';
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const startSearch = (e: SyntheticEvent) => {
        e.preventDefault();
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    }

    return (
        <form className={cn(className, styles.search)} onSubmit={startSearch} {...props}>
            <Input 
            className={styles.input}
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            />

            <Button appearance="primary"
            className={styles.button}
            onClick={startSearch} 
            type="submit"
            >
                <GlassIcon />
            </Button>
        </form>
    );
    
};