import React from 'react';

function Step({ step, formData, onChange, onNext, onPrevious, onSubmit }) {
  console.log(`Rendering Step: ${step}`); // Debugging

  return (
    <div>
      {step === 1 && (
        <div id="step1">
          <h2>Step 1: Personal Information</h2>
          <label>
            First Name:
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={onChange}
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <h2>Step 2: Car Information</h2>
          <label>
            Car Model:
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Car Price:
            <input
              type="text"
              id="car_price"
              value={formData.car_price}
              onChange={onChange}
            />
          </label>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <h2>Step 3: Payment Information</h2>
          <label>
            Card Information:
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Expiry Date:
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={onChange}
            />
          </label>
        </div>
      )}

      <div>
        {step > 1 && <button onClick={onPrevious}>Previous</button>}
        {step < 3 ? (
          <button onClick={onNext}>Next</button>
        ) : (
          <button onClick={onSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Step;
