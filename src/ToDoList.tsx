import { useForm } from "react-hook-form";
import { errorSelector } from "recoil";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }

    //setError("extraError", { message: "Server offLine" });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noHaeun: (value) =>
                value.includes("haeun") ? "no haeun allowed" : true,
              noHeann: (value) =>
                value.includes("heann") ? "no heann allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "write here",
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", { required: "write here" })}
          placeholder="Username"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your Password is too short",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
