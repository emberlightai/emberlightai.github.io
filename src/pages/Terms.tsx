import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using emberlight.ai's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to use our services for your personal or business purposes, subject to these Terms of Service.
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>You must not modify or copy our proprietary software</li>
              <li>You must not use the services for any illegal purposes</li>
              <li>You must not transmit any malicious code or viruses</li>
              <li>You must not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide uninterrupted service, but we do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Certain aspects of our services may require payment. You agree to provide accurate billing information and authorize us to charge your chosen payment method for all purchases made.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              emberlight.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@emberlight.ai<br />
              Address: 123 AI Street, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}