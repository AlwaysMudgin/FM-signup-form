import React from 'react';

function EmailForm({ handleSuccess }) {
  const [email, setEmail] = React.useState('');
  const [valid, setValid] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      setValid(false);
      return;
    }
    handleSuccess(email);
    setEmail('');
  }

  return (
    <form noValidate className="email-form" onSubmit={handleSubmit}>
      <div className="label-error-container">
        <label className="input-label" htmlFor="email">
          Email address
        </label>
        {!valid && <p className="input-error">Valid email required</p>}
      </div>
      <input
        className={valid ? 'input-email' : 'input-email invalid'}
        required
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <button className="btn" type="submit" aria-label="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default EmailForm;
