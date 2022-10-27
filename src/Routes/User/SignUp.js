import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const SignUp = () => {
   
    const {register, setValue, setError, formState: {errors}, handleSubmit} = useForm();

    const onValid = async( {userid, password1, password2} ) => {

        if(!(password1 === password2)){
            setError("password2", {
                type: "manual",
                message: "비밀번호가 일치하지 않습니다."
            });
        } else {
            setValue("password1", "");
            setValue("password2", "");
        }

    }

    return (
        <div>
            <div style={{textAlign:'center'}}>
                <h2>
                    Sign Up
                </h2>
            </div>

            <div style={{textAlign:'center'}}>
                <div>
                    <form onSubmit={handleSubmit(onValid)}>
                        <div>
                            <label htmlFor="id">
                                Username
                            </label>
                            <div>
                                <input 
                                    { ...register("userid", { required: "아이디를 입력해 주세요." })}
                                    type="text"
                                />
                                <ErrorMessage
                                    name="userid"
                                    errors={errors}
                                    render={
                                        ({message}) =>
                                        <p className="text-rose-500">
                                            {message}
                                        </p>
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <div>
                                <input
                                    {...register('password1', { 
                                        required: "비밀번호를 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="password1"
                                    errors={errors}
                                    render={ ({message}) =>
                                        <p className="text-rose-500">
                                            {message}
                                        </p>
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">
                                Confirm Password
                            </label>
                            <div>
                                <input
                                    {...register('password2', { 
                                        required: "비밀번호를 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="password2"
                                    errors={errors}
                                    render={ ({message}) =>
                                        <p className="text-rose-500">
                                            {message}
                                        </p>
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                <a href="/">
                    Sign In
                </a>
            </div>
            </div>
        </div>
    )
}

export default SignUp;