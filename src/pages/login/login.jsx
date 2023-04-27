import { useState } from "react";
import { useCookies } from "react-cookie";
import "./login.css"

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    async function login() {
        await fetch('https://e-commerce.urownsite.xyz/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setCookie('auth_key', response.authorization);
                if (response.status === "Success") {
                    window.location.href = "/"
                }
                else alert("Wrong Password or No Such User exists");
        });
    }
    const [cookie, setCookie] = useCookies();


    function handle(e) {
        const n = { ...form };
        n[e.target.name] = e.target.value;
        setForm(n);
    }


   

    return (
        <div className="l">
            <h1>Login</h1>
            <input required type="text" name="email" placeholder="Your email" onChange={(e) => handle(e)} />
            <input required type="password" name="password" placeholder="Your Password" onChange={(e) => handle(e)} />
            <input type="button" value="Login" onClick={login} />
        </div>
    )
}

export default Login;