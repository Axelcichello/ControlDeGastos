import { useState, useMemo } from "react";
import { useBudget } from "../Hooks/useBudget";

export default function BudgetForm() {

    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber);
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0}, [budget]) //verifica si el presupuesto es valido

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({type: 'add-budget', payload: {budget}})
    }

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          type="number"
          id="budgetId"
          className="w-full bg-white border vorder-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="burge"  
          value={budget}
          onChange={handleChange}
        />
      </div>

      <input 
      type="submit"
      value='Definir presupuesto'
      className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-bold uppercase disabled:opacity-40"
      disabled={isValid}
      />
    </form>
  );
}
