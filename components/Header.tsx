import AuthButton from "../components/AuthButton";

export default function Header() {
  return (
    <div className="">
      <AuthButton />
      <div className="">
        <h1>Welcome to remixio.com</h1>
        <p>Your artist remix discovery engine</p>
      </div>
    </div>
  );
}
