import {
  Accordion as ShadAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accordion() {
  return (
    <ShadAccordion type="single" collapsible className="w-full gap-1 flex flex-col">
      <AccordionItem value="item-1" className="bg-white rounded px-3">
        <AccordionTrigger>Title 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          temporibus.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="bg-white rounded px-3">
        <AccordionTrigger>Title 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          temporibus.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="bg-white rounded px-3">
        <AccordionTrigger>Title 3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          temporibus.
        </AccordionContent>
      </AccordionItem>
    </ShadAccordion>
  );
}
