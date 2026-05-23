import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const OWNER_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_OWNER_TEMPLATE;
const CUSTOMER_TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendLeadEmails = async (formData) => {
  try {
    // 1. Send email to OWNER
    await emailjs.send(
      SERVICE_ID,
      OWNER_TEMPLATE,
      {
        from_name: formData.name,
        phone: formData.phone,
        address: formData.address,
        service: formData.service,
        reply_email: formData.email || "no-reply@example.com",
      },
      PUBLIC_KEY
    );

    // 2. Send auto-reply to CUSTOMER (only if email provided)
    if (formData.email) {
      await emailjs.send(
        SERVICE_ID,
        CUSTOMER_TEMPLATE,
        {
          to_name: formData.name,
          to_email: formData.email,
          address: formData.address,
          service: formData.service,
        },
        PUBLIC_KEY
      );
    }

    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error: error.message };
  }
};

// Send to WhatsApp as backup notification
export const sendToWhatsApp = (formData, ownerWhatsApp) => {
  const message = encodeURIComponent(
    `🏠 NEW ROOFING LEAD!\n\n` +
    `👤 Name: ${formData.name}\n` +
    `📞 Phone: ${formData.phone}\n` +
    `📍 Address: ${formData.address}\n` +
    `🔨 Service: ${formData.service}\n\n` +
    `⏰ Received: ${new Date().toLocaleString()}\n\n` +
    `Reply ASAP! 💪`
  );
  
  const cleanNumber = ownerWhatsApp.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${message}`;
};