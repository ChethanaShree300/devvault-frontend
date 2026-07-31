function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mt-2">
          Sign in to continue to DevVault
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-violet-400 hover:text-violet-300"
            >
              Forgot Password?
            </button>

          </div>

          <button
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold hover:bg-violet-700 transition"
          >
            Login
          </button>

        </form>

        <p className="mt-8 text-center text-slate-400">

          Don't have an account?

          <span className="ml-2 text-violet-400 cursor-pointer">
            Register
          </span>

        </p>

      </div>

    </div>
  );
}

export default Login;