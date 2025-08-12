import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsAppPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 2000); // 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  return show ? (
    <FloatingWhatsApp
      phoneNumber="+918015867446"
      accountName="CareViza Support"
      chatMessage="Hi, how can we help you?"
      allowClickAway
      notification
      notificationSound
    />
  ) : null;
}
