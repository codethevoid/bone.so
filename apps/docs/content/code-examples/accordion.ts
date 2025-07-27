export const example = `import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '@bonekit/ui/accordion'

const AccordionExample = () => {
  return (
    <Accordion className="w-full max-w-96" openMultiple={false}>
      <AccordionItem>
        <AccordionTrigger>Minimal by default</AccordionTrigger>
        <AccordionPanel>
           Bone UI ships with sleek, accessible components that are lightweight and production 
           ready but built to be styled and extended to match your design system.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Powered by Base UI</AccordionTrigger>
        <AccordionPanel>
           Built on top of Base UI (from the creators of MUI and Radix), Bone UI layers modern 
           design on top of a headless foundation.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Accessible out of the box</AccordionTrigger>
        <AccordionPanel>
           Built with best practices to ensure usability for everyone, right from the start.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};`;

export const usage = `<Accordion>
  <AccordionItem>
    <AccordionTrigger>Minimal by default</AccordionTrigger>
    <AccordionPanel>
      Bone UI ships with sleek, accessible components that are lightweight and production 
      ready but built to be styled and extended to match your design system.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`;

export const minimal = `import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '@bonekit/ui/accordion'

const MinimalAccordion = () => {
  return (
    <Accordion className="w-full max-w-96" openMultiple={false}>
      <AccordionItem>
        <AccordionTrigger>Minimal by default</AccordionTrigger>
        <AccordionPanel>
           Bone UI ships with sleek, accessible components that are lightweight and production 
           ready but built to be styled and extended to match your design system.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Powered by Base UI</AccordionTrigger>
        <AccordionPanel>
           Built on top of Base UI (from the creators of MUI and Radix), Bone UI layers modern 
           design on top of a headless foundation.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Accessible out of the box</AccordionTrigger>
        <AccordionPanel>
           Built with best practices to ensure usability for everyone, right from the start.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};`;

export const shaped = `import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '@bonekit/ui/accordion'

const ShapedAccordion = () => {
  return (
    <Accordion variant="shaped" className="w-full max-w-96" openMultiple={false}>
      <AccordionItem>
        <AccordionTrigger>Minimal by default</AccordionTrigger>
        <AccordionPanel>
           Bone UI ships with sleek, accessible components that are lightweight and production 
           ready but built to be styled and extended to match your design system.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Powered by Base UI</AccordionTrigger>
        <AccordionPanel>
           Built on top of Base UI (from the creators of MUI and Radix), Bone UI layers modern 
           design on top of a headless foundation.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Accessible out of the box</AccordionTrigger>
        <AccordionPanel>
           Built with best practices to ensure usability for everyone, right from the start.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};`;
