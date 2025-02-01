"use client"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { ChevronDown, Phone } from "lucide-react"
import { forwardRef } from "react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

const CustomPhoneInput = forwardRef<
  HTMLInputElement,
  RPNInput.Props<typeof RPNInput.default>
>(({ className, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref as any}
      className={cn("flex rounded-lg shadow-sm", className)}
      international
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={PhoneInputField}
      {...props}
    />
  )
})

CustomPhoneInput.displayName = "CustomPhoneInput"

const PhoneInputField = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn(
        "-ms-px rounded-s-none shadow-none focus-visible:z-10 border-gray-300 focus:border-black focus:ring-black rounded-none",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

PhoneInputField.displayName = "PhoneInputField"

type CountrySelectProps = {
  disabled?: boolean
  value: RPNInput.Country
  onChange: (value: RPNInput.Country) => void
  options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country)
  }

  return (
    <div className="relative inline-flex items-center self-stretch rounded-s-lg border border-gray-300 bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-black focus-within:ring-[3px] focus-within:ring-black/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0"
        aria-label="Select country"
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{" "}
              {option.value &&
                `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  )
}

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country]

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone size={16} aria-hidden="true" />
      )}
    </span>
  )
}

export default CustomPhoneInput
