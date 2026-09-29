import { Button } from "@/Components/ui/button";
import {
  incrementByValue,
  decrement,
  increment,
  selectValue,
} from "@/Redux/Counter/CounterSlices";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";

const Counter = () => {
  // despatch and selector

  const dispatch = useAppDispatch();
  const value = useAppSelector(selectValue);

  // get input value to update ui
  const handleIncrementByValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const inputValue = Number(formData.get("incrementByValue"));

    dispatch(incrementByValue(inputValue));
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="text-center">
        <p className="text-sm font-medium text-zinc-500">Redux Counter</p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-zinc-900">
          {value}
        </h1>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-white text-2xl font-medium text-zinc-700 transition hover:bg-zinc-100">
          −
        </button>

        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-2xl font-medium text-white transition hover:bg-zinc-700">
          +
        </button>
      </div>

      <div className="flex flex-col gap-5 py-6 text-center">
        <h2>Counter increment by value</h2>

        <form onSubmit={handleIncrementByValue}>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              name="incrementByValue"
              className="rounded border p-2"
              placeholder="Enter any number"
            />

            <Button type="submit">Increment</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Counter;
