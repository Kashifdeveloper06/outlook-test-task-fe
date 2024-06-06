import axios from "axios";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const emailVerificationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post("https://outlook-integration-be.vercel.app/api/users/login", formData);
      setLoading(false);
      localStorage.setItem("token", resp.data.token);
      navigate("/dashboard")
    } catch (error) {
      setError(error.response.data.message)
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <Card
        horizontal
        imgSrc="/images/authentication/login.jpg"
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign in to platform
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              value={formData.password}
              placeholder="••••••••"
              minLength={6}
              type="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <Link
              to="/"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300"
            >
              Lost Password?
            </Link>
          </div>
          <div className="mb-6">
            <Button
              disabled={!emailVerificationRegex.test(formData.email) || formData.password.length < 6 || loading}
              type="submit"
              className="w-full lg:w-auto bg-[#3d48e9] hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Login to your account"}
            </Button>
            <p className="text-red-700 text-sm">{error && error}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <Link to="/sign-up" className="text-[#3d48e9] hover:text-[#6973ff]">
              Create account
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;