import { useMutation } from "@tanstack/react-query";
import { api, type InquiryInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      // Manually parsing input to ensure Zod validation happens before fetch if needed,
      // but api.inquiries.create.input.parse(data) is good practice.
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit inquiry');
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you for contacting us. We will get back to you shortly.",
        variant: "default", 
        // Note: In a real app, you might want a custom success style, 
        // but default matches the shadcn toaster well enough.
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
