import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqData: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqData }) => {
  return (
    <Accordion type="single" defaultValue="question-0" className="max-w-xl">
      {faqData.map(({ question, answer }, index) => (
        <AccordionItem key={question} value={`question-${index}`}>
          <AccordionTrigger className="text-left text-lg">
            {question}
          </AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
