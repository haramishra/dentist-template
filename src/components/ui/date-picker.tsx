"use client";

import { useId, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface DatePickerProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export default function DatePicker({ date, onDateChange }: DatePickerProps) {
  const id = useId();
  const today = new Date();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="*:not-first:mt-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className="group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none hover:scale-100 focus-visible:outline-[3px]"
            >
              <span
                className={cn("truncate", !date && "text-muted-foreground")}
              >
                {date ? format(date, "PPP") : "Pick a date"}
              </span>
              <CalendarIcon
                size={16}
                className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
                aria-hidden="true"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => {
                onDateChange(newDate);
                setOpen(false);
              }}
              disabled={[
                { before: today }, // Dates before today
              ]}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
