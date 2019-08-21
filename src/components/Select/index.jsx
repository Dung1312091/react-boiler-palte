import React, { memo, useState, useEffect } from "react";
import "./style.scss";
const Select = memo(
  ({ name, value, onChange, data = [], valueKey, textKey, idKey }) => {
    const [curentValue, setValue] = useState("");
    useEffect(() => {
      setValue(value);
    }, [value]);

    const handleChange = e => {
      const name = e.target[e.target.selectedIndex].getAttribute("data-name");
      onChange(e, name);
    };
    return (
      <select
        name={name}
        value={curentValue}
        onChange={handleChange}
        className="input-base select">
        {data.map(item => {
          return (
            <option
              key={item[idKey]}
              value={item[valueKey]}
              data-name={item[textKey]}>
              {item[textKey]}
            </option>
          );
        })}
      </select>
    );
  }
);
export default Select;
