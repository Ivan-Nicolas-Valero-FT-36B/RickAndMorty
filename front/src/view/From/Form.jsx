import {useState} from 'react';
import {validation} from '../../components/index';
import styles from '../../CSS/Form.module.css'

const Form = ({login}) => {
    const [userData,setUserData] = useState({
        username: "",
        password: "",
    })
    const [errors,setErrors] = useState({
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        validation ({...userData, [property]: value}, errors, setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form className={styles.Form} onSubmit={submitHandler}>
        <div className={styles.DivForm}>
        <div className={styles.Marco}>
            <div>
                <h1 className={styles.H1Form}> WELCOME TO MY PAGE </h1>
                <h1 className={styles.H1Form}> LOGIN </h1>
            </div>
            <div className={styles.InputForm}>
                <label htmlFor="username">Username:  </label>
                <input type="text" name="username" placeholder="USER" value={userData.username} onChange={handleInputChange}/>
                <p>{errors.username}</p>
            </div>
            <div className={styles.InputForm}>
                <label htmlFor="password">Password:  </label>
                <input type="password" name="password" placeholder="PASSWORD" value={userData.password} onChange={handleInputChange}/>
                <p>{errors.username}</p>
            </div>
            <button className={styles.ButtonForm}>LOGIN</button>
        </div>
        </div>
        </form>
    )
}

export default Form;