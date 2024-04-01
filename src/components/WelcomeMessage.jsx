import styles from "./WelcomeMessage.module.css"
const WelcomeMessage=({todoItems})=>
{
  return <>{todoItems.length === 0 && <h4 className={styles.heading}>|You Have no task pending, You Might want to add a Task|</h4>}</>;
};
export default WelcomeMessage;