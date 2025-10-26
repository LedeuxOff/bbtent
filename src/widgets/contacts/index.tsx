import { DesktopContactsWidget } from "./desktop";
import { MobileContactsWidget } from "./mobile";

interface ContactsWidgetProps {
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
}

export const ContactsWidget = ({ ref, inView }: ContactsWidgetProps) => {
  return (
    <>
      <div className="hidden md:flex">
        <DesktopContactsWidget ref={ref} inView={inView} />
      </div>
      <div className="flex md:hidden">
        <MobileContactsWidget ref={ref} inView={inView} />
      </div>
    </>
  );
};
