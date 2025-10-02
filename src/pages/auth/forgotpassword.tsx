import { useState } from "react";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
// import SendingLoader from "@/components/loadersendinglink";
import { useForgetPassword } from "@/hooks/use-auth";
import { emailSanitizer } from "@/lib/inputSanitizer";
import { toast } from "sonner";
import bglogin from "@/assets/images/bglogin.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const {
    mutate: forgetPasswordMutation,
    isSuccess,
    isError,
  } = useForgetPassword(
    () => {
      toast.success(t("toast.successupdatepassword"));
    },
    (error) => {
      console.log({ error });
      toast.error(t("toast.errorupdatepassword"));
    }
  );

  const handleVerificationClick = () => {
    const cleanEmail = emailSanitizer(email);
    forgetPasswordMutation({ email: cleanEmail });
  };

  const { t } = useTranslation();

  // if (isPending) {
  //   return <SendingLoader />;
  // }

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative px-4"
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Back arrow */}
      <div className="absolute top-4 left-4 px-20 py-10">
        <Link
          to="/login"
          className="text-gray-500 hover:text-gray-700 text-xl flex gap-2"
        >
          <ArrowLeft /> {t("forgot.back")}
        </Link>
      </div>

      {/* Sign Up Link */}
      {/* <div className="absolute top-4 right-4 text-sm text-gray-600 px-20 py-10">
        {t("forgot.noAccount")}{" "}
        <a href="/register" className="text-black font-medium hover:underline">
          {t("forgot.signup")}
        </a>
      </div> */}

      {/* Main content */}
      <div className="bg-white w-full max-w-md p-8 rounded-md shadow-md text-center">
        <div className="flex justify-center mb-6">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {t("forgot.title")}
        </h2>
        <p className="text-sm text-gray-600 mb-6">{t("forgot.description")}</p>
        {isSuccess && (
          <p className="text-sm text-green-600 mb-6">{t("forgot.message")}</p>
        )}
        {isError && (
          <p className="text-sm text-red-600 mb-6">{t("forgot.error")}</p>
        )}
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("forgot.inputPlaceholder")}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button
          onClick={handleVerificationClick}
          className="block w-full bg-green-700 px-4 hover:bg-green-800 text-white font-medium py-2 rounded-md cursor-pointer"
        >
          {t("forgot.button")}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
