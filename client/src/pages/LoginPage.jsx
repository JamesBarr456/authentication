import { Button, Input, LayoutFormAuth } from "../components";



function LoginPage() {
  const title = "Sign in";
  return (
    <LayoutFormAuth title={title}>
      <div className="flex flex-col gap-4 p-6">
        <Input label="Email"/> 
        <Input label="Password"/>
      </div>

      <div className="p-6 pt-0">
        <Button label="Access"/>
        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
          Don&apos;t have an account?
          <a 
            href="/register"
            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
          >
              Sign up
          </a>
        </p>
      </div>
    </LayoutFormAuth>
  )
}

export default LoginPage