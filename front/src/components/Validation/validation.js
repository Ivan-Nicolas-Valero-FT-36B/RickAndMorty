const validation = (userData, errors, setErrors) => {
    if (!userData.username)  {
    setErrors({...errors, username: "Por favor complete este campo"});
    }else if (userData.username.length > 35) {
        setErrors({...errors, username: "No puede superar los 35 caracteres"});
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
        setErrors({...errors, username: "Email Invalido"});
    }else setErrors({...errors, username: "succes"});

    if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({...errors, password: "La contraseña debe ser entre 6 y 10 caracteres"});
    }else if (!/\d/.test(userData.password)) {
        setErrors({...errors, password: "Debe contener al menos un numero"});
    }else setErrors({...errors, password: ""});
};

export default validation;





//(!/^(?=\w*\d)(?=\w*\[A-Z])(?=\w*\[a-z])\S{6,10}$/.test(userData.password))