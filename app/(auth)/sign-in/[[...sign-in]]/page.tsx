import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div>
        <SignIn />
      </div>
    </div>
  );
}

