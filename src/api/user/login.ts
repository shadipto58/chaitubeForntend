import { api } from "../api"


const Login = async (data) => {
    try {
        const response = await api.post(`/users/login`,data);
        return response.data
    } catch (error) {
        console.log("The Error in Login api is:",error);
        
        throw error
    }
}

export default Login;