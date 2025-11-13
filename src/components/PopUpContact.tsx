import { useState } from "react";

interface PopUpContactProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function PopUpContact({ onClose, isOpen }: PopUpContactProps) {
	if (!isOpen) return null;
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	  });
	  const [isSubmitting, setIsSubmitting] = useState(false);
	  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''
	
	  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
		  ...prev,
		  [name]: value
		}));
	  };
	
	  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('');
	
		// Basic validation
		if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
		  setSubmitStatus('error');
		  setIsSubmitting(false);
		  return;
		}
	
		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
		  setSubmitStatus('error');
		  setIsSubmitting(false);
		  return;
		}
	
		try {
		  // Send form data to Django backend
		  const response = await fetch('https://verian.onrender.com/api/contact/', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  name: formData.name,
			  email: formData.email,
			  message: formData.message
			})
		  });
		  
		  if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		  }

		  const data = await response.json();
		  console.log('Form submitted successfully:', data);
		  
		  setSubmitStatus('success');
		  
		  // Reset form after successful submission
		  setTimeout(() => {
			setFormData({ name: '', email: '', message: '' });
			setSubmitStatus('');
			onClose();
		  }, 2000);
		  
		} catch (error) {
		  console.error('Submission error:', error);
		  setSubmitStatus('error');
		} finally {
		  setIsSubmitting(false);
		}
	  };
	
	  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
		  onClose();
		}
	  };
	
	  if (!isOpen) return null;
	
	  return (
		<div 
		  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
		  onClick={handleBackdropClick}
		>
		  <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
			{/* Header */}
			<div className="bg-[#397891] text-white p-6 rounded-t-lg relative">
			  <h2 className="text-2xl font-bold text-center">Get In Touch</h2>
			  <button 
				onClick={onClose}
				className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-bold transition-colors"
				aria-label="Close"
			  >
				×
			  </button>
			</div>
	
			{/* Form */}
			<div className="p-6">
			  <form onSubmit={handleSubmit} className="space-y-4">
				{/* Name Field */}
				<div>
				  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
					Your Name *
				  </label>
				  <input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#397891] focus:border-transparent"
					placeholder="Enter your name"
					required
				  />
				</div>
	
				{/* Email Field */}
				<div>
				  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
					Your Email *
				  </label>
				  <input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#397891] focus:border-transparent"
					placeholder="Enter your email address"
					required
				  />
				</div>
	
				{/* Message Field */}
				<div>
				  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
					Your Message *
				  </label>
				  <textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleInputChange}
					rows={4}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#397891] focus:border-transparent resize-vertical"
					placeholder="Don't hesitate to leave a message!"
					required
				  />
				</div>
	
				{/* Status Messages */}
				{submitStatus === 'success' && (
				  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
					✅ Message sent successfully! I'll get back to you soon.
				  </div>
				)}
	
				{submitStatus === 'error' && (
				  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
					❌ Please fill in all fields with valid information.
				  </div>
				)}
	
				{/* Submit Button */}
				<div className="flex justify-end space-x-3 pt-4">
				  <button
					type="button"
					onClick={onClose}
					className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
				  >
					Cancel
				  </button>
				  <button
					type="submit"
					disabled={isSubmitting}
					className="px-6 py-2 bg-[#397891] text-white rounded-lg hover:bg-[#2d5f73] disabled:opacity-50 disabled:cursor-not-wait transition-colors flex items-center"
				  >
					{isSubmitting ? (
					  <>
						<svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
						Sending...
					  </>
					) : (
					  'Send Message'
					)}
				  </button>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  );
}