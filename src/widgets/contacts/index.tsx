import { DesktopContactsWidget } from "./desktop";
import { MobileContactsWidget } from "./mobile";

interface ContactsWidgetProps {
  mobileRef: (node?: Element | null | undefined) => void;
  desctopRef: (node?: Element | null | undefined) => void;
  inViewMobile: boolean;
  inViewDesctop: boolean;
}

export const ContactsWidget = ({
  mobileRef,
  desctopRef,
  inViewMobile,
  inViewDesctop,
}: ContactsWidgetProps) => {
  return (
    <>
      <div className="hidden md:flex">
        <DesktopContactsWidget ref={desctopRef} inView={inViewDesctop} />
      </div>
      <div className="flex md:hidden">
        <MobileContactsWidget ref={mobileRef} inView={inViewMobile} />
      </div>
    </>
  );
};
