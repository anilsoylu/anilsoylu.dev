"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { memo, useCallback, useMemo } from "react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useDisclosure } from "@/hooks/use-disclosure"
import CustomPhoneInput from "@/components/phone-input"

// Form şemasını component dışına taşıyalım
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
})

// Form Field bileşenini optimize edelim
const FormFieldComponent = memo(
  ({
    name,
    control,
    label,
    type = "text",
    placeholder,
    isTextArea = false,
    isPhoneInput = false,
  }: {
    name: "name" | "email" | "phone" | "subject" | "message"
    control: any
    label: string
    type?: string
    placeholder: string
    isTextArea?: boolean
    isPhoneInput?: boolean
  }) => (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {isTextArea ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                autoComplete="off"
                required
                className="min-h-[120px] border-gray-300 focus:border-black focus:ring-black rounded-none"
              />
            ) : isPhoneInput ? (
              <CustomPhoneInput
                value={field.value}
                onChange={field.onChange}
                defaultCountry="TR"
                className="border-gray-300 focus:border-black focus:ring-black rounded-none"
              />
            ) : (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                required={name !== "phone"}
                className="border-gray-300 focus:border-black focus:ring-black rounded-none"
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
)

FormFieldComponent.displayName = "FormFieldComponent"

const ContactButton = memo(() => {
  const { toast } = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Form default değerlerini memoize edelim
  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }),
    []
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })

        if (response.ok) {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
          })
        } else {
          throw new Error("Failed to send message")
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        })
      } finally {
        onClose()
        form.reset(defaultValues)
      }
    },
    [form, toast, onClose, defaultValues]
  )

  // Form fields'ı memoize edelim
  const formFields = useMemo(
    () => [
      { name: "name", label: "Name", placeholder: "John Doe" },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "john@example.com",
      },
      {
        name: "phone",
        label: "Phone (Optional)",
        placeholder: "",
        isPhoneInput: true,
      },
      { name: "subject", label: "Subject", placeholder: "How can I help you?" },
      {
        name: "message",
        label: "Message",
        placeholder: "Write your message here...",
        isTextArea: true,
      },
    ],
    []
  )

  return (
    <Dialog open={isOpen} onOpenChange={onOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="my-10 w-full font-bold uppercase border-2 border-black rounded-none 
                    hover:bg-black hover:text-white
                    transition-colors duration-200 ease-in-out"
        >
          Send Message
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-gray-500">
            I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {formFields.map((field) => (
              <FormFieldComponent
                key={field.name}
                control={form.control}
                {...field}
                name={
                  field.name as
                    | "name"
                    | "email"
                    | "phone"
                    | "subject"
                    | "message"
                }
              />
            ))}
            <div className="flex w-full">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="bg-black text-white hover:bg-gray-800 px-8 w-full"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
})

ContactButton.displayName = "ContactButton"

export default ContactButton
