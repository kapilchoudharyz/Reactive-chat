import LoginButton from "./components/LoginButton.jsx";
import {FcGoogle} from "react-icons/fc";
import {TfiEmail} from "react-icons/tfi";

function LoginPage() {
    return (
        <section className={'scroll-auto flex flex-col justify-between min-h-screen w-full bg-chat_bg text-chat_col p-4'}>
            <h1 className={'text-5xl leading-tight font-medium text-sent_chat_col mt-32'}>Welcome to <br/> the Reactive Chat</h1>
            <div className={'flex flex-col gap-y-7 p-6'}>
                <LoginButton logo={<FcGoogle/>}>Login with Google</LoginButton>
                <LoginButton logo={<TfiEmail/>}>Login with E-mail</LoginButton>
            </div>
        </section>
    );
}

export default LoginPage;
