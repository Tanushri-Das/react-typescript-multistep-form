import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};
const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div>
      <h2 className="text-center text-xl font-semibold mb-6">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
