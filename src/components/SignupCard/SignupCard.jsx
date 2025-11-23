import React from 'react';
import illustrationMobile from '../../assets/images/illustration-sign-up-mobile.svg';
import illustrationTablet from '../../assets/images/illustration-sign-up-tablet.svg';
import illustrationDesktop from '../../assets/images/illustration-sign-up-desktop.svg';
import EmailForm from '../EmailForm/EmailForm';
import SuccessDialog from '../SuccessDialog/SuccessDialog';

function SignupCard() {
  const [success, setSuccess] = React.useState(false);
  const [acceptedEmail, setAcceptedEmail] = React.useState('');

  function handleSuccess(email) {
    setSuccess(true);
    setAcceptedEmail(email);
  }

  function handleDismiss() {
    setSuccess(false);
  }

  return (
    <article className="card">
      {success && (
        <SuccessDialog email={acceptedEmail} dismiss={handleDismiss} />
      )}
      {!success && (
        <>
          <div className="card__illustration-container">
            <picture>
              <source
                srcSet={illustrationTablet}
                media="(min-width: 648px) and (max-width: 1023px)"
              />
              <source
                srcSet={illustrationDesktop}
                media="(min-width: 1024px)"
              />
              <img
                src={illustrationMobile}
                alt="illustration of screens and data"
              />
            </picture>
          </div>
          <section className="card__content-container">
            <div className="card__text-content">
              <h1 className="card__heading">Stay updated!</h1>
              <p className="card__body">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="card__ul">
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
            </div>
            <EmailForm handleSuccess={handleSuccess} />
          </section>
        </>
      )}
    </article>
  );
}

export default SignupCard;
