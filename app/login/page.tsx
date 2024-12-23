import OtpLogin from "@/components/OtpLogin";
import {Suspense} from "react";

function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <Suspense fallback={<>Loading...</>}>
        <OtpLogin />
      </Suspense> 
    </div>
  );
}

export default LoginPage;
