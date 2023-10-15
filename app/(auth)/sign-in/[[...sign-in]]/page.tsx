import { SignIn } from "@clerk/nextjs";

export const stylingPage = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  }
};

export default function Page() {
  return (
    <div style={stylingPage.container}>
      <div>
        <SignIn />
      </div>
    </div>
  );
}
