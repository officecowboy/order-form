import React from "react";
import "../App.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";
import { Button, MenuItem, TextField } from "@mui/material";

interface IFormInputs {
  type: string;
  nominal_capacitance: number;
  working_voltage: number;
  tolerance: number;
  working_temperature: number;
  temperature_coefficient: number;
}

setLocale({
  mixed: {
    default: "Invalid field.",
  },
  number: {
    min: "Value must be greater than or equal to ${min}.",
    max: "Value must be less than or equal to ${max}.",
    integer: "Value must be an integer."
  },
});

const schema = yup.object().shape({
  type: yup.string().required("Required field."),
  nominal_capacitance: yup.number().transform(value =>
    isNaN(value) ? undefined : value
  ).required("Required field - please enter a valid number."),
  working_voltage: yup.number().transform(value =>
    isNaN(value) ? undefined : value
  ).integer().required("Required field - please enter a valid number."),
  tolerance: yup.number().transform(value =>
    isNaN(value) ? undefined : value
  ).min(0).max(1).required("Required field - please enter a valid number."),
  working_temperature: yup.number().transform(value =>
    isNaN(value) ? undefined : value
  ).integer().required("Required field - please enter a valid number."),
  temperature_coefficient: yup.number().transform(value =>
    isNaN(value) ? undefined : value
  ).min(0).max(1).required("Required field - please enter a valid number."),
}).required();

export default function Form() {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

  return (
    <div className="form-container">
      <div className="form-intro">
        <h1>Order Form</h1>
        <p>Please enter the details of your electronic component.</p>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <Controller
          name="type"
          control={control}
          defaultValue={""}
          render={({ field }) =>
            <TextField
              {...field}
              error={!!errors.type}
              id="outlined-basic"
              label="Component Type"
              variant="outlined"
              select
              helperText={errors.type && "Required field."}
            >
              <MenuItem value={"capacitor"}>Capacitor</MenuItem>
              <MenuItem value={"resistor"}>Resistor</MenuItem>
              <MenuItem value={"transistor"}>Transistor</MenuItem>
            </TextField>}
        />
        <Controller
          name="nominal_capacitance"
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={!!errors.nominal_capacitance}
              helperText={errors.nominal_capacitance?.message || "Value measured in micro-Farads (μF)."}
              id="outlined-basic"
              label="Nominal Capacitance"
              variant="outlined"
            />}
        />
        <Controller
          name="working_voltage"
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={!!errors.working_voltage}
              helperText={errors.working_voltage?.message}
              id="outlined-basic"
              label="Working Voltage (DC)"
              variant="outlined"
            />}
        />
        <Controller
          name="tolerance"
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={!!errors.tolerance}
              helperText={errors.tolerance?.message || "Enter a decimal value between 0 and 1."}
              id="outlined-basic"
              label="Tolerance"
              variant="outlined"
            />}
        />
        <Controller
          name="working_temperature"
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={!!errors.working_temperature}
              helperText={errors.working_temperature?.message}
              id="outlined-basic"
              label="Working Temperature (ºC)"
              variant="outlined"
            />}
        />
        <Controller
          name="temperature_coefficient"
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={!!errors.temperature_coefficient}
              helperText={errors.temperature_coefficient?.message || "Enter a decimal value between 0 and 1."}
              id="outlined-basic"
              label="Temperature Coefficient"
              variant="outlined"
            />}
        />
        <Button className="form-button" type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );
}