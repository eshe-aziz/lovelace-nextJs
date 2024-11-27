// "use client" //client side
// import { ChangeEvent, useState } from 'react' 

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     console.log

    


//     return(
//         <form className="w-6/12 border p-10">
//             <h2>LOGIN</h2>
//             <input placeholder="Enter username" type="required"  className="border border-gray-500 rounded-md w-full py-4 px-2 mt-2" onChange={(event: ChangeEvent<HTMLInputElement>)=> setUsername(event.target.value)}/>
//             <br/>
//             <input placeholder="Enter password" type="password" className="border border-gray-500 rounded-md w-full py-4 px-2 my-4" onChange={(event: ChangeEvent<HTMLInputElement>)=> setPassword(event.target.value)}/>
//             <br/>
//             <button type="submit" className="bg-green-500 text-white py-2 px-3 rounded-md">Submit</button>
//         </form>
//     )
// }

// export default Login

"use client"
import { ChangeEvent, useState } from "react";
import { userLogin } from "../utils/userLogin";
import { error } from "console";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            setLoading(true);
            const response = await userLogin({ username, password });
            setResponse(response.message ?? 'successful login')
            console.log({ response });
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            const message = (error as Error).message;
            setError(message)
            console.log({ message })
        }
    };
    return (
        <form className="w-2/5 border p-10" onSubmit={handleLogin}>
            <h2>LOGIN</h2>
            <input placeholder="Enter username" type="text" required className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} />
            <br />
            <input placeholder="Enter password" type="text" required className="border w-full px-4 py-6 border-gray-500 rounded-xl mt-4"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setpassword(event.target.value)} />
            <br />
            <br />
            <button className="rounded-xl bg-green-500 text-white cursor-pointer px-6 py-4"
            >
                {loading ? 'loading...' : 'Submit'}</button>
            {response && <p className="text-green-500 text-sm">{response}</p>}
            {error && <p className="text-red-500 text text-sm"> {error}</p>}
        </form>
    );
};
export default Login;