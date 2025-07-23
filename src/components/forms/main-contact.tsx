"use client";

import type React from "react";
import { useState } from "react";
import { format } from "date-fns";

import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Clock, MessageCircle } from "lucide-react";
import DatePicker from "../ui/date-picker";

export const AppointmentForm = () => {
  const [date, setDate] = useState<Date | undefined>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const timeSlot = formData.get("timeSlot") as string;
    const message = formData.get("message") as string;

    const whatsappNumber = siteConfig.whatsappNumber;
    const WAMessage = `Hello! I would like to book a dental appointment.\n\n Name: ${name}\n Preferred Date: ${
      date ? format(date, "PPP") : "No date selected"
    }\n Preferred Time: ${timeSlot}\n\n Additional Notes: ${
      message || "No additional notes"
    }\n\nPlease confirm my appointment or suggest an alternative time if this slot is not available. Thank you!`;

    const encodedMessage = encodeURIComponent(WAMessage);
    const redirectUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(redirectUrl, "_blank");
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split("T")[0];

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Full Name *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          className="h-12"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Preferred Date *
          </label>
          <DatePicker date={date} onDateChange={setDate} />
        </div>

        <div>
          <label htmlFor="timeSlot" className="mb-2 block text-sm font-medium">
            Preferred Time Slot *
          </label>
          <Select name="timeSlot" required>
            <SelectTrigger className="h-12 w-full">
              <SelectValue placeholder="Select time slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10:00AM to 1:00PM">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Morning: 10:00AM to 1:00PM</span>
                </div>
              </SelectItem>
              <SelectItem value="3:00PM to 8:00PM">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Evening: 3:00PM to 8:00PM</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Additional Notes (Optional)
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Any specific treatments needed, dental concerns, or special requirements? (e.g., routine cleaning, tooth pain, follow-up visit, etc.)"
          rows={4}
          className="resize-none"
        />
        <p className="mt-2 text-xs">
          Help us prepare for your visit by sharing any specific needs or
          concerns
        </p>
      </div>

      <Button type="submit" className="h-12 w-full text-base font-semibold">
        <MessageCircle className="mr-2 h-5 w-5" />
        Book Appointment via WhatsApp
      </Button>
    </form>
  );
};
