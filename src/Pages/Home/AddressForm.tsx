import FormWrapper from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};
type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};
const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address">
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold mb-1">
          Street
        </label>
        <input
          type="text"
          name="street"
          required
          autoFocus
          placeholder="Street"
          className="form-input"
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
        />
      </div>
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold mb-1">
          City
        </label>
        <input
          type="text"
          name="city"
          required
          autoFocus
          placeholder="City"
          className="form-input"
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
      </div>
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold mb-1">
          State
        </label>
        <input
          type="text"
          name="state"
          required
          autoFocus
          placeholder="State"
          className="form-input"
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
      </div>
      <div className="mb-1">
        <label className="block text-left text-black text-lg font-semibold mb-1">
          Zip
        </label>
        <input
          type="number"
          name="zip"
          required
          min={1}
          placeholder="Zip"
          className="form-input"
          value={zip}
          onChange={(e) => updateFields({ zip: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default AddressForm;
