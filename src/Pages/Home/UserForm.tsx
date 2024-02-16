import FormWrapper from "./FormWrapper";
import "./Home.css";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};
const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          required
          autoFocus
          placeholder="First Name"
          className="form-input"
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          required
          autoFocus
          placeholder="Last Name"
          className="form-input"
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          value={age}
          required
          min={1}
          placeholder="Age"
          className="form-input"
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default UserForm;
