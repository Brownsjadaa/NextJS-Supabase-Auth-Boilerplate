import ForgotPassForm from "../components/ForgotPassForm";

export default function ForgotPassPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl tracking-tighter font-bold">Forgot Password</h1>
        <ForgotPassForm />
      </div>
    </div>
  );
}
