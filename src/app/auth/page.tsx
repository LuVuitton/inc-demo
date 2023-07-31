'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import s from './auth.module.scss'

type Inputs = {
    userName: string,
    email:string,
    password:string,
    passwordConfirm:string,
    agreement: boolean,
};

export default function AuthPage() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("userName")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className={s.mainWrapper}>
      <div className={s.formWrapper}>
      <div>
      username:
      <input {...register("userName",  { required: true })} />
      {errors.email && <span>This field is required</span>}
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <div>
      email:
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      </div>
      <div>
      password:
      <input type="password"  {...register("password",  { required: true })}/>
      {errors.password && <span>This field is required</span>}
      </div>
      <div>
      confirm password:
      <input type="password"  {...register("passwordConfirm",  { required: true })}/>
      {errors.passwordConfirm && <span>This field is required</span>}
      </div>

      <div>
      <input type="checkbox" {...register("userName", { required: true })} />
      I agree to the Terms of Service and Privacy Policy
      {errors.agreement && <span>This field is required</span>}

      </div>


      <input type="submit" />
      </div>
      </div>
    </form>
  );
}