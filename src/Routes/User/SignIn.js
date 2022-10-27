import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';



const SignIn = () => {

    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onValid = async ({ userid, password }) => {
        console.log('userid:::',userid)
        console.log('password:::',password)
  
        setValue("password", "");
    }
    return (
            <div>
                <div style={{textAlign:'center'}}>
                    <h2>Sign In</h2>
                </div>
                
                <div style={{textAlign:'center'}}>
                
                    <div>
                        <div className="flex justify-center items-center">
                            
                        </div>
                        <form onSubmit={handleSubmit(onValid)}>
                        
                            <div>
                                <label htmlFor="id">
                                    Username
                                </label>
                                <div>
                                    <input
                                        {...register("userid", { required: "아이디를 입력해 주세요." })}
                                        type="text"
                             
                                    />
                                    <ErrorMessage
                                        name="userid"
                                        errors={errors}
                                        render={
                                            ({ message }) =>
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
                                        {...register('password', { required: "비밀번호를 입력해 주세요" })}
                                        type="password"
                         
                                    />
                                    <ErrorMessage
                                        name="password"
                                        errors={errors}
                                        render={({ message }) =>
                                            <p className="text-rose-500">
                                                {message}
                                            </p>
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                    <button>
                        <a href="./user/signup">
                            Sign Up
                        </a>
                    </button>
                </div>

            </div>

    );
}

export default SignIn;