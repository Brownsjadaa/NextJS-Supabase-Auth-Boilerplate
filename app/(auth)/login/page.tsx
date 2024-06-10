import LoginSignUpForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl tracking-tighter font-bold">Login</h1>
        <LoginSignUpForm />
      </div>
    </div>
  );
}
