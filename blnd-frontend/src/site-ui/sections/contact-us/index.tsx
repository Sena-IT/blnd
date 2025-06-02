"use client";
import HeadingLayout from "@/components/layouts/HeadingLayout";
import SectionSpacingLayout from "@/components/layouts/SectionSpacingLayout";
import { Button } from "@/components/ui/button";
import { HomeDataContactUs } from "@/types/types";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { toast } from "sonner"; 

const ContactUs = ({ data }: { data: HomeDataContactUs }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        
        toast?.success?.('Message sent successfully! We\'ll get back to you soon.') || 
        alert('Message sent successfully! We\'ll get back to you soon.');
        
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      toast?.error?.('Failed to send message. Please try again later.') || 
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionSpacingLayout id="contact-us">
      <HeadingLayout heading="Contact Us" />

      <div className="rounded-2xl bg-lime-50 p-5 h-full">
        <div className="h-full">
          <h2 className="text-3xl text-brand-secondary font-medium text-center">
            {data?.title}
          </h2>
          <p className="text-2xl mt-4 font-normal text-brand-secondary text-center">
            {data?.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-x-4 h-full p-5">
          <div className="lg:w-1/2 w-full flex flex-col h-full space-y-6 lg:space-y-12 mt-12">
            {data?.contact_info.map((info, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col md:flex-row items-start space-x-6">
                  <FaInstagram className="text-brand-secondary md:w-10 md:h-10 w-6 h-6" />
                  <div
                    className="text-lg md:text-2xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: info.instagram }}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start space-x-6">
                  <LuMail className="text-brand-secondary md:w-12 md:h-12 w-6 h-6" />
                  <div
                    className="text-lg md:text-2xl font-semibold wrap-anywhere"
                    dangerouslySetInnerHTML={{ __html: info.email }}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start space-x-6">
                  <FaLinkedin className="text-brand-secondary md:w-10 md:h-10 w-6 h-6" />
                  <div
                    className="text-lg md:text-2xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: info.linkedin }}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          
          <div className="w-[1px] bg-neutral-200 backdrop-blur-2xl self-stretch my-4 lg:my-12 rounded" />
          
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div>
                <label className="block font-semibold text-lg mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border bg-white border-gray-300 rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block font-semibold text-lg mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block font-semibold text-lg mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block font-semibold text-lg mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block font-semibold text-lg mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 bg-white rounded-lg"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-primary hover:bg-brand-primary cursor-pointer w-full h-12 text-brand-secondary text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </SectionSpacingLayout>
  );
};

export default ContactUs;