import { useState } from "react";
import { ServiceRequestForm } from "../../components/Forms/FormPreview";
// import { RequestToAmendExistingLoanDetailsSchema } from "../../components/Forms/form-schemas/RequestToAmendExistingLoanDetailsSchema";

function RequestToAmendExistingLoanDetails() {
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };
  const handleSave = async (data: any) => {
    console.log("Form saved:", data);
    setFormData(data);
    alert("Form saved successfully!");
  };

  return (
    <div>
      {/* Uncomment when schema is ready */}
      {/* <ServiceRequestForm
        schema={RequestToAmendExistingLoanDetailsSchema}
        onSubmit={handleSubmit}
        onSave={handleSave}
        initialData={formData}
        data-id="request-to-amend-existing-loan-details"
      /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Request to Amend Existing Loan Details
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Request to Amend Existing Loan Details form will be implemented
            here.
          </p>
        </div>
      </div>
    </div>
  );
}

// Export the specific form name
export const RequestToAmendExistingLoanDetailsForm =
  RequestToAmendExistingLoanDetails;
export default RequestToAmendExistingLoanDetails;
