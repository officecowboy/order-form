import React from "react";
import './App.css';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, MenuItem, TextField } from "@mui/material";

interface IFormInputs {
  type: string;
  nominal_capacitance: number;
  working_voltage: number;
  tolerance: number;
  working_temperature: number;
  temperature_coefficient: number;
}

const schema = yup.object({
  type: yup.string().required(),
  nominal_capacitance: yup.number().positive().required(),
  working_voltage: yup.number().positive().integer().required(),
  tolerance: yup.number().min(0).max(1).required(),
  working_temperature: yup.number().required(),
  temperature_coefficient: yup.number().min(0).max(1).required(),
}).required();

export default function App() {
  const { handleSubmit, control, formState: { errors }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

  return (
    <div className="App">
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
              helperText={errors.nominal_capacitance?.message}
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
              helperText={errors.nominal_capacitance?.message}
              id="outlined-basic"
              label="Working Voltage"
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
              helperText={errors.tolerance?.message}
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
              helperText={errors.temperature_coefficient?.message}
              id="outlined-basic"
              label="Temperature Coefficient"
              variant="outlined"
            />}
        />
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );
}