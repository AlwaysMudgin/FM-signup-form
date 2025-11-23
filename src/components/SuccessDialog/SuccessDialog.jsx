import React from 'react';
import iconSuccess from '../../assets/images/icon-success.svg';

function SuccessDialog({ email, dismiss }) {
  return (
    <section className="success-dialog">
      <div className="success-content">
        <div className="success-icon-container">
          <img src={iconSuccess} alt="checkmark icon" />
        </div>
        <h1 className="card__heading">Thanks for subscribing!</h1>
        <p className="card__body">
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscription
        </p>
      </div>
      <button
        className="btn"
        type="button"
        aria-label="dismiss"
        onClick={dismiss}
      >
        Dismiss message
      </button>
    </section>
  );
}

export default SuccessDialog;
