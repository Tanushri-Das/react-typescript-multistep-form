import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account Creation">
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          autoFocus
          placeholder="Email"
          className="form-input"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          autoFocus
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default AccountForm;
