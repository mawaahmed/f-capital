// import ResetLoader from "@/components/resetloader";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useResetPassword } from "@/hooks/use-auth";
import { ArrowLeft, CircleCheckBig, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import bglogin from "@/assets/images/bglogin.png";

const CreateNewPassword = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = searchParams.get("token");
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const {
    mutate: resetPasswordMutation,
    isSuccess,
    isError,
  } = useResetPassword(
    () => {
      toast.success(t("toast.successnewpassword"));
    },
    (err) => {
      console.log({ err });
      setError("Something went wrong, try again.");
      toast.error(t("toast.errornewpassword"));
    }
  );

  const handleVerificationClick = () => {
    if (!token) {
      setError("Invalid or missing recovery token.");
      toast.error("Invalid or missing recovery token.");
      return;
    }
    if (password.length < 8) {
      setError(t("createPassword.errorShort"));
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError(t("createPassword.errorMismatch"));
      toast.error("Passwords do not match.");
      return;
    }
    resetPasswordMutation({ token: token, newPassword: confirmPassword });
  };

  // if (isPending) {
  //   return (
  //     <>
  //       <ResetLoader />
  //     </>
  //   );
  // }

  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-center items-centerrelative px-4"
        style={{
          backgroundImage: `url(${bglogin})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-4 left-4 px-20 py-10">
          <Link
            to={"/"}
            className="text-gray-500 hover:text-gray-700 text-xl flex gap-2"
          >
            <ArrowLeft />
            {t("createPassword.back")}
          </Link>
        </div>

        <div className="absolute top-4 right-4 text-sm text-gray-600 px-20 py-10">
          {t("createPassword.noAccount")}{" "}
          <a href="/signup" className="text-black font-medium hover:underline">
            {t("createPassword.signup")}
          </a>
        </div>

        <div className="bg-white w-full max-w-md p-8 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("createPassword.title")}
          </h2>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("createPassword.passwordLabel")}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("createPassword.passwordPlaceholder")}
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("createPassword.confirmPasswordLabel")}
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t("createPassword.confirmPasswordPlaceholder")}
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirmPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {isError ||
            (error != "" && (
              <p className="text-red-600 text-sm mb-4">{error}</p>
            ))}

          <button
            onClick={handleVerificationClick}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-md"
          >
            {t("createPassword.button")}
          </button>
        </div>
      </div>
      <Dialog open={isSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center py-4">
              <div className="bg-green-200 w-14 h-14 rounded-full flex items-center justify-center">
                <div className="bg-green-300 w-10 h-10 rounded-full flex items-center justify-center">
                  <CircleCheckBig className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">
              {t("createPassword.dialogTitle")}
            </DialogTitle>
            <DialogDescription className="text-center text-sm">
              {t("createPassword.dialogDesc")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center">
            <DialogClose asChild>
              <Link to="/login" className="w-full">
                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md">
                  {t("createPassword.ok")}
                </button>
              </Link>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateNewPassword;
