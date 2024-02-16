import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import { useMultistepForm } from "../../Hooks/useMultistepForm";
import AccountForm from "./AccountForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};
const PersonalInfo = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  };
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
    console.log("Form Data:", data);

    localStorage.setItem("formData", JSON.stringify(data));
  };
  return (
    <div className="flex justify-center items-center my-16">
      <div className="w-full flex-shrink-0 sm:max-w-2xl bg-base-100 mx-auto relative p-8 rounded-xl multiform">
        <form onSubmit={handleSubmit}>
          <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}

          <div className="mt-5 flex justify-center gap-2">
            {!isFirstStep && (
              <button
                className="bg-amber-900 px-6 py-2 rounded-lg text-[16px] font-semibold text-white"
                type="button"
                onClick={back}
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-emerald-900 px-6 py-2 rounded-lg text-[16px] font-semibold text-white"
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
