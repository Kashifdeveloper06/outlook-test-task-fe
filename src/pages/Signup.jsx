import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const Signup = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const emailVerificationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("")
  };

  const handleCheckboxChange = (e) => {
    setIsTermsAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://outlook-integration-be.vercel.app/api/users/register", formData);

      setFormData({ email: "", password: "", username: "" });
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <Card
        horizontal
        imgSrc="/images/authentication/create-account.jpg"
        imgAlt=""
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Create a Free Account
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
            <Label htmlFor="username">Username</Label>
            <TextInput
              id="username"
              name="username"
              minLength={3}
              placeholder="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="confirmPassword">Your password</Label>
            <TextInput
              id="password"
              name="password"
              minLength={6}
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex items-center gap-x-3">
            <Checkbox id="acceptTerms" name="acceptTerms" onChange={handleCheckboxChange} />
            <Label htmlFor="acceptTerms">
              I accept the&nbsp;
              <a href="#" className="text-primary-700 dark:text-primary-200">
                Terms and Conditions
              </a>
            </Label>
          </div>
          <div className="mb-7">
            <Button
              disabled={!emailVerificationRegex.test(formData.email) || formData.username.length < 3 || formData.password.length < 6 || !isTermsAccepted || loading}
              type="submit"
              className="w-full lg:w-auto bg-[#3d48e9] hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Loading..," : "Create account"}
            </Button>
            <p className="text-red-700 text-sm">{error && error}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?&nbsp;
            <Link to="/" className="text-[#3d48e9] hover:text-[#6973ff]">
              Login here
            </Link>
          </p>
        </form>
      </Card>
    </div>
  )
}

export default Signup