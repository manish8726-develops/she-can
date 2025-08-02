import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

const LabeledInput = ({ id, label, error, ...props }) => {
  const errorMessage =
    typeof error === "string" ? error : error?.message || "Invalid input";

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        aria-invalid={!!error}
        className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default LabeledInput;
