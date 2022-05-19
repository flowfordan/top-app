import { AdvantagesProps } from "./Advantages.props";
import styles from './Advantages.module.css';
import cn from 'classnames';
import TickIcon from './tick.svg';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {

    return (
        <div >
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <TickIcon />
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div>{a.description}</div>
                </div>
            ))}    
        </div> 
    );
    
};