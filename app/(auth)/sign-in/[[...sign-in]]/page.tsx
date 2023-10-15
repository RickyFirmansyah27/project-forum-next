import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const stylingPage = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }
  };

  return (
    <div style={stylingPage.container}>
      <div>
        <SignIn />
      </div>
    </div>
  );
}
