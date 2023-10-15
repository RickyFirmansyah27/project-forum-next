import { SignIn } from "@clerk/nextjs";

export const stylingPage = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  center: {
    textAlign: 'center' as 'center'
  },
};

export default function Page() {
  return (
    <div style={stylingPage.container}>
      <div style={stylingPage.center}>
        <SignIn />
      </div>
    </div>
  );
}
