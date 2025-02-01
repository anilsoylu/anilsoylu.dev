"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { memo, useCallback, useMemo, useEffect, useState } from "react"
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
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

// Form bileşeni
const ContactForm = memo(({ onSubmit, form, formFields, onCancel }: any) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {formFields.map((field: any) => (
          <FormField
            key={field.name}
            name={field.name}
            control={form.control}
            render={({ field: fieldProps }) => (
              <FormItem className="mb-4">
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.isTextArea ? (
                    <Textarea
                      {...fieldProps}
                      placeholder={field.placeholder}
                      className="min-h-[100px] resize-none"
                    />
                  ) : field.isPhoneInput ? (
                    <CustomPhoneInput
                      value={fieldProps.value}
                      onChange={fieldProps.onChange}
                      defaultCountry="TR"
                    />
                  ) : (
                    <Input
                      {...fieldProps}
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      required={field.name !== "phone"}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="flex flex-col gap-2 mt-6">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="w-full"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
})

ContactForm.displayName = "ContactForm"

// Ana bileşen
const ResponsiveContactButton = memo(() => {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
          setIsOpen(false)
          form.reset(defaultValues)
        } else {
          throw new Error("Failed to send message")
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        })
      }
    },
    [form, toast, defaultValues]
  )

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

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  const triggerButton = (
    <Button
      variant="outline"
      onClick={() => setIsOpen(true)}
      className="my-10 w-full font-bold uppercase border-2 border-black rounded-none 
                hover:bg-black hover:text-white
                transition-colors duration-200 ease-in-out"
    >
      Send Message
    </Button>
  )

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
        <DrawerContent>
          <ScrollArea className="h-[calc(100vh-100px)] p-4">
            <DrawerHeader className="p-0 mb-6">
              <DrawerTitle className="text-2xl font-bold">
                Get in Touch
              </DrawerTitle>
              <DrawerDescription>
                I&apos;ll get back to you as soon as possible.
              </DrawerDescription>
            </DrawerHeader>
            <ContactForm
              form={form}
              onSubmit={onSubmit}
              formFields={formFields}
              onCancel={() => setIsOpen(false)}
            />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription>
            I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <ContactForm
          form={form}
          onSubmit={onSubmit}
          formFields={formFields}
          onCancel={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
})

ResponsiveContactButton.displayName = "ResponsiveContactButton"

export { ResponsiveContactButton }
