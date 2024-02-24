import { useState, useCallback } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = useCallback((e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setFirstName("");
      setSecondName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="w-full h-screen bg-blue-300 grid place-content-center font-inter text-slate-600">
      <div className="bg-white rounded-xl p-4 w-screen max-w-sm">
        <form className="grid gap-y-4" onSubmit={(e) => submitForm(e)}>
          <h1 className="text-2xl font-semibold font-montserrat text-center">
            Sign Up
          </h1>
          <div className="flex flex-col">
            <label htmlFor="firstName" className="font-semibold text-sm">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full placeholder:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondName" className="font-semibold text-sm">
              Second Name
            </label>
            <input
              type="text"
              name="firstName"
              id="secondName"
              placeholder="Second Name"
              className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full placeholder:text-sm"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-sm">
              Email
            </label>
            <input
              type="text"
              name="firstName"
              id="email"
              placeholder="Email"
              className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full placeholder:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold text-sm">
              Password
            </label>
            <input
              type="text"
              name="firstName"
              id="password"
              placeholder="Password"
              className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full placeholder:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out text-white text-sm font-semibold"
          >
            {loading && (
              <div className="ml-2 animate-spin inline-block w-5 h-5 rounded-full border-t "></div>
            )}
            Loading
          </button>
        </form>
      </div>
    </section>
  );
};

export default App;
