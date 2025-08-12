"use client";
import React from "react";
import WhatsAppPopup from "./whatsappup";

export default function WhatsAppWidget() {
  return <WhatsAppPopup />;
}

//
// import { useState, useEffect } from "react";
// import { MessageCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
//
// export default function WhatsAppWidget() {
//   const [showWhatsApp, setShowWhatsApp] = useState(false);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setShowWhatsApp(scrollPosition > 300);
//     };
//
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//
//   const handleWhatsAppClick = () => {
//     window.open(
//       "https://wa.me/918015867446?text=Hello! I am interested in nursing opportunities.",
//       "_blank",
//     );
//   };
//
//   return (
//     <AnimatePresence>
//       {showWhatsApp && (
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed bottom-6 right-6 z-50"
//         >
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={handleWhatsAppClick}
//             className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
//           >
//             <MessageCircle className="h-6 w-6" />
//           </motion.button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
