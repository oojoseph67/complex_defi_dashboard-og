import { useAddress, useMetamask } from "@thirdweb-dev/react";

function Login() {
    const connectWIthMetamask = useMetamask();
    return (
        <div>
            <button
                onClick={connectWIthMetamask}
            >
                Login with Metamask
            </button>
        </div>
    )
}

export default Login;