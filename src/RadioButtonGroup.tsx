import { useState, ChangeEvent } from "react";

type Option = {
  label: string;
  emoji: string;
};

type RadioButtonProps = {
  value: Option;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type RadioButtonGroupProps = {
  name: string;
  options: Option[];
  onChange?: (value: string) => void;
};

const RadioButton = ({ value, name, checked, onChange }: RadioButtonProps) => {
  const { emoji, label } = value;

  return (
    <label className="radio-button-wrapper">
      <input
        type="radio"
        name={name}
        value={label}
        checked={checked}
        onChange={onChange}
      />
      <div className="radio-button">
        <div>{emoji}</div>
        <div>{label}</div>
      </div>
    </label>
  );
};

const RadioButtonGroup = ({
  name,
  options,
  onChange,
}: RadioButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className="radio-group">
      {options.map((option) => (
        <RadioButton
          key={option.label}
          value={option}
          name={name}
          checked={selectedValue === option.label}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
