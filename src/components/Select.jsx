import { countries } from "../countries";

function Select({ option, handleSelect }) {
  const options = countries.map((country, i) => {
    return (
      <option key={i} value={country.valus}>
        {country.name}
      </option>
    );
  });

  const handleLangChange = (e) => {
    handleSelect(e.target.value);
  };

  return (
    <select
      name=""
      id=""
      className="mb-6 py-3 px-3 border rounded-md outline-none"
      onChange={handleLangChange}
    >
      <option>{option}</option>
      {options}
    </select>
  );
}

export default Select;
